"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  // Duplicate testimonials for seamless infinite loop
  const duplicated = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
        {duplicated.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex-shrink-0 w-[380px] bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <Quote className="w-8 h-8 text-[#FF9933]/30 mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#FF9933]/20">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0A2540] text-sm">{t.name}</p>
                <p className="text-[#FF9933] text-xs font-medium">{t.role}</p>
                <p className="text-gray-400 text-xs">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
