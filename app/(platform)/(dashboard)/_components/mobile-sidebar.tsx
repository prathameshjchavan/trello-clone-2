"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  const { isOpen, onOpen, onClose } = useMobileSidebar();
  const pathname = usePathname();
  const [mounted, setIsMounted] = useState<boolean>(false);

  // prevent component to be rendered on the server
  // the component will only render when setIsMounted is set to true
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // close the sidebar when the path changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!mounted) return null;

  return (
    <Fragment>
      <Button
        onClick={onOpen}
        className="mr-2 block md:hidden"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default MobileSidebar;
