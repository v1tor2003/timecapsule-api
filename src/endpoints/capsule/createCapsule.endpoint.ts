import { Request, Response } from "express";
import { CreateCapsuleRequest } from "../../requests/capsule/createCapsule.request";
import { CapsuleResponse } from "../../responses/capsule/capsule.response";
import { CapsuleService } from "../../services/capsule.service";

export const createCapsuleHandler = async (req: Request, res: Response) => {
  const data = req.body as CreateCapsuleRequest;

  // Here you would typically handle file uploads and get the URL
  // For simplicity, let's assume the memory_url is provided in the request body
  const memory_url = "file_url"; // Replace with actual file upload handling logic

  const created = await CapsuleService.create({
    title: data.title,
    description: data.description,
    memory_url: memory_url,
    scheduled_date: new Date(data.scheduled_date)
  });

  res.status(201).json(CapsuleResponse.toDto(created));
}