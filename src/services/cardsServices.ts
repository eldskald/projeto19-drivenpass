import { 
  findCardById,
  findAllUserCards,
  insertCard,
  removeCard
} from '../repositories/cardsRepository';
import { encrypt, decrypt } from '../repositories/cryptographyRepository';
import { Card, NewCardData } from '../types/cardTypes';

export async function createCard(data: NewCardData): Promise<void> {
  try {
    const encryptedCode: string = encrypt(data.securityCode);
    const encryptedPassword: string = encrypt(data.password);
    await insertCard({...data, securityCode: encryptedCode, password: encryptedPassword});
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

export async function getCard(cardId: number, userId: number): Promise<Card> {
  const card: Card | null = await findCardById(cardId);
  if (!card || card.userId != userId) throw { type: 'Not Found' };
  const decryptedCode: string = decrypt(card.securityCode);
  const decryptedPassword: string = decrypt(card.password);
  return { ...card, securityCode: decryptedCode, password: decryptedPassword };
}

export async function getCards(userId: number): Promise<Card[]> {
  const cards: Card[] = await findAllUserCards(userId);
  for (let i = 0; i < cards.length; i++) {
    const decryptedCode: string = decrypt(cards[i].securityCode);
    const decryptedPassword: string = decrypt(cards[i].password);
    cards[i] = { ...cards[i], securityCode: decryptedCode, password: decryptedPassword };
  }
  return cards;
}

export async function deleteCard(cardId: number, userId: number): Promise<void> {
  const card: Card | null = await findCardById(cardId);
  if (!card || card.userId != userId) throw { type: 'Not Found' };
  await removeCard(cardId);
}