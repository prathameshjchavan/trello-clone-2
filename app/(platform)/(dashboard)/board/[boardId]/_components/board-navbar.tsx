import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Board } from "@prisma/client";
import BoardTitleForm from "./board-title-form";

interface BoardNavbarProps {
  data: Board;
}

const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  const { orgId } = auth();

  return (
    <div className="fixed top-14 z-[40] flex h-14 w-full items-center space-x-4 bg-black/50 px-6 text-white">
      <BoardTitleForm data={data} />
    </div>
  );
};

export default BoardNavbar;
