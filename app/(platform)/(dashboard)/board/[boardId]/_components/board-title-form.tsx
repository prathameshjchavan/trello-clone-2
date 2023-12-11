"use client";

import FormInput from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { Board } from "@prisma/client";
import { ElementRef, useRef, useState } from "react";

interface BoardTitleFormProps {
  data: Board;
}

const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const fomrRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);

    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    console.log({ title });
  };

  const onBlur = () => {
    fomrRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        ref={fomrRef}
        className="flex items-center space-x-2"
      >
        <FormInput
          id="title"
          ref={inputRef}
          onBlur={onBlur}
          defaultValue={data.title}
          className="h-7 border-none bg-transparent px-[7px] py-1 text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant="transparent"
      className="h-auto w-auto p-1 px-2 text-lg font-bold"
    >
      {data.title}
    </Button>
  );
};

export default BoardTitleForm;
