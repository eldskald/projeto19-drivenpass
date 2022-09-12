import { 
  findDocumentById,
  findAllUserDocuments,
  insertDocument,
  removeDocument
} from '../repositories/documentsRepository';
import { Document, NewDocumentData } from '../types/documentTypes';

export async function createDocument(data: NewDocumentData): Promise<void> {
  await insertDocument({...data});
}

export async function getDocument(documentId: number, userId: number): Promise<Document> {
  const document: Document | null = await findDocumentById(documentId);
  if (!document || document.userId != userId) throw { type: 'Not Found' };
  return {...document};
}

export async function getDocuments(userId: number): Promise<Document[]> {
  const documents: Document[] = await findAllUserDocuments(userId);
  return documents;
}

export async function deleteDocument(documentId: number, userId: number): Promise<void> {
  const document: Document | null = await findDocumentById(documentId);
  if (!document || document.userId != userId) throw { type: 'Not Found' };
  await removeDocument(documentId);
}