import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import ModalProvider from "@/components/providers/modal-provider";

interface PlatformLayoutProps {
  children: ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <div className="h-full">
      <ClerkProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
