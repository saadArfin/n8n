
import prisma from '@/lib/db';
import { baseProcedure, createTRPCRouter, premiumProcedure, protectedProcedure } from '../init';
import { inngest } from '@/inngest/client';
import { workflowsRouter } from '@/features/workflows/server/router';
export const appRouter = createTRPCRouter({
  workflows: workflowsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
