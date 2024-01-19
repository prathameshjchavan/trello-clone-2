"use client";

import { Copy, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/typings";

interface ActionsProps {
  data: CardWithList;
}

const Actions = ({ data }: ActionsProps) => {
  return (
    <div className="mt-2 space-y-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button variant="gray" className="w-full justify-start" size="inline">
        <Copy className="h-4 w-4 mr-2" />
        Copy
      </Button>
      <Button variant="gray" className="w-full justify-start" size="inline">
        <Trash className="h-4 w-4 mr-2" />
        Delete
      </Button>
    </div>
  );
};

Actions.Skeleton = function ActionSkeleton() {
  return (
    <div className="mt-2 space-y-2">
      <Skeleton className="h-4 w-20 bg-neutral-200" />
      <Skeleton className="h-8 w-full bg-neutral-200" />
      <Skeleton className="h-8 w-full bg-neutral-200" />
    </div>
  );
};

export default Actions;
