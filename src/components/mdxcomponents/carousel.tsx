import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  children?: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = React.Children.toArray(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="overflow-hidden rounded-xl">
      <motion.div
        ref={carouselRef}
        className="flex transition-transform duration-500"
        initial={{ x: 0 }}
        animate={{ x: `-${currentIndex * 100}%` }} // Move based on current index
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      >
        {images.map((image, index) => (
          <motion.div key={index} className="flex-shrink-0 w-full">
            {image}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
