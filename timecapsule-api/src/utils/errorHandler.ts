export class ApiError extends Error {
  statusCode: number;
  details: string[] = [];

  constructor(statusCode: number, message: string, details: string[]) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

export class UploadError extends ApiError {
  constructor(message: string, details: string[]) {
    super(500, message, details);
  }
}

export class CapsuleNotFoundError extends ApiError {
  constructor(capsuleId: string) {
    super(404, `Capsule with ID ${capsuleId} not found`, [ `Capsule with ID ${capsuleId} does not exist` ]);
  }
}

