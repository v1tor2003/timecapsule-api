import { Request, Response } from 'express';
import { CapsuleService } from '../../services/capsule.service';

export const deleteCapsuleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await CapsuleService.delete(id);

  if (!deleted) return res.status(404).json({ message: 'Not found' });
  
  res.status(204).send();
};
