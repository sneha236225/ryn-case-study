const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-16 pt-16 pb-8 overflow-hidden">
      {/* Marquee */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex animate-marquee whitespace-nowrap">
          <span
            className="text-4xl font-poppins sm:text-3xl md:text-5xl font-extrabold text-transparent"
            style={{ WebkitTextStroke: '1px white' }}
          >
            FLOW ✶ FIGMA ✶ DESIGNER ✶ DEVELOPER ✶ FLOW ✶ FIGMA ✶ DESIGNER ✶ DEVELOPER ✶
          </span>
          <span
            className="text-4xl font-poppins sm:text-3xl md:text-5xl font-extrabold text-transparent ml-6 md:ml-10"
            style={{ WebkitTextStroke: '1px white' }}
          >
            FLOW ✶ FIGMA ✶ DESIGNER ✶ DEVELOPER ✶ FLOW ✶ FIGMA ✶ DESIGNER ✶ DEVELOPER ✶
          </span>
        </div>
      </div>

      {/* LET’S TALK */}
      <div className="text-center mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-wide">
          LET’S TALK!
        </h2>
        <a
          href="mailto:rehanurraihaan@gmail.com"
          className="text-sm md:text-base hover:text-gray-300"
        >
          rehanurraihaan@gmail.com ↗
        </a>
      </div>


      {/* Footer bottom */}
      <div className="mt-14 sm:mt-20 flex flex-col sm:flex-row justify-between items-center gap-6 text-lg sm:text-sm text-gray-400">
        <p className="text-left">© Rehan Raihan - 2023</p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
