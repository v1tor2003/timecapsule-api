import { Request, Response } from 'express';
import { CapsuleService } from '../../services/capsule.service';
import { CapsuleNotFoundError } from '../../utils/errorHandler';

export const deleteCapsuleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await CapsuleService.delete(id);

  if (!deleted) throw new CapsuleNotFoundError(id.toString());

  res.status(204).send();
};
