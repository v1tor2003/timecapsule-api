import { Router } from 'express';
import { uploadFileEndpoint } from './upload.endpoint';

export const uploadRouter = Router();

uploadRouter.post('/', uploadFileEndpoint);
