"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect = require("expect");
const request = require("supertest");
const server_1 = require("./../server");
const Todo_1 = require("./../models/Todo");
beforeEach(done => {
    Todo_1.Todo.remove({}).then(() => done());
});
describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo tesxt';
        request(server_1.default)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect(res => {
            expect(res.body.text).toBe(text);
        }).end((err, res) => {
            if (err) {
                return done(err);
            }
            Todo_1.Todo.find().then(todos => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch(e => done(e));
        });
    });
});
