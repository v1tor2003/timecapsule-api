import express from 'express';
import { Request, Response } from 'express';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import { errorMiddleware } from './middlewares/errorMiddleware';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorMiddleware);

export default app;
