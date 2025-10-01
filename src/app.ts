import express from 'express';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
