import ExperienceCard
 from "./ExperienceCard";
const experiences = [
  {
    title: "Lead Product Designer",
    company: "Fortknox",
    duration: "Mar 2022 – Oct 2023",
  },
  {
    title: "Intern Designer",
    company: "OmniSafe",
    duration: "Mar 2022 – Oct 2023",
  },
  {
    title: "UI Designer",
    company: "Dorcodesign",
    duration: "Mar 2022 – Oct 2023",
  },
  {
    title: "Frontend Developer",
    company: "OpacityAuthor",
    duration: "Mar 2022 – Oct 2023",
  },
];

export const Experience = () => {
  return (
    <section className="bg-black text-white px-4 md:px-16 py-16">
      {/* Title */}
      <h2 className="text-[28px] md:text-[32px] font-bold mb-8 font-['Satoshi']">
        ✶ Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard exp={exp} key={index}/>
        ))}
      </div>
    </section>
  );
};
