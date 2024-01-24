import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import Info from "./_components/info";
import BoardList from "./_components/board-list";
import { checkSubscription } from "@/lib/subscription";

interface OrganizationIdPageProps {
  params: {
    organizationId: string;
  };
}

const OrganizationIdPage = async ({ params }: OrganizationIdPageProps) => {
  const isPro = await checkSubscription();

  return (
    <div className="mb-20 w-full">
      <Info isPro={isPro} />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
