import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = {
    username: "John Doe",
    avatar: "user.jpg",
  };
  let User = true;

  const largeTextButtonStyle = "text-lg !important";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="sticky z-40 h-16 inset-x-0 top-0 w-full border-b bg-white transition-all">
      <div className="flex items-center h-full px-4 justify-between w-full">
        <RouteLink to="/" className="flex z-40 font-semibold items-center">
          <img className="h-14" src="logo_2.png" alt="Logo" />
        </RouteLink>
        <div className="h-full flex items-center space-x-4 justify-end w-full">
          {User ? (
            <>
              <RouteLink
                to="/"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: "1.125rem" }}
              >
                Dashboard
              </RouteLink>

              <RouteLink
                to="/assets"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: "1.125rem" }}
              >
                Assets
              </RouteLink>
              <RouteLink
                to="/trips"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: "1.125rem" }}
              >
                Trips
              </RouteLink>

              <RouteLink
                to="/contact"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: "1.125rem" }}
              >
                Contact Us
              </RouteLink>
              <RouteLink
                to="/guide"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: "1.125rem" }}
              >
                Guide
                {/* <<<<<<< HEAD

                
=======
>>>>>>> 6dd1771 (NavBar sorted) */}
              </RouteLink>

              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`${buttonVariants({
                    size: "lg",
                  })} hidden sm:flex items-center gap-1 bg-gray-200 ${largeTextButtonStyle} border border-white hover:border-black`}
                  style={{ fontSize: "1.125rem" }}
                >
                  {user.username}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <RouteLink
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Go to Profile
                      </RouteLink>
                      <RouteLink
                        to="/login"
                        className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleClick}
                      >
                        Logout
                      </RouteLink>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <RouteLink
                to="/contact"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: "1.125rem" }}
              >
                Contact Us
              </RouteLink>
              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
              <RouteLink
                to="/signup"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "outline",
                })} ${largeTextButtonStyle} border-black text-black bg-white hover:bg-gray-200`}
                style={{ fontSize: "1.125rem" }}
              >
                Sign up
              </RouteLink>
              <RouteLink
                to="/login"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "default",
                })} ${largeTextButtonStyle} border-black  bg-gray-700 text-white hover:bg-gray-300 hover:text-black`}
                style={{ fontSize: "1.125rem" }}
              >
                Login
              </RouteLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
