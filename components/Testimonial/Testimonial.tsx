"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { testimonies } from "@/data";

export function Testimonial() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonies} direction="right" speed="slow" />
    </div>
  );
}
