import db from '../database';
import { User, NewUserData } from '../types/userTypes';

export async function findUserById(id: number) {
  return await db.users.findFirst({
    where: {
      id: id
    }
  });
}

export async function findUserByEmail(email: string) {
  return await db.users.findFirst({
    where: {
      email: email
    }
  });
}

export async function insertUser(newUser: NewUserData) {
  await db.users.create({
    data: {
      email: newUser.email,
      password: newUser.password
    }
  });
}
