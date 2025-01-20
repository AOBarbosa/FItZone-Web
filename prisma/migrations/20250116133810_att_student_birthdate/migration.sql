-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL DEFAULT '1990-01-01',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "feeStatus" TEXT NOT NULL DEFAULT 'SUCCESS',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Student" ("active", "birthdate", "cpf", "createdAt", "email", "feeStatus", "id", "name", "phone", "updatedAt") SELECT "active", "birthdate", "cpf", "createdAt", "email", "feeStatus", "id", "name", "phone", "updatedAt" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
