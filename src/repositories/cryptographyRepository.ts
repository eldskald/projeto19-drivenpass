import bcrypt from 'bcrypt';
import Cryptr from 'cryptr';
import { config } from 'dotenv';
config();

const SECRET = process.env.CRYPTR_SECRET as string;
const cryptr = new Cryptr(SECRET);

export async function hash(data: string): Promise<string> {
  return await bcrypt.hash(data, 10);
}

export async function compareHash(data: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(data, hash);
}

export function encrypt(data: string): string {
  return cryptr.encrypt(data);
}

export function decrypt(encrypted: string): string {
  return cryptr.decrypt(encrypted);
}