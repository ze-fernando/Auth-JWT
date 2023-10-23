# Start
 
 **About**

 Authentication API with Nodejs and JWT, this API allows users to register and login, encrypts passwords and saves them securely in the database, uses 3 routes, registration login and home, you can see its details below

 **Stack**
 * Nodejs
 * JWT
 * Express
 * Bcrypt
 * Mysql2
 * Nodemon
 * Docker

 **Run**

 `git clone https://github.com/ze-fernando/node-API`

 `cd node-API`

 `npm install`

 `Docker-compose up`

 `npm start` 

[ localhost:3000/doc(]localhost:3000/doc)

 *You can test with*
 
 `npm test`



 **Endpoints**

 *{{localhost}}/3000/signup*
 
This route to register users, you must go through the name, username and password parameter, if your user already exists in the bank, the api will return an error stating that there is already someone with that username

 ```yaml
 {
    "name": "Dudinha",
    "username": "Madu1s",
    "pass": "zequinhaEmadu"
 }
 ```

 *{{localhost}}/3000/login*
 
This route performs the login, you must go through the username and password parameters, if the parameters are correct the api will return the access token for the home 

```yaml
{
    "username": "Madu1s",
    "pass": "zequinhaEmadu"
}
```

*{{localhost}}/3000/home*

If you have the authentication token

```yaml
{
    "message": "This is the home page"
}
```

if you don't 

```yaml
{
    erro: "Invalid keys"
}
```
