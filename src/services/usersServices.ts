import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { findUserByEmail, findUserById, insertUser } from '../repositories/usersRepository';
import { hash, compareHash } from '../repositories/cryptographyRepository';
import { User, NewUserData } from '../types/userTypes';
config();

const SECRET = process.env.JWT_SECRET as string;

export function generateToken(userId: number): string {
  return jwt.sign(
    { userId },
    SECRET,
    { expiresIn: 60 * 60 * 24 * 30 }
  );
}

export async function validateToken(token: string): Promise<User> {
  try {
    const payload: any = jwt.verify(token, SECRET)
    const user: User | null = await findUserById(payload.userId);
    if (!user) throw { type: 'Unauthorized' };
    return user;
  } catch (err) {
    throw { type: 'Unauthorized' };
  }
}

export async function createUser(data: NewUserData): Promise<void> {
  const checkEmail = await findUserByEmail(data.email);
  if (checkEmail) throw { type: 'Unauthorized' };
  const passwordHash = await hash(data.password);
  await insertUser({...data, password: passwordHash});
}

export async function validateLogin(email: string, password: string): Promise<User> {
  const user: User | null = await findUserByEmail(email);
  if (!user) throw { type: 'Unauthorized' };
  const passwordCheck = await compareHash(password, user.password);
  if (!passwordCheck) throw { type: 'Unauthorized' };
  return user;
}