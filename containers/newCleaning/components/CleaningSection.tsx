import Button from "@/components/ui/pageButton";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef } from "react";


interface CleaningSectionProps {
  title: string;
  description: string;
  image: string;
  imageFirst: boolean;
}

const CleaningSection: React.FC<CleaningSectionProps> = ({
  title,
  description,
  image,
  imageFirst,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="partner-section py-12" ref={sectionRef}>
      <div
        className={`container mx-auto flex flex-col ${
          imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center`}
      >
        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            height={500}
            width={500}
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:px-12">
          <h2 className="text-3xl font-bold text-greenBg mb-4 flex items-center">
            <FaLeaf className="mr-2 text-greenBg" />
            {title}
          </h2>
          <p className="text-gray-700 text-lg mb-6">{description}</p>
          <Button className="flex items-center">
            Book Now
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CleaningSection;


