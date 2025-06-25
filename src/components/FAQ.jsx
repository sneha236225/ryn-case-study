import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "I use tools like Figma, Adobe XD, Sketch, InVision, and Miro.",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer:
        "By gathering user feedback, running usability tests, and analyzing key metrics like conversion rate and task completion time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 md:px-16 py-16">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-left">
        ✶ Frequently asked questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className="text-left w-full text-base md:text-xl font-medium focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm md:text-base text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
