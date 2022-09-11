import { findUserByEmail } from '../repositories/usersRepository';

export async function isAlreadyRegistered(email: string): Promise<void> {
  const checkEmail = await findUserByEmail(email);
  if (checkEmail) throw { type: 'Unauthorized' };
}