const {apartmentValidator} = require('../validators');
const ErrorHandler = require('../errors/ErrorHandler');
const {constants} = require('../configs');
const {Apartment} = require('../dataBase');

module.exports = {
    isApartmentBodyValid: (req, res, next) => {
        try {
            const {error, value} = apartmentValidator.createApartmentValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, constants.BAD_REQUEST);
            }

            req.body = value;

            next();
        } catch (err) {
            next(err);
        }
    },

    isAddStarBodyValid: (req, res, next) => {
        try {
            const {error, value} = apartmentValidator.isStarPresentValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, constants.BAD_REQUEST);
            }

            req.body = value;

            next();
        } catch (err) {
            next(err);
        }
    },

    checkApartmentIdMiddleware: async (req, res, next) => {
        try {
            const {apartment_id: _id} = req.params;

            const apartmentId = await Apartment.findById(_id);

            if (!apartmentId) {
                throw new ErrorHandler(constants.APARTMENT_ID_DOES_NOT_EXIST, constants.BAD_REQUEST);
            }

            req.apartment = apartmentId;

            next();
        } catch (err) {
            next(err);
        }
    },

    checkApartmentIdAndUserIdMiddleware: async (req, res, next) => {
        try {
            const {apartment_id} = req.params;
            const {_id} = req.user;

            const user_id = _id.toString();

            const apartmentId = await Apartment.findOne({_id: apartment_id, user_id});

            if (!apartmentId) {
                throw new ErrorHandler(constants.APARTMENT_ID_DOES_NOT_EXIST, constants.BAD_REQUEST);
            }

            req.booking = apartmentId;

            next();
        } catch (err) {
            next(err);
        }
    },
};
