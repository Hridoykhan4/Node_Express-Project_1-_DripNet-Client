import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addCoffee" className="hover:text-primary">Add Coffee</NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="hover:text-primary">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="/users" className="hover:text-primary">Users</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary">Get Started</a>
      </div>
    </div>
  );
};

export default Header;
