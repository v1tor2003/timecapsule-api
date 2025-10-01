import axios from "axios";
import FormData from "form-data";
import multer from "multer";
import { config } from "../config/env";

export type UploadResponse = {
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
}

const storage = multer.memoryStorage();

export class UploadService {
  static uploadMiddleware = multer({ storage }).single('file');

  static async sendFileToUploadApi(file: Express.Multer.File): Promise<string> {
    if(!file) throw new Error("No file provided");
    
    const form = new FormData();
    form.append('file', file.buffer, file.originalname);

    const response = await axios.post<UploadResponse>(
      config.UPLOAD_API_URL + 'api/v1/upload',
      form,
      { headers: form.getHeaders() }
    );
    
    return response.data.path;
  }
}