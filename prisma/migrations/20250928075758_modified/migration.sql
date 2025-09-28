/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "public"."Blog_title_key";

-- DropIndex
DROP INDEX "public"."Project_title_key";

-- AlterTable
ALTER TABLE "public"."Project" ALTER COLUMN "githubLink" DROP NOT NULL,
ALTER COLUMN "liveLink" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."Admin";
