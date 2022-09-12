import { credentials } from '@prisma/client';

export type Credential = credentials;

export interface NewCredentialData {
  userId: number;
  label: string;
  url: string;
  credential: string;
  password: string;
}