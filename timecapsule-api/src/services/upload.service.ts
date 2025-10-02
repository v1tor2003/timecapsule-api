import axios from "axios";
import FormData from "form-data";
import multer from "multer";
import { config } from "../config/env";
import { UploadError } from "../utils/errorHandler";

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
      config.UPLOAD_API_URL + '/api/v1/upload',
      form,
      { headers: form.getHeaders() }
    );

    if (response.status !== 201) {
      throw new UploadError("Failed to upload file", [response.statusText]);
    }
    
    return response.data.path;
  }
}