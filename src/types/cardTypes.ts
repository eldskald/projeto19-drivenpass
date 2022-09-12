import { cards } from "@prisma/client";

export type Card = cards;

export type CardType = 'credit' | 'debit' | 'both';

export interface NewCardData {
  userId: number;
  label: string;
  number: string;
  holderName: string;
  expirationDate: string;
  securityCode: string;
  password: string;
  isVirtual: boolean;
  cardType: CardType;
}