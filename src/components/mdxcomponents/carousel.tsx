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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length * 2)); // Repeat images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index % (images.length * 2)); // Adjust index for infinite loop
  };

  console.log(currentIndex);

  return (
    <div className="group overflow-hidden rounded-xl">
      <motion.div
        ref={carouselRef}
        className="flex transition-transform duration-500"
        initial={{ x: 0 }}
        animate={{ x: `-${currentIndex * 90}% ` }} // Move based on current index
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      >
        {Array.from({ length: 2 }, (_, i) => i).flatMap((_) =>
          images.map((image, index) => (
            <div
              key={index + images.length * _} // Adjust key for repeated images
              className="flex-shrink-0 w-[90%]" // Added gap
              onClick={() => handleImageClick(index + images.length * _)} // Adjust index for click
            >
              {image}
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}