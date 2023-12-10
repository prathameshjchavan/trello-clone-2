import { Fragment, ReactNode } from "react";
import OrgControl from "./_components/org-control";
import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

interface OrganizationIdLayoutProps {
  children: ReactNode;
}

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

const OrganizationIdLayout = ({ children }: OrganizationIdLayoutProps) => {
  return (
    <Fragment>
      <OrgControl />
      {children}
    </Fragment>
  );
};

export default OrganizationIdLayout;
