import { ReactNode } from "react";

interface OrganizationLayoutProps {
  children: ReactNode;
}

const OrganizationLayout = ({ children }: OrganizationLayoutProps) => {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-20 md:pt-24 2xl:max-w-screen-xl">
      <div className="flex space-x-7">
        <div className="hidden w-64 shrink-0 md:block">{/* Sidebar */}</div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
