"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./";

const properties = [
  { id: 1, name: "Modelo 2", image: "/placeholder.svg?height=400&width=600" },
  { id: 2, name: "Modelo 3a", image: "/placeholder.svg?height=400&width=600" },
  { id: 3, name: "Modelo 3b", image: "/placeholder.svg?height=400&width=600" },
  { id: 4, name: "Modelo 4", image: "/placeholder.svg?height=400&width=600" },
  { id: 5, name: "Modelo 5", image: "/placeholder.svg?height=400&width=600" },
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((currentIndex) =>
      currentIndex === properties.length - 3 ? 0 : currentIndex + 1
    );
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? properties.length - 3 : currentIndex - 1
    );
  }, []);

  return (
    <div className="w-full p-6">
      <div className="max-w-7xl mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {properties.map((property) => (
              <Card
                key={property.id}
                name={property.name}
                image={property.image}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#edddc3] text-black hover:bg-[#edddc3]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6"/>
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#edddc3] text-black hover:bg-[#edddc3]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
