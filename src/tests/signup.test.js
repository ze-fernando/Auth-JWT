const req = require('supertest')
const app = require('../../index');

describe('Test 01', () => {
    it('Create User sucess', async () => {
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
})