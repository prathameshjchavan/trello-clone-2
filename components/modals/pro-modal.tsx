"use client";

import Image from "next/image";

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent } from "../ui/dialog";

const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md overflow-hidden p-0">
        <div className="relative flex aspect-video items-center justify-center">
          <Image src="/hero.svg" alt="hero" className="object-cover" fill />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
