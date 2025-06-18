import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import useAuthValue from "../hooks/useAuthValue";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const { user, logOutUser, setUser } = useAuthValue();
  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignOut = () => {
    setUser(null);
    logOutUser()
      .then(() => {
        alert("Sign Out Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive && "text-primary font-bold"} `
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive && "text-primary font-bold"} `
          }
        >
          About
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              to="/addCoffee"
              className={({ isActive }) =>
                `${isActive && "text-primary font-bold"} `
              }
            >
              Add Coffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `${isActive && "text-primary font-bold"} `
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `${isActive && "text-primary font-bold"} `
              }
            >
              Orders
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `${isActive && "text-primary font-bold"} `
            }
          >
            Sign In
          </NavLink>
        </li>
      )}
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
        <NavLink to="/" className="btn  btn-ghost text-xl">
          DripNet Café
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end flex   justify-end items-center ">
        <div className="drawer drawer-start">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  ms-auto">
            <label
              htmlFor="my-drawer"
              className="btn dark:btn-accent btn-error btn-outline shadow-md hover:scale-105 transition-all duration-300"
            >
              ☰ Menu
            </label>
          </div>
          <div className="drawer-side z-40">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-black/90 text-white shadow-lg">
              <li className="mb-4">
                <details className="dropdown dropdown-bottom">
                  <summary className="btn btn-sm bg-base-100 text-base-content hover:bg-primary hover:text-white w-full flex justify-start gap-2">
                    🌗 Theme
                  </summary>
                  <ul className="dropdown-content z-[1] menu p-2 shadow dark:bg-base-200 text-black dark:text-white rounded-box w-52">
                    <li>
                      <button
                        className={`${
                          theme === "light" && "bg-black text-white"
                        }`}
                        onClick={() => setTheme("light")}
                      >
                        🌞 Light
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          theme === "dark" && "bg-black text-white"
                        }`}
                        onClick={() => setTheme("dark")}
                      >
                        🌚 Dark
                      </button>
                    </li>
                    <li>
                      <button
                        className={`${
                          theme === "cupcake" && "bg-black text-white"
                        }`}
                        onClick={() => setTheme("cupcake")}
                      >
                        🧁 Cupcake
                      </button>
                    </li>
                  </ul>
                </details>
              </li>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#8B4513] dark:text-[#D2996E] tracking-wide mb-4 transition-colors duration-500">
                Hi,{" "}
                <span className="capitalize">
                  {user?.displayName || user?.email || "Guest"}
                </span>{" "}
                👋
              </h2>

              <li className="text-xl font-semibold justify-end ms-auto">
                <div className="hover:bg-purple-600 transition-all duration-200">
                  {user && user?.email ? (
                    <button onClick={handleSignOut} className="btn">
                      Log Out
                    </button>
                  ) : (
                    <Link to="/signin">Login</Link>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
