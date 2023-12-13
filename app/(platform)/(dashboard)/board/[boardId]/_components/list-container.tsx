'use client'

import { ListWithCards } from "@/typings";
import ListForm from "./list-form";
import { useEffect, useState } from "react";
import ListItem from "./list-item";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

const ListContainer = ({ boardId, data }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex space-x-3 h-full">
      {orderedData.map((list, index) => {
        return (
          <ListItem key={list.id} index={index} data={list} />
        )
      })}
      <ListForm boardId={boardId} />
      <div className="w-1 flex-shrink-0" />
    </ol>
  );
};

export default ListContainer;
