"use client";

import { ListWithCards } from "@/typings";
import React, { ElementRef, useRef, useState } from "react";
import ListHeader from "./list-header";
import CardForm from "./card-form";
import { cn } from "@/lib/utils";
import CardItem from "./card-item";

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
        <ol
          className={cn(
            "mx-1 flex flex-col gap-y-2 px-1 py-0.5",
            data.cards.length > 0 ? "mt-2" : "mt-0",
          )}
        >
          {data.cards.map((card, index) => (
            <CardItem index={index} key={card.id} data={card} />
          ))}
        </ol>
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
