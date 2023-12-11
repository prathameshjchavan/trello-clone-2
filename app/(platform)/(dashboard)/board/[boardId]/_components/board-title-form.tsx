"use client";

import { Button } from "@/components/ui/button";
import { Board } from "@prisma/client";

interface BoardTitleFormProps {
  data: Board;
}

const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  return (
    <Button className="h-auto w-auto p-1 px-2 text-lg font-bold">
      {data.title}
    </Button>
  );
};

export default BoardTitleForm;
