import { Request, Response } from 'express';
import { CapsuleService } from '../../services/capsule.service';
import { CapsuleResponse } from '../../responses/capsule/capsule.response';

export const listCapsulesHandler = async (_: Request, res: Response) => {
  const capsules = await CapsuleService.findAll();
  
  res.json(CapsuleResponse.toListDto(capsules));
};
