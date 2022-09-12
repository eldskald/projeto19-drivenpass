import db from '../database';
import { Document, NewDocumentData } from '../types/documentTypes';

export async function findDocumentById(id: number): Promise<Document | null> {
  return await db.documents.findUnique({
    where: { id }
  });
}

export async function findAllUserDocuments(id: number): Promise<Document[]> {
  return await db.documents.findMany({
    where: { userId: id }
  });
}

export async function insertDocument(data: NewDocumentData): Promise<void> {
  await db.documents.create({
    data: {
      userId: data.userId,
      fullName: data.fullName,
      emissionDate: data.emissionDate,
      expirationDate: data.expirationDate,
      registryNumber: data.registryNumber,
      emittedBy: data.emittedBy,
      type: data.documentType
    }
  });
}

export async function removeDocument(id: number): Promise<void> {
  await db.documents.delete({
    where: { id }
  });
}