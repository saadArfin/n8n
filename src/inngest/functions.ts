import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    

    await step.sleep("fetching the video", "5s");

    await step.sleep("transcribing the video", "5s");

    await step.sleep("sending to llm", "5s");

    await step.run("Create-Wokflow", () => {
        return prisma.workflow.create({
            data: {
                name: 'workflow-from-ingest'
            }
    })
    })
    
  },
);