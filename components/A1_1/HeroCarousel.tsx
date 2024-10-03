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
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection from "./HeroSection";

export default function HeroCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = useState(0);

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

  return (
    <div className="w-full   mx-auto ">
      <div className="relative flex items-center justify-center ">
        <Carousel
          setApi={setApi}
          className="w-full "
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className=" flex justify-center">
                <HeroSection></HeroSection>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#B3EF1B] focus:bg-[#B3EF1B]  border-none drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)] absolute left-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl" />
          <CarouselNext className=" bg-[#B3EF1B] focus:bg-[#B3EF1B] border-none drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)] absolute right-10 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl" />
        </Carousel>
      </div>
    </div>
  );
}
