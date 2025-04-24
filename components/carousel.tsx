"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
 import VideoPlayer from '@/components/campaign-video-player';
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CarouselWithFooter(props) {
  const {media}=props
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs py-4">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {media.map((m, index) => (
            <CarouselItem key={index}>
              <Card className="">
                <CardContent className="flex aspect-video items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                   <div className="overflow-hidden rounded-md ">
                    {
                        m.is_video?(<VideoPlayer url={m.url}/>):(
                            <Image
                            src={m.url}
                            alt={"img"}
                            className="aspect-[3/4] h-fit w-fit object-cover"
                            onLoad={() => { URL.revokeObjectURL(m.url) }}
                            width={100}
                            height={75}
                          />
                        )
                    }
                    </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
        <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
      </Carousel>
      <div className="mt-4 flex items-center justify-end gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-3.5 w-3.5 rounded-full border-2", {
              "border-primary": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
