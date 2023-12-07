import { ReactNode } from "react";

interface MarketingLayoutProps {
  children: ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="h-full bg-slate-100">
      <main className="pb-20 pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
