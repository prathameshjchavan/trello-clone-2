import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// Store the prisma object in global variable in development mode
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
