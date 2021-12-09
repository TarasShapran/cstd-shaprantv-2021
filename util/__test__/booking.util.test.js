const {bookingUtil} = require('../index');
const objects = [
    {
        input:
            {
                check_in:'2022-01-01',
                check_out:'2022-01-05',
                apartmentPrice:500
            },
        output:2000,
    },
    {
        input:
            {
                check_in:'2022-01-01',
                check_out:'2022-01-08',
                apartmentPrice:500
            },
        output:3500,
    },
    {
        input:
            {
                check_in:'2022-01-01',
                check_out:'2022-01-10',
                apartmentPrice:500
            },
        output:4500,
    }
];

describe('Test bookingUtil', () => {
    test('Should return price', () => {
        objects.forEach((testObj) => {
            const price = bookingUtil.calculatePrice(testObj.input.check_in,testObj.input.check_out,testObj.input.apartmentPrice);

            expect(price)
                .toStrictEqual(testObj.output);
        });
    });
});
