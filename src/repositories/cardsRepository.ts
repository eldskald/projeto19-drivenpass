import db from '../database';
import { Card, NewCardData } from '../types/cardTypes';

export async function findCardById(id: number): Promise<Card | null> {
  return await db.cards.findUnique({
    where: { id }
  });
}

export async function findAllUserCards(id: number): Promise<Card[]> {
  return await db.cards.findMany({
    where: { userId: id }
  });
}

export async function insertCard(data: NewCardData): Promise<void> {
  await db.cards.create({
    data: {
      userId: data.userId,
      label: data.label,
      number: data.number,
      holderName: data.holderName,
      expirationDate: data.expirationDate,
      securityCode: data.securityCode,
      password: data.password,
      isVirtual: data.isVirtual,
      type: data.cardType
    }
  });
}

export async function removeCard(id: number): Promise<void> {
  await db.cards.delete({
    where: { id }
  });
}