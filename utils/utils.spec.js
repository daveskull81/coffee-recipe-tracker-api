const convertNumToBoolean = require('./convertNumBoolean');
const removeProperties = require('./removeProperties');

describe('Utility functions', () => {
    describe('convertNumToBoolean', () => {
        it('should return true when given the number 1', () => {
            const result = convertNumToBoolean(1);
            expect(result).toBeDefined();
            expect(result).toBe(true);
        });
        it('should return false when given the number 0', () => {
            const result = convertNumToBoolean(0);
            expect(result).toBeDefined();
            expect(result).toBe(false);
        });
        it('should return 1 when given true', () => {
            const result = convertNumToBoolean(true);
            expect(result).toBeDefined();
            expect(result).toBe(1);
        });
        it('should return 0 when given false', () => {
            const result = convertNumToBoolean(false);
            expect(result).toBeDefined();
            expect(result).toBe(0);
        });
    });
    describe('removeProperties', () => {
        it('should return an Array when given an Array', () => {
            const arrOfObjs = [{ one: 'Hello', two: 'World' }, { one: 'Hello', two: 'World' }, { one: 'Hello', two: 'World' }];
            const results = removeProperties(arrOfObjs, ['two']);
            const isResultsArray = Array.isArray(results);
            expect(results).toBeDefined();
            expect(isResultsArray).toBe(true);
        });
        it('should return an Object when given an Object', () => {
            const objToRemoveFrom = { one: 'Hello', two: 'World' };
            const results = removeProperties(objToRemoveFrom, ['two']);
            expect(results).toBeDefined();
            expect(typeof results).toBe('object');
        });
        it('should only remove one property when given one to remove', () => {
            const objToRemoveFrom = { one: 'Hello', two: 'World' };
            const results = removeProperties(objToRemoveFrom, ['two']);
            expect(results).toBeDefined();
            expect(Object.keys(results).length).toBe(1);
        });
    });
});