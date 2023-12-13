import { ListWithCards } from "@/typings";
import ListForm from "./list-form";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return <ol>
    <ListForm boardId={boardId} />
    <div className="flex-shrink-0 w-1" />
  </ol>;
};

export default ListContainer;
