import { documents } from "@prisma/client";

export type Document = documents;

export type DocumentType = 'rg' | 'cnh';

export interface NewDocumentData {
  userId: number;
  fullName: string;
  emissionDate: string;
  expirationDate: string;
  registryNumber: string;
  emittedBy: string;
  documentType: DocumentType;
}