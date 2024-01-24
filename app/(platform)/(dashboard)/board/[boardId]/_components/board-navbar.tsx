import { Board } from "@prisma/client";
import BoardTitleForm from "./board-title-form";
import BoardOptions from "./board-options";

interface BoardNavbarProps {
  data: Board;
}

const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="fixed top-14 z-[40] flex h-14 w-full items-center justify-between space-x-4 bg-black/50 px-6 text-white">
      <BoardTitleForm data={data} />
      <div>
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};

export default BoardNavbar;
