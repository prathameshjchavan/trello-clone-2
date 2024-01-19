"use client";

import { useQuery } from "@tanstack/react-query";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/use-card-modal";
import { CardWithList } from "@/typings";
import { fetcher } from "@/lib/fetcher";
import Header from "./header";

const CardModal = () => {
  const { id, isOpen, onClose } = useCardModal();
  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {cardData ? <Header data={cardData} /> : <Header.Skeleton />}
      </DialogContent>
    </Dialog>
  );
};

export default CardModal;
