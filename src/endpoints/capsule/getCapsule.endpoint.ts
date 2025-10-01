import { Request, Response } from 'express';
import { CapsuleService } from '../../services/capsule.service';
import { CapsuleResponse } from '../../responses/capsule/capsule.response';

export const getCapsuleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const capsule = await CapsuleService.findById(id);

  if (!capsule) return res.status(404).json({ message: 'Not found' });

  res.json(CapsuleResponse.toDto(capsule));
};
