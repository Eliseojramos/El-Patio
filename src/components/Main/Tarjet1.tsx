"use client";
import { cn } from "@/lib/utils";

export default function Tarjet1() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://fivestarsfitness.com/wp-content/uploads/Guia-de-entrenamiento-de-Calistenia-P1-que-es-calistenia-y-para-que-sirve.jpg)] bg-cover bg-center ",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azF1dXcyd3E4Y20xbDc1NmZjMDFscHZtc3N1a2l6NW5zOTZpdmd6YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/V6AbqV6208j53y3sQh/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azF1dXcyd3E4Y20xbDc1NmZjMDFscHZtc3N1a2l6NW5zOTZpdmd6YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/V6AbqV6208j53y3sQh/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-1000"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Calistenia
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            This card is for some special elements, like displaying background
            gifs on hover only.
          </p>
        </div>
      </div>
    </div>
  );
}
