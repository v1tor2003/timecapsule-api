import { Request, Response } from 'express';
import { CapsuleService } from '../../services/capsule.service';
import { UpdateCapsuleRequest } from '../../requests/capsule/updateCapsule.request';
import { Capsule } from '../../domain/Capsule';

export const updateCapsuleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body as UpdateCapsuleRequest;

  // replace with actual file upload handling logic
  const memory_url = "new_file_url"

  const updated = await CapsuleService.update(id, {
    ...data,
    memory_url: memory_url,
    scheduled_date: data.scheduled_date ? new Date(data.scheduled_date) : undefined,
  } as Partial<Capsule>);

  if (!updated) return res.status(404).json({ message: 'Not found' });

  res.status(204).send();
};
