"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const goToPrev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative">
      {/* Testimonial Cards */}
      <div className="relative h-64 sm:h-56 flex items-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: index === current ? 1 : 0,
              y: index === current ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${
              index === current ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div className="bg-bg-secondary border border-border rounded-2xl p-8 h-full flex flex-col justify-between">
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setAutoPlay(false);
              }}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "bg-accent w-8"
                  : "bg-border w-2 hover:bg-text-secondary"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goToPrev}
            className="p-2 text-text-secondary hover:text-accent hover:bg-bg-secondary rounded-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="p-2 text-text-secondary hover:text-accent hover:bg-bg-secondary rounded-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
