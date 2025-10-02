import { Router } from 'express';
import { capsuleRouter } from './capsule.routes';

export const router = Router();

router.use('/capsules', capsuleRouter);
