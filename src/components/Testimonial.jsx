import React from "react";
import avatar from "../assets/avatar.png";

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white px-4 md:px-16 py-14">
      {/* Title */}
      <h2 className="text-xl md:text-3xl font-bold mb-16 text-left">
        ✶ What they say
      </h2>

      {/* Testimonial container */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        {/* Left */}
        <div className="md:w-2/5 flex items-center md:items-start gap-4">
          <img
            src={avatar}
            alt="Floyd Miles"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="text-sm md:text-base font-semibold">Floyd Miles</h4>
            <p className="text-xs md:text-sm text-gray-400">eBay</p>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-3/5 relative text-gray-100">
          <span className="text-4xl md:text-9xl opacity-[30%] text-white absolute -top-15 md:-top-6 left-0">
            “
          </span>

          {/* Testimonial text */}
          <p className="text-sm md:text-3xl leading-snug md:leading-relaxed mt-3 md:mt-0">
            Synergy’s resume builder is fantastic. It helped me create a
            professional resume that stood out to employers. Synergy's resume
            builder is fantastic. It helped me create a professional resume that
            stood out to employers.
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black text-base md:text-xl shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:bg-gray-200 transition">
          ←
        </button>
        <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black text-base md:text-xl shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:bg-gray-200 transition">
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
