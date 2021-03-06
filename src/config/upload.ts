import multer from 'multer';
import crypto from 'crypto';
import { resolve } from 'path';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');
export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;
      return callback(null, filename);
    },
  }),
};
