/*
  Warnings:

  - Added the required column `cref` to the `Instructor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Instructor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'INSTRUCTOR',
    "active" TEXT NOT NULL DEFAULT 'ACTIVE',
    "cref" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Instructor" ("active", "cpf", "createdAt", "email", "id", "name", "phone", "role", "updatedAt") SELECT "active", "cpf", "createdAt", "email", "id", "name", "phone", "role", "updatedAt" FROM "Instructor";
DROP TABLE "Instructor";
ALTER TABLE "new_Instructor" RENAME TO "Instructor";
CREATE UNIQUE INDEX "Instructor_cref_key" ON "Instructor"("cref");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
