interface OrganizationPageProps {
  params: {
    organizationId: string;
  };
}

const OrganizationPage = async ({ params }: OrganizationPageProps) => {
  return <div className="flex flex-col space-y-4"></div>;
};

export default OrganizationPage;
