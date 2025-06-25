import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import WorkCard from "./WorkCard"

const works = [
  {
    title: "Analysis Application",
    description: "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["Figma", "Web"],
    image: project1,
  },
  {
    title: "Fortknox Application",
    description: "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["Mobile", "UI"],
    image: project2,
  },
  {
    title: "Zenocide Application",
    description: "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["Web", "UX"],
    image: project3,
  },
];

const WorksSection = () => {
  return (
    <section className="bg-black text-white px-4 md:px-16 py-12" id="works">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <span>✷</span> Works
        </h2>
        <a href="#" className="text-sm underline hover:text-gray-300">
          view all
        </a>
      </div>

      <div className="flex flex-col gap-8">
        {works.map((project, index) => (
          <WorkCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
