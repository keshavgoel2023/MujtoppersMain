"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemoTwo() {
  return (
    <div className="h-[24rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "https://www.linkedin.com/company/muj-toppers/about/?viewAsMember=true",
    title: "A Tale of Two Cities",
    image:
      "https://drive.google.com/uc?export=view&id=1oxo3VndCN2L93a5TE5kBbtirVHnX7ec4",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "https://chat.whatsapp.com/EU9X6uJp8skIqRE1loeSDq",
    title: "Hamlet",
    image:
      "https://drive.google.com/uc?export=view&id=1G2uDGrUAVuuUWjglz5hU2_xzk-eR46Va",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "https://www.instagram.com/mujtoppers/",
    title: "Hamlet",
    image:
      "https://drive.google.com/uc?export=view&id=19RmBYYi6EVXrqY3PXhW9B6qEt92cl-nb",
  },
];
