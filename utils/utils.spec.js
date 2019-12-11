const convertNumToBoolean = require('./convertNumBoolean');
const removeProperties = require('./removeProperties');
const db = require('../data/db-config');
const {
    add,
    findById,
    findAll,
    update,
    remove,
    search
} = require('./db-helpers');

/**
 * Tests here provide confirmation the util functions work as expected
 * and work with the data consistently.
 * Each of the DB helper methods are tested here
 * The Methods table is used for testing, but given these tests
 * are successful it should be confirmation of how they would
 * work with the other tables since there isn't anything
 * absolutely unique about each table other than the data they store.
 * This also confirms the DB helper methods work as expected
 * with the table that is provided as their first argument.
 */

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
    describe('DB Helpers', () => {
        beforeEach(async () => {
            await db('methods').truncate();
        });
        it('should insert a coffee method', async () => {
            await add('methods', { name: 'test', user_id: 1 });

            const methods = await db('methods');
            expect(methods).toHaveLength(1);
        });
        it('should insert the expected coffee method', async () => {
            await add('methods', { name: 'test', user_id: 1 });

            const methods = await db('methods');
            expect(methods[0].name).toBe('test');
        });
        it('should return the coffee method by its id', async () => {
            await add('methods', { name: 'test', user_id: 1 });
            const method = await findById('methods', 1);

            expect(method.name).toBe('test');
        });
        it('should return a list of coffee methods', async () => {
            await add('methods', { name: 'test 1', user_id: 1 });
            await add('methods', { name: 'test 2', user_id: 1 });

            const methods = await findAll('methods');
            expect(methods).toHaveLength(2);
        });
        it('should update the coffee method', async () => {
            await add('methods', { name: 'test', user_id: 1 });
            const [ firstVersion ] = await db('methods');

            expect(firstVersion.name).toBe('test');

            await update('methods', { name: 'updated' }, 1);
            const [ updatedVersion ] = await db('methods');

            expect(updatedVersion.name).toBe('updated');
        });
        it('should find the expected coffee method', async () => {
            await add('methods', { name: 'test 1', user_id: 1 });
            await add('methods', { name: 'test 2', user_id: 1 });
            await add('methods', { name: 'test 3', user_id: 1 });

            const results = await search('methods', 'id', 2);
            expect(results).toHaveLength(1);
            expect(results[0].name).toBe('test 2');
        });
        it('should remove the expected coffee method', async () => {
            await add('methods', { name: 'test 1', user_id: 1 });
            await add('methods', { name: 'test 2', user_id: 1 });
            await add('methods', { name: 'test 3', user_id: 1 });

            await remove('methods', 2);

            const methods = await db('methods');
            expect(methods).toHaveLength(2);
            expect(methods[0].name).toBe('test 1');
            expect(methods[1].name).toBe('test 3');
        });
    });
});