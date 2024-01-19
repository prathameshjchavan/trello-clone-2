import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import ModalProvider from "@/components/providers/modal-provider";
import QueryProvider from "@/components/providers/query-provider";

interface PlatformLayoutProps {
  children: ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <div className="h-full">
      <ClerkProvider>
        <QueryProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </QueryProvider>
      </ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
