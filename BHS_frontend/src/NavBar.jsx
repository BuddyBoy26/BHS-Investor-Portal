import { Link as RouteLink } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const NavBar = () => {
  const user = {
    username: "John Doe",
    avatar: "user.jpg",
  }
  let User = true;
  
  const largeTextButtonStyle = "text-lg !important"; // Inline style to enforce larger text

  return (
    <nav className="sticky z-40 h-16 inset-x-0 top-0 w-full border-b bg-white  transition-all">
      <div className="flex items-center h-full px-4 justify-between w-full">
        <RouteLink to="/" className="flex z-40 font-semibold items-center">
          <img className="h-14" src="logo_2.png" />
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
                style={{ fontSize: '1.125rem' }}
              >
                Dashboard 
              </RouteLink>
              
              <RouteLink
                to="/assets"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: '1.125rem' }}
              >
                Assets
              </RouteLink>
              <RouteLink
                to="/trips"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: '1.125rem' }} // Inline style as fallback
              >
                Trips
              </RouteLink>
              
              <div className="group">
              <RouteLink
  to="/contact"
  className={`${buttonVariants({
    size: "sm",
    variant: "ghost",
  })} ${largeTextButtonStyle} border border-white hover:border-black`}
  style={{ fontSize: '1.125rem' }} // Inline style as fallback
>
  Contact Us
</RouteLink>
<RouteLink
                to="/guide"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: '1.125rem' }}
              >
                Guide 

                
              </RouteLink>

  
</div>




              
              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              <RouteLink
                to="/profile"
                className={`${buttonVariants({
                  size: "lg",
                })} hidden sm:flex items-center gap-1 bg-gray-200 ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: '1.125rem' }}
              >
                {user.username}
              </RouteLink>
            </>
          ) : (
            <>
             

             
            
              <RouteLink
                to="/contact"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })} ${largeTextButtonStyle} border border-white hover:border-black`}
                style={{ fontSize: '1.125rem' }}
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
                style={{ fontSize: '1.125rem' }}
              >
                Sign up
              </RouteLink>

              <RouteLink
                to="/login"
                className={`${buttonVariants({
                  size: "sm",
                  variant: "default",
                })} ${largeTextButtonStyle} border-black  bg-gray-700 text-white hover:bg-gray-300 hover:text-black`}
                style={{ fontSize: '1.125rem' }}
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