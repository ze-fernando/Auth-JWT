const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/authRoute.js', './src/routes/userRoute.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})