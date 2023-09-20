const req = require('supertest')
const app = require('../../index');

describe('Test 01', () => {
    it('Create User sucess', async () => {
        console.log("User sucess");
        const res = await req(app)
        .post('/signup').send({
            name: 'Test',
            username: 'test',
            pass: '@t3st'
        })

        console.log(res.body)
        expect(res.body)
        .toStrictEqual({ erro: "User aleredy exists"});
    });

    it('Create User fail', async () => {
        console.log("User fail");
        const res = await req(app)
        .post('/signup').send({
            name: '',
            username: '',
            pass: ''
        })

        console.log(res.body)
        expect(res.body)
        .toStrictEqual({ erro: 'Fields cannot be empty' });
    });
    it('Login sucess', async () => {
        console.log("login sucess");
        const res = await req(app)
        .post('/login').send({
            username: '!user',
            pass: '!pass'
        })

        console.log(res.body)
        expect(res.body)
        .toStrictEqual({ erro: "Invalid keys" });
    });

    it('Login fail', async () => {
        console.log("login fail");
        const res = await req(app)
        .post('/login').send({
            username: '',
            pass: ''
        })

        console.log(res.body)
        expect(res.body)
        .toStrictEqual({erro: 'Fields cannot be empty'});
    });
})