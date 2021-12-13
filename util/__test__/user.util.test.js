const {userUtil} = require('../../../../Desktop/util');
const objNorm = [
    {
        input:
            {
                name: 'Taras',
                password: 'jhgdgdg',
                username: 'Udhgdvbfn'
            },
        output:
            {
                name: 'Taras',
                username: 'Udhgdvbfn'
            },
    },
    {
        input:
            {
                name: 'Taras',
                password: 'jhgdgdg',
                username: 'Udhgdvbfn',
                age:30
            },
        output:
            {
                name: 'Taras',
                username: 'Udhgdvbfn',
                age:30
            },
    },
    {
        input:
            {
                name: 'Taras',
                password: 'jhgdgdg',
                username: 'Udhgdvbfn',
                age:30,
                __v:1.22
            },
        output:
            {
                name: 'Taras',
                username: 'Udhgdvbfn',
                age:30
            },
    }
];

describe('Test userUtil', () => {
    test('Should return normalized user', () => {
        objNorm.forEach((testObj) => {
            const obj = userUtil.userNormalizator(testObj.input);

            expect(obj)
                .toStrictEqual(testObj.output);
        });
    });
});
