
import prisma from '@/lib/db';
import { baseProcedure, createTRPCRouter, premiumProcedure, protectedProcedure } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({

  testAi: premiumProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    })

    return { success: true, message: 'Job Queued Successfully!' };
  }),

  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),

  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "saadarfin@example.com",
      },
    });

    return { success: true, message: 'Job Queued Successfully!' };
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
