import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";

interface BoardIdLayoutProps {
  children: React.ReactNode;
  params: {
    boardId: string;
  };
}

const getBoard = cache(async (boardId: string, orgId: string) => {
  const board = await db.board.findUnique({
    where: { id: boardId, orgId },
  });

  return board;
});

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  const { orgId } = auth();

  if (!orgId) {
    return {
      title: "Board",
    };
  }

  const board = await getBoard(params.boardId, orgId);

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({ children, params }: BoardIdLayoutProps) => {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const board = await getBoard(params.boardId, orgId);

  if (!board) notFound();

  return (
    <div
      className="relative h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <main className="relative h-full pt-28">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
