import db from '../database';
import { Wifi, NewWifiData } from '../types/wifiTypes';

export async function findWifiById(id: number): Promise<Wifi | null> {
  return await db.wifis.findUnique({
    where: { id }
  });
}

export async function findAllUserWifis(id: number): Promise<Wifi[]> {
  return await db.wifis.findMany({
    where: { userId: id }
  });
}

export async function insertWifi(data: NewWifiData): Promise<void> {
  await db.wifis.create({
    data: {
      userId: data.userId,
      label: data.label,
      name: data.name,
      password: data.password
    }
  });
}

export async function removeWifi(id: number): Promise<void> {
  await db.wifis.delete({
    where: { id }
  });
}