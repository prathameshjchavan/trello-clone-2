import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

interface PlatformLayoutProps {
  children: ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <div>
      <ClerkProvider>{children}</ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
