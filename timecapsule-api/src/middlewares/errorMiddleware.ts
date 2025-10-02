// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/errorHandler";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  const isCustomError = err instanceof ApiError;

  const statusCode = isCustomError ? err.statusCode : 500;
  const message = isCustomError ? err.message : "Internal server error";

  const response: any = {
    message,
  };

  if (isCustomError && err.details) {
    response.details = err.details;
  }

  // Log simples (aqui vc pode integrar com um logger real)
  console.error({
    error: err,
    path: req.path,
    method: req.method,
  });

  return res.status(statusCode).json(response);
}
