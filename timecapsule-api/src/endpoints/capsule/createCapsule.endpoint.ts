import { Request, Response } from "express";
import { CreateCapsuleRequest } from "../../requests/capsule/createCapsule.request";
import { CapsuleResponse } from "../../responses/capsule/capsule.response";
import { CapsuleService } from "../../services/capsule.service";
import { UploadService } from "../../services/upload.service";

export const createCapsuleHandler = async (req: Request, res: Response) => {
  const data = req.body as CreateCapsuleRequest;

  const memory_url = await UploadService.sendFileToUploadApi(req.file as Express.Multer.File);
  
  const created = await CapsuleService.create({
    title: data.title,
    description: data.description,
    memory_url: memory_url,
    scheduled_date: new Date(data.scheduled_date)
  });

  res.status(201).json(CapsuleResponse.toDto(created));
}