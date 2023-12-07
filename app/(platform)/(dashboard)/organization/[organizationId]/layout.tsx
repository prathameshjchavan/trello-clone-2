import { Fragment, ReactNode } from "react";
import OrgControl from "./_components/org-control";

interface OrganizationIdLayoutProps {
  children: ReactNode;
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
