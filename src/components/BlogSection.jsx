import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import BlogCard from "./BlogCard";
const blogs = [
  {
    title: "How UX works in web",
    date: "Nov 9, 2023",
    tags: ["UI", "UX"],
    image: project1,
  },
  {
    title: "Case study - Analysis Application.",
    date: "Aug 18, 2023",
    tags: ["Design", "Print"],
    image: project2,
  },
  {
    title: "3 ways to develop your skill",
    date: "Feb 16, 2023",
    tags: ["Figma", "Web"],
    image: project3,
  },
];

const BlogSection = () => {
  return (
    <section className="bg-black text-white px-4 md:px-16 py-10">
      {/* Title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">✶ Blog</h2>
        <a href="#" className="text-sm underline hover:text-gray-300">
          view all
        </a>
      </div>

      {/* Blog Cards */}
      <div className="space-y-12">
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
