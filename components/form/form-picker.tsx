"use client";

import { unspalsh } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { defaultImages } from "@/constants/images";

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

const FormPicker = ({ id, errors }: FormPickerProps) => {
  const [images, setImages] =
    useState<Array<Record<string, any>>>(defaultImages);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const { pending } = useFormStatus();

  // fetch images from unsplash
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const result = await unspalsh.photos.getRandom({
  //         collectionIds: ["317099"],
  //         count: 9,
  //       });

  //       if (result?.response) {
  //         const newImages = result.response as Array<Record<string, any>>;
  //         setImages(newImages);
  //       } else {
  //         console.error("Failed to get images from Unsplash");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setImages([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  if (isLoading)
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="h-6 w-6 animate-spin text-sky-700" />
      </div>
    );

  return (
    <div className="relative">
      <div className="mb-2 grid grid-cols-3 gap-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              "relative aspect-video cursor-pointer bg-muted transition group-hover:opacity-75",
              pending && "cursor-auto opacity-50 hover:opacity-50",
            )}
            onClick={() => {
              if (pending) return;

              setSelectedImageId(image.id);
            }}
          >
            <Image
              fill
              src={image.urls.thumb}
              alt="unsplash image"
              className="rounded-sm object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPicker;
