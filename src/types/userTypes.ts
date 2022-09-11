import { users } from '@prisma/client';

export type User = users;

export interface NewUserData {
  email: string;
  password: string;
};