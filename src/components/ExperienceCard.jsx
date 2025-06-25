import React from 'react';

const ExperienceCard = ({ exp }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6 gap-3">
      
      {/* Left  */}
      <div className="text-lg md:text-xl font-medium leading-tight md:flex-1 whitespace-nowrap">
        {exp.title}
      </div>

      {/* Right */}
      <div className="w-full md:text-right text-sm leading-snug">
        <div className="flex justify-between md:block w-full">
          <div className="font-semibold text-gray-300">{exp.company}</div>
          <div className="text-xs text-gray-400">{exp.duration}</div>
        </div>
      </div>

    </div>
  );
};

export default ExperienceCard;
