import express from 'express';
import { uploadRouter } from './upload.route';
import path from 'path';

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api/v1/upload', uploadRouter);

app.listen(4000, () => {
  console.log(`Hosting on http://localhost:4000`);
});