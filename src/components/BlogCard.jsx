import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-5">
      {/* Left - Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full md:w-[220px] h-[160px] rounded-xl object-cover"
      />

      {/* Center - Content */}
      <div className="flex-1 flex flex-col justify-between md:ml-4 w-full">
        {/* Date */}
        <p className="text-xs text-gray-400 mb-2">{blog.date}</p>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>

        {/* Tags + Button Row */}
        <div className="flex justify-between items-center flex-wrap gap-4 w-full">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs border border-gray-600 text-gray-300 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read Button */}
          <button className="px-4 py-1.5 bg-white text-black text-xs font-medium rounded-full hover:bg-gray-200 transition">
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

