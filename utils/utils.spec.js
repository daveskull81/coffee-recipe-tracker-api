const convertNumToBoolean = require('./convertNumBoolean');

describe('Utility functions', () => {
    describe('convertNumToBoolean', () => {
        it('should return true when given the number 1', () => {
            const result = convertNumToBoolean(1);
            expect(result).toBe(true);
        });
        it('should return false when given the number 0', () => {
            const result = convertNumToBoolean(0);
            expect(result).toBe(false);
        });
        it('should return 1 when given true', () => {
            const result = convertNumToBoolean(true);
            expect(result).toBe(1);
        });
        it('should return 0 when given false', () => {
            const result = convertNumToBoolean(false);
            expect(result).toBe(0);
        });
    });
});