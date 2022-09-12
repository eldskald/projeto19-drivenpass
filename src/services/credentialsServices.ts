import {
  insertCredential,
  findCredentialById,
  findAllUserCredentials,
  removeCredential
} from '../repositories/credentialsRepository';
import { encrypt, decrypt } from '../repositories/cryptographyRepository';
import { Credential, NewCredentialData } from '../types/credentialTypes';

export async function createCredential(data: NewCredentialData): Promise<void> {
  try {
    const encryptedPassword: string = encrypt(data.password);
    await insertCredential({...data, password: encryptedPassword});
  } catch (err: any) {
    const meta: { target: string[] } | undefined = err.meta;
    if (!meta) {
      throw err;
    }
    if (meta.target[0] === 'userId' && meta.target[1] === 'label') {
      throw { type: 'Conflict', message: 'Label already in use' };
    }
  }
}

export async function getCredential(credentialId: number, userId: number): Promise<Credential> {
  const credential: Credential | null = await findCredentialById(credentialId);
  if (!credential || credential.userId != userId) throw { type: 'Not Found' };
  const decryptedPassword = decrypt(credential.password);
  return { ...credential, password: decryptedPassword };
}

export async function getCredentials(userId: number): Promise<Credential[]> {
  const credentials: Credential[] = await findAllUserCredentials(userId);
  for (let i = 0; i < credentials.length; i++) {
    const decryptedPassword: string = decrypt(credentials[i].password);
    credentials[i] = { ...credentials[i], password: decryptedPassword };
  }
  return credentials;
}

export async function deleteCredential(credentialId: number, userId: number): Promise<void> {
  const credential: Credential | null = await findCredentialById(credentialId);
  if (!credential || credential.userId != userId) throw { type: 'Not Found' };
  await removeCredential(credentialId);
}