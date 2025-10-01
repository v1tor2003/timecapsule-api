import dotenv from "dotenv";
dotenv.config();

export const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASS || '',
    DB_NAME: process.env.DB_NAME || 'timecapsule_db',
    PORT: process.env.PORT || 3000,
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
    UPLOAD_API_URL: process.env.UPLOAD_API_URL || 'http://localhost:4000'
}