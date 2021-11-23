-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task" TEXT NOT NULL,
    "detail" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false
);
