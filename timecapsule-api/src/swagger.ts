
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Time Capsule API',
      version: '1.0.0',
      description: 'A simple API to create and manage time capsules',
    },
    components: {
      schemas: {
        CreateCapsuleRequest: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            scheduled_date: {
              type: 'string',
              format: 'date-time',
            },
            file: {
              type: 'string',
              format: 'binary',
            },
          },
          required: ['title', 'description', 'scheduled_date', 'file'],
        },
        UpdateCapsuleRequest: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            scheduled_date: {
              type: 'string',
              format: 'date-time',
            },
            file: {
              type: 'string',
              format: 'binary'
            }
          },
        },
        CapsuleResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            scheduled_date: {
              type: 'string',
              format: 'date-time',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/endpoints/**/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
