"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";

export default function HeroCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Adjust this value to change how much of the adjacent items are visible
  // 0.2 means 20% of adjacent items are visible (10% on each side)
  const peekAmount = 0.2;

  return (
    <div className="w-full max-w-sm mx-auto mt-2">
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4  overflow-visible">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 "
                style={{
                  flex: `0 0 ${(1 - peekAmount) * 100}%`,
                  maxWidth: `${(1 - peekAmount) * 100}%`,
                }}
              >
                <Card className="overflow-visible bg-transparent border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <HeroSection></HeroSection>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[10%] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[10%] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
