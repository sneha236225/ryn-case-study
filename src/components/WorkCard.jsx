const WorkCard = ({ project }) => {
  return (
    <div className="bg-[#626265] rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-stretch gap-4 md:gap-6 w-full max-h-[600px] sm:max-h-none overflow-hidden">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-[340px] h-[140px] sm:h-[160px] md:h-auto rounded-xl object-cover"
      />

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4 mb-6 md:mb-20">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-gray-400 text-gray-200 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-auto md:mt-6 md:self-start px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          View Case Study
        </button>

      </div>
    </div>
  );
};

export default WorkCard;
