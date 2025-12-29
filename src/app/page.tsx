import {trpc, getQueryClient} from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import { Client } from "./client";

const Page = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    trpc.getUsers.queryOptions()
  );

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>loading...</p>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
