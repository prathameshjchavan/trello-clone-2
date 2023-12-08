import { db } from "@/lib/db";
import Board from "./_components/board";
import Form from "./_components/form";

interface OrganizationPageProps {
  params: {
    organizationId: string;
  };
}

const OrganizationPage = async ({ params }: OrganizationPageProps) => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} board={board} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationPage;
