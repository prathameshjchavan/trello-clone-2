import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

interface OrganizationPageProps {
  params: {
    organizationId: string;
  };
}

const OrganizationPage = async ({ params }: OrganizationPageProps) => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter a board title"
          className="border border-black p-1"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>{board.title}</div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationPage;
