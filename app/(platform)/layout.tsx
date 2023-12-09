import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

interface PlatformLayoutProps {
  children: ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <div className="h-full">
      <ClerkProvider>
        <Toaster />
        {children}
      </ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
