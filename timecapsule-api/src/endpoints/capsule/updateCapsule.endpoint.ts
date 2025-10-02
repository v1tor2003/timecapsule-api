import { Request, Response } from 'express';
import { CapsuleService } from '../../services/capsule.service';
import { UpdateCapsuleRequest } from '../../requests/capsule/updateCapsule.request';
import { Capsule } from '../../domain/Capsule';
import { UploadService } from "../../services/upload.service";
import { CapsuleNotFoundError } from '../../utils/errorHandler';

export const updateCapsuleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body as UpdateCapsuleRequest;

  let memory_url: string | undefined = undefined;
  if (req.file) {
    memory_url = await UploadService.sendFileToUploadApi(req.file as Express.Multer.File);
  }

  if(await CapsuleService.findById(id) === null) {
    throw new CapsuleNotFoundError(id.toString());
  }

  const updated = await CapsuleService.update(id, {
    ...data,
    memory_url: memory_url,
    scheduled_date: data.scheduled_date ? new Date(data.scheduled_date) : undefined,
  } as Partial<Capsule>);

  if (!updated) return res.status(404).json({ message: 'Not found' });

  res.status(204).send();
};
