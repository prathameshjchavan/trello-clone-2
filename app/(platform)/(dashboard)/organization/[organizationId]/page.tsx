import Info from "./_components/info";

interface OrganizationIdPageProps {
  params: {
    organizationId: string;
  };
}

const OrganizationIdPage = async ({ params }: OrganizationIdPageProps) => {
  return (
    <div className="mb-20 w-full">
      <Info />
    </div>
  );
};

export default OrganizationIdPage;
