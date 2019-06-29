// require the Koa server
const server = require("./server/index");
// require supertest
const request = require("supertest");
// close the server after each test

describe("routes: index and items", () => {
    test("/ should respond with 200 status", async () => {
        const response = await request(server).get("/");
        expect(response.status).toEqual(200);
        // expect(response.type).toEqual("application/json");
        // expect(response.body.data).toEqual("Sending some JSON");
    });

    test("/items should respond with 200 status", async () => {
        const response = await request(server).get("/items");
        expect(response.status).toEqual(200);
        // expect(response.type).toEqual("application/json");
        // expect(response.body.data).toEqual("Sending some JSON");
    });

    test("/items/10 should respond with 200 status", async () => {
        const response = await request(server).get("/items/0");
        expect(response.status).toEqual(200);
        // expect(response.type).toEqual("application/json");
        // expect(response.body.data).toEqual("Sending some JSON");
    });

    test("Should 404 when asked for a nonexistent endpoint", async () => {
        const response = await request(server).get("/arglebargle");
        expect(response.status).toEqual(404);
        // expect(response.type).toEqual("application/json");
        // expect(response.body.data).toEqual("Sending some JSON");
    });
});

// const request = require('supertest');
// const server = require('./server/index.js');

// test('express server exists', () => {
//     expect(!!server).toBe(true);
// });

// test('server responds to GET /items', async (done) => {
//     request(server).get('/items')
//     .then((response) => {
//         expect(response.statusCode).toBe(200);

//     });
// });

// test('server responds to GET /items:id', async (done) => {
//     request(server).get('/items/5')
//     .then((response) => {
//         expect(response.statusCode).toBe(200);

//     });
// });