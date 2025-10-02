export type Capsule = {
    id?: number;
    title: string;
    description: string;
    memory_url: string;
    scheduled_date: Date; // ISO 8601 format
    created_at?: Date; // ISO 8601 format
}