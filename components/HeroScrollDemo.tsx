"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden w-full h-full">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Enjoy Your Life At <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
                Manipal University Jaipur
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/heroImage.webp"
            alt="Campus life at Manipal University Jaipur"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
