'use strict';

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const routes = require('./routes/index-route');

const options = {

    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "API",
            version: "1.0.0",
            description: "Test Express API with autogenerate swagger doc",
        },
        host: "localhost:3000",
        basePath: "/",
    },
    apis: ['./routes/index-route'],    
};

const spec = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec, { explorer: false, customCss: '.swagger-ui .topbar { display: block }'}));
    app.use('/', routes); 
}
