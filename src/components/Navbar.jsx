import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mb-20">
            <div className="text-2xl font-bold">R<span className="text-white">.</span></div>
            <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "border-b border-white" : "hover:text-gray-400"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "border-b border-white" : "hover:text-gray-400"
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive ? "border-b border-white" : "hover:text-gray-400"
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "border-b border-white" : "hover:text-gray-400"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            <button className="border border-white px-5 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
                Hire Me
            </button>
        </nav>
    )
}

export default Navbar
