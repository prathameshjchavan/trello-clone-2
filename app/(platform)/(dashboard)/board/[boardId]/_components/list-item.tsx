"use client";

import { ListWithCards } from "@/typings";
import React from "react";
import ListHeader from "./list-header";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

const ListItem = ({ data, index }: ListItemProps) => {
  return <div className="h-full w-[272px] shrink-0 select-none">
    <div className="w-full rounded-md shadow-md pb-2 bg-[#F1F2F4]">
        <ListHeader />
    </div>
  </div>;
};

export default ListItem;
