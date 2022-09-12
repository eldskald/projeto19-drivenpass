import { wifis } from "@prisma/client";

export type Wifi = wifis;

export interface NewWifiData {
  userId: number;
  label: string;
  name: string;
  password: string;
};