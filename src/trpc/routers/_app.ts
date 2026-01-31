
import prisma from '@/lib/db';
import { createTRPCRouter, protectedProcedure } from '../init';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
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
