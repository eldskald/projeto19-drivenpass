import db from '../database';
import { Credential, NewCredentialData } from '../types/credentialTypes';

export async function findCredentialById(id: number): Promise<Credential | null> {
  return await db.credentials.findUnique({
    where: { id }
  });
}

export async function findAllUserCredentials(id: number): Promise<Credential[]> {
  return await db.credentials.findMany({
    where: { userId: id }
  });
}

export async function insertCredential(data: NewCredentialData): Promise<void> {
  await db.credentials.create({
    data: {
      userId: data.userId,
      label: data.label,
      url: data.url,
      credential: data.credential,
      password: data.password
    }
  });
}

export async function removeCredential(id: number): Promise<void> {
  await db.credentials.delete({
    where: { id }
  });
}