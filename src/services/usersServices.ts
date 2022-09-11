import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { findUserByEmail } from '../repositories/usersRepository';
config();

const SECRET: string = String(process.env.JWT_SECRET);

export async function isAlreadyRegistered(email: string): Promise<void> {
  const checkEmail = await findUserByEmail(email);
  if (checkEmail) throw { type: 'Unauthorized' };
}

export function generateToken(userId: number): string {
  return jwt.sign(
    { userId },
    SECRET,
    { expiresIn: 60 * 60 * 24 * 30 }
  );
}