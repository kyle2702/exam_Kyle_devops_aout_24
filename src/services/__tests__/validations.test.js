// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid(2000);
        expect(result).toBeDefined();
    });

    test('Année divisible par 400 est bissextile', () => {
        expect(isValid(2000)).toBe(true);
    });

    test('Année divisible par 100 mais pas par 400 n\'est pas bissextile', () => {
        expect(isValid(1700)).toBe(false);
        expect(isValid(1800)).toBe(false);
        expect(isValid(1900)).toBe(false);
        expect(isValid(2100)).toBe(false);
    });

    test('Année divisible par 4 mais pas par 100 est bissextile', () => {
        expect(isValid(2008)).toBe(true);
        expect(isValid(2012)).toBe(true);
        expect(isValid(2016)).toBe(true);
    });

    test('Année non divisible par 4 n\'est pas bissextile', () => {
        expect(isValid(2017)).toBe(false);
        expect(isValid(2018)).toBe(false);
        expect(isValid(2019)).toBe(false);
    });
});
