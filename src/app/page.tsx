'use client'

import { LogoutButton } from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


const Page = () => {
  
  const trpc = useTRPC()
  const queryClient = useQueryClient()
  const {data} = useQuery(trpc.getWorkflows.queryOptions())

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
      toast.success("Job Queued Successfullyyyyyyyyyyyyyyyy!")
    }
  }))

  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess: () => {
      toast.success("AI Job Queued Successfullyyyyyyyyyyyyyyyy!")
    }
  }))


  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected component
      <div>
        {JSON.stringify(data, null, 2)}
      </div>
      <Button disabled = {testAi.isPending} onClick={() => testAi.mutate()}>
        Test AI Workflow
      </Button>
      <Button disabled = {create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
