import { User2 } from "lucide-react";
import React from "react";

const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center text-lg font-semibold text-neutral-700">
        <User2 className="mr-2 h-6 w-6" />
        Your boards
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div
          role="button"
          className="relative flex aspect-video h-full w-full flex-col items-center justify-center space-y-1 rounded-sm bg-muted transition hover:opacity-75"
        >
          <p className="text-sm">Create new board</p>
          <span className="text-xs">5 remaining</span>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
