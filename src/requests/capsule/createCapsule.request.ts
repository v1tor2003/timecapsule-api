export type CreateCapsuleRequest = {
  title: string;
  description: string;
  memory: File;
  scheduled_date: string; // ISO 8601 format
};