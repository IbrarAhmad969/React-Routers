import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const [dropdownOpen, setDropDown] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save preference
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <nav className="bg-blue-900 dark:bg-gray-900 p-4 shadow-2xl transition-colors duration-300">
      <div className="text-white flex flex-row justify-between">
        <div className="w-[370px] mx-auto flex flex-row justify-center">
          <ul className="flex flex-row gap-5 cursor-pointer text-1xl relative">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/react-router">React Routers</NavLink>
            </li>
            <li
              className="relative cursor-pointer"
              onMouseEnter={()=>setDropDown(true)}
              onMouseLeave={()=>setDropDown(false)}

            >
              <NavLink to="/dashboard"> Dashboard
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md border p-2">
                    <li className="p-2 hover:bg-gray-100">
                      <NavLink to="/dashboard/dashboard1">Dashboard 1</NavLink>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <NavLink to="/dashboard/dashboard2">Dashboard 2</NavLink>
                    </li>
                  </ul>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contact Us </NavLink>
            </li>

          </ul>
        </div>

        <button
          className="p-2 bg-gray-700 dark:bg-gray-200 rounded-full"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <Moon size={20} className="text-white" />
          ) : (
            <Sun size={20} className="text-yellow-500" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
