"use client";

import { ListWithCards } from "@/typings";
import React, { ElementRef, useRef, useState } from "react";
import ListHeader from "./list-header";
import CardForm from "./card-form";

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

const ListItem = ({ data, index }: ListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  return (
    <div className="h-full w-[272px] shrink-0 select-none">
      <div className="w-full rounded-md bg-[#F1F2F4] pb-2 shadow-md">
        <ListHeader onAddCard={enableEditing} data={data} />
        <CardForm
        listId={data.id}
        ref={textareaRef}
        isEditing={isEditing}
        enableEditing={enableEditing}
        disableEditing={disableEditing}
      />
      </div>
    </div>
  );
};

export default ListItem;
