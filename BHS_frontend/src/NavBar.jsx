import { Link as RouteLink } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const NavBar = () => {
  let user = false;
  return (
    <nav className="sticky z-40 h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="flex items-center h-full px-4 justify-between w-full">
        <RouteLink to="/" className="flex z-40 font-semibold items-center">
          <img className="h-14" src="logo_2.png" />
        </RouteLink>
        <div className="h-full flex items-center space-x-4 justify-end w-full">
          {user ? (
            <>
              <button
                onClick={() => {}}
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign out
              </button>
              <RouteLink
                to="/income"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: " text-[#0f662f]",
                })}
              >
                Income
              </RouteLink>
              <RouteLink
                to="/expense"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: " text-[#dd2507]",
                })}
              >
                Expense
              </RouteLink>
              <RouteLink
                to="/home"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Dashboard ✨
              </RouteLink>
              <RouteLink
                to="/form"
                className={buttonVariants({
                  size: "sm",
                  className:
                    "hidden sm:flex items-center gap-1 bg-black text-white",
                })}
              >
                Add Income/Expense
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </RouteLink>
            </>
          ) : (
            <>
              <RouteLink
                to="/signup"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign up
              </RouteLink>

              <RouteLink
                to="/login"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Login
              </RouteLink>

              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              <RouteLink
                to="/configure/upload"
                className={buttonVariants({
                  size: "sm",
                  className:
                    "hidden sm:flex items-center gap-1 bg-black text-white",
                })}
              >
                Contact Us
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </RouteLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
