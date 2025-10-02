import { Request, Response } from 'express';
import { CapsuleService } from '../../services/capsule.service';
import { CapsuleResponse } from '../../responses/capsule/capsule.response';
import { CapsuleNotFoundError } from '../../utils/errorHandler';

export const getCapsuleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const capsule = await CapsuleService.findById(id);

  if (!capsule) throw new CapsuleNotFoundError(id.toString());
  
  res.json(CapsuleResponse.toDto(capsule));
};
