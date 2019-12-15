const request = require('supertest');
const server = require('../../index');
const { generateJWT } = require('../../../utils');

describe('Server', () => {
    describe('GET /api Status Check', () => {
        it('should return 200 OK', () => {
            return request(server).get('/api')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
        it('should return JSON formatted response', () => {
            return request(server).get('/api')
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
        it('should return { "status": "SUCCESS" }', () => {
            return request(server).get('/api')
                .then(res => {
                    expect(res.body).toStrictEqual({ status: 'SUCCESS' });
                });
        });
    });
    describe('Authentication', () => {
        it('should deny access to coffees route without JWT', () => {
            return request(server).get('/api/users/1/coffees')
                .then(res => {
                    expect(res.status).toBe(400);
                });
        });
        it('should deny access to coffees route with invalid JWT', () => {
            return request(server).get('/api/users/1/coffees')
                .set('Authorization', '123')
                .then(res => {
                    expect(res.status).toBe(401);
                });
        });
        it('should deny access to methods route without JWT', () => {
            return request(server).get('/api/users/1/methods')
                .then(res => {
                    expect(res.status).toBe(400);
                });
        });
        it('should deny access to methods route with invalid JWT', () => {
            return request(server).get('/api/users/1/methods')
                .set('Authorization', '123')
                .then(res => {
                    expect(res.status).toBe(401);
                });
        });
        it('should deny access to recipes route without JWT', () => {
            return request(server).get('/api/users/1/recipes')
                .then(res => {
                    expect(res.status).toBe(400);
                });
        });
        it('should deny access to recipes route with invalid JWT', () => {
            return request(server).get('/api/users/1/recipes')
                .set('Authorization', '123')
                .then(res => {
                    expect(res.status).toBe(401);
                });
        });
        it('should deny access to notes route without JWT', () => {
            return request(server).get('/api/users/1/recipes/1/notes')
                .then(res => {
                    expect(res.status).toBe(400);
                });
        });
        it('should deny access to notes route with invalid JWT', () => {
            return request(server).get('/api/users/1/recipes/1/notes')
                .set('Authorization', '123')
                .then(res => {
                    expect(res.status).toBe(401);
                });
        });                
    });
    describe('Authorization', () => {
        const token = generateJWT(2);
        
        it('should deny access to coffees route with JWT from a different user', () => {
            return request(server).get('/api/users/1/coffees')
            .set('Authorization', token)
            .then(res => {
                expect(res.status).toBe(401);
                expect(res.body).toStrictEqual({ message: 'Access to this data is unauthorized' });
            });
        });
        it('should deny access to methods route with JWT from a different user', () => {
            return request(server).get('/api/users/1/methods')
            .set('Authorization', token)
            .then(res => {
                expect(res.status).toBe(401);
                expect(res.body).toStrictEqual({ message: 'Access to this data is unauthorized' });
            });
        });
        it('should deny access to recipes route with JWT from a different user', () => {
            return request(server).get('/api/users/1/recipes')
            .set('Authorization', token)
            .then(res => {
                expect(res.status).toBe(401);
                expect(res.body).toStrictEqual({ message: 'Access to this data is unauthorized' });
            });
        });
        it('should deny access to notes route with JWT from a different user', () => {
            return request(server).get('/api/users/1/recipes/1/notes')
            .set('Authorization', token)
            .then(res => {
                expect(res.status).toBe(401);
                expect(res.body).toStrictEqual({ message: 'Access to this data is unauthorized' });
            });
        });
    });
});