import { 
  findWifiById,
  findAllUserWifis,
  insertWifi,
  removeWifi
} from '../repositories/wifisRepository';
import { encrypt, decrypt } from '../repositories/cryptographyRepository';
import { Wifi, NewWifiData } from '../types/wifiTypes';

export async function createWifi(data: NewWifiData): Promise<void> {
  try {
    const encryptedPassword: string = encrypt(data.password);
    await insertWifi({...data, password: encryptedPassword});
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

export async function getWifi(wifiId: number, userId: number): Promise<Wifi> {
  const wifi: Wifi | null = await findWifiById(wifiId);
  if (!wifi || wifi.userId != userId) throw { type: 'Not Found' };
  const decryptedPassword: string = decrypt(wifi.password);
  return { ...wifi, password: decryptedPassword };
}

export async function getWifis(userId: number): Promise<Wifi[]> {
  const wifis: Wifi[] = await findAllUserWifis(userId);
  for (let i = 0; i < wifis.length; i++) {
    const decryptedPassword: string = decrypt(wifis[i].password);
    wifis[i] = { ...wifis[i], password: decryptedPassword };
  }
  return wifis;
}

export async function deleteWifi(wifiId: number, userId: number): Promise<void> {
  const wifi: Wifi | null = await findWifiById(wifiId);
  if (!wifi || wifi.userId != userId) throw { type: 'Not Found' };
  await removeWifi(wifiId);
}