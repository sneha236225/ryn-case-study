import heroImg1 from "../assets/hero-img1.jpg";
import heroImg2 from "../assets/hero-img2.png";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-black text-white font-syne px-4 min-h-screen md:px-16 pt-6 md:pt-10 pb-8 flex flex-col justify-start md:justify-between overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-8 md:mb-10">
        <div className="text-2xl font-bold">
          R<span className="text-white">.</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          {["/", "/about", "/projects", "/contact"].map((path, idx) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "border-b border-white" : "hover:text-gray-400"
                }
              >
                {["Home", "About", "Projects", "Contact"][idx]}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="border border-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:bg-white hover:text-black transition">
          Hire Me
        </button>
      </nav>

      {/* Headline */}
      <div className="flex pb-6 pt-10 flex-col justify-center items-center flex-1 text-center space-y-4 sm:space-y-5 text-[1.7rem] sm:text-[2.3rem] md:text-[5.5rem] font-bold uppercase leading-[1] tracking-tight">
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4">
          <span>I am a</span>
          <img
            src={heroImg1}
            alt="hero1"
            className="w-8 sm:w-10 md:w-20 inline-block rounded-md"
          />
          <span>freelance</span>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4">
          <span>designer</span>
          <img
            src={heroImg2}
            alt="hero2"
            className="w-8 sm:w-10 md:w-20 inline-block rounded-md"
          />
          <span>from</span>
        </div>

        <div>San Francisco</div>
      </div>


      {/* Footer Section */}
      <div className="pt-8 sm:mt-14 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 text-gray-400 text-sm">
        <div className="flex gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm uppercase opacity-80 tracking-wider justify-center md:justify-start">
          <span>dorodesign</span>
          <span>wave</span>
          <span>siloila</span>
        </div>
        <div className="w-full md:max-w-md text-center md:text-left leading-relaxed text-xs sm:text-sm px-2 sm:px-0">
          <p>
            Welcome to my portfolio. Here, artistry meets functionality. Dive into a
            curated showcase of distinctive branding and web designs, each crafted to
            captivate and inspire.
          </p>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
