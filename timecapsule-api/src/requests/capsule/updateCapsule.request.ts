export type UpdateCapsuleRequest = Partial<{
  title: string;
  description: string;
  scheduled_date: string; // ISO 8601 format
}>