import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import ActivityItem from "@/components/activity-item";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const ActivityList = async (props: Props) => {
  const { orgId } = auth();

  if (!orgId) redirect("/select-org");

  const auditLogs = await db.auditLog.findMany({
    where: {
      orgId,
    },
    orderBy: {
        createdAt: "desc"
    }
  });

  return (
    <ol className="mt-4 space-y-4">
      <p className="hidden text-center text-xs text-muted-foreground last:block">
        No activity found inside this organization
      </p>
      {auditLogs.map((log) => (
        <ActivityItem key={log.id} data={log} />
      ))}
    </ol>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
    return (
        <ol className="space-y-4 mt-4">
            <Skeleton className="w-[80%] h-14" />
            <Skeleton className="w-[50%] h-14" />
            <Skeleton className="w-[70%] h-14" />
            <Skeleton className="w-[80%] h-14" />
            <Skeleton className="w-[75%] h-14" />
        </ol>
    )
}

export default ActivityList;
