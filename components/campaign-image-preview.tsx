import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IMG from '@/public/pic.jpg'
const previewImages=[
    {
      artist: "Ornella Binni",
      art: IMG,
    },
    {
      artist: "Tom Byrom",
      art: IMG,
    },
    {
      artist: "Vladimir Malyavko",
      art:IMG,
    },
  ]

export interface Artwork {
  artist: string
  art: string
}

export function CampaignImagePreview() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {previewImages.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={150}
                height={200}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
