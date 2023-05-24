const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const url ='http://127.0.0.1:5001/monapp-33057/us-central1/app';

//@Access Route:
//http://127.0.0.1:5001/monapp-33057/us-central1/app/docs/swagger
class SwaggerSpec {
   static swaggerJSON;
    constructor() {}

    static setUpSwaggerJSDoc() {
      const routesPath = path.resolve(__dirname, 'index.js');
      let swaggerDefinition = {
        openapi: '3.0.0',
        info: {
          title: 'MonApp API',
          version: '1.0.0',
          description: 'Backend API service for MonApp',
        },
        basePath: '/',
        servers: [
            {
              url,
              description: 'MonApp --dev',
            },
          ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
      };
      let options = {
        swaggerDefinition: swaggerDefinition,
        apis: [routesPath],
      };
      this.swaggerJSON = swaggerJSDoc(options);
    }
  
    static getSwaggerJSON() {
      return this.swaggerJSON;
    }
  }

  module.exports = SwaggerSpec