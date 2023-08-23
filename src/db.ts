import { PrismaClient } from "@prisma/client";

// Create Singleton so there is only one PrismaClient
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({log: ['query'],})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
//