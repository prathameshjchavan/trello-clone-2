import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { Board as BoardType } from "@prisma/client";
import FormDelete from "./form-delete";

interface BoardProps {
  board: BoardType;
}

const Board = ({ board: { id, title } }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center space-x-2">
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
};

export default Board;
