-- CreateEnum
CREATE TYPE "documentType" AS ENUM ('rg', 'cnh');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullName" VARCHAR(50) NOT NULL,
    "emissionDate" VARCHAR(5) NOT NULL,
    "expirationDate" VARCHAR(5) NOT NULL,
    "registryNumber" VARCHAR(20) NOT NULL,
    "emittedBy" VARCHAR(50) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
