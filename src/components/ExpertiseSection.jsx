import React from "react";
import ExpertiseCard from "./ExpertiseCard";

const expertiseItems = [
  {
    title: "Branding",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UI Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
  },
];

const ExpertiseSection = () => {
  return (
    <section
      className="bg-black text-white px-4 sm:px-6 md:px-16 py-12 md:py-20"
      id="expertise"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 md:mb-12 flex items-center gap-2">
        <span>✷</span> Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {expertiseItems.map((item, index) => (
          <ExpertiseCard item={item} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
