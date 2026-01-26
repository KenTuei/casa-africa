import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = "text-gray-300 hover:text-white transition-colors";

  const activeClass = "text-white font-semibold";

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">Casa Africa</h1>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
