import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import {
  BriefcaseBusiness,
  Heart,
  PenBox,
  Search,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowMobileMenu(false); // Close menu on mobile
    }
  };

  return (
    <div className="py-11">
      <div className="w-full flex justify-center fixed top-0 z-50">
        <nav
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 
                   w-[92%] max-w-8xl h-20 px-6 flex items-center justify-between 
                   rounded-xl shadow-lg border border-white/10 
                   bg-blue/30 backdrop-blur-md transition-all duration-300"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "rgba( 20,60,120,0.5)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" className="h-16" alt="Hirrd Logo" />
            </Link>
          </div>

          {/* Nav links - desktop only */}
          <div className="hidden md:flex flex-1 justify-center gap-6 text-sm text-neutral-300 font-medium">
            <Link to="/">
              <button
                onClick={() => scrollToId("Home")}
                className="hover:text-white hover:scale-105 transition duration-200"
              >
                Home
              </button>
            </Link>
            <button
              onClick={() => scrollToId("AboutUs")}
              className="hover:text-white hover:scale-105 transition duration-200"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToId("faqs")}
              className="hover:text-white hover:scale-105 transition duration-200"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToId("ContactUs")}
              className="hover:text-white hover:scale-105 transition duration-200"
            >
              Contact Us
            </button>
          </div>

          
          {/* Right buttons */}
          {/* Right section */}
          <div className="hidden md:flex items-center gap-4 mr-2">
            <Link to="/jobs">
              <Button variant="white" className="rounded-full h-8">
                <Search size={20} className="mr-2" />
                Find Jobs
              </Button>
            </Link>

            <SignedOut>
              <Button variant="outline" onClick={() => setShowSignIn(true)}>
                Login
              </Button>
            </SignedOut>

            <SignedIn>
              {user?.unsafeMetadata?.role === "recruiter" && (
                <Link to="/post-job">
                  <Button variant="white" className="rounded-full h-8">
                    <PenBox size={20} className="mr-2" />
                    Post a Job
                  </Button>
                </Link>
              )}
            </SignedIn>
          </div>

          {/* Always visible on all screens */}
          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              >
                <UserButton.MenuItems>
                  {user?.unsafeMetadata?.role === "recruiter" ?(
                    <UserButton.Link
                    label="My Jobs"
                    labelIcon={<BriefcaseBusiness size={15} />}
                    href="/my-jobs"
                  />
                  ):(
                    <UserButton.Link
                    label="My Applications"
                    labelIcon={<BriefcaseBusiness size={15} />}
                    href="/my-jobs"
                  />
                  )}
                  
                  <UserButton.Link
                    label="Saved Jobs"
                    labelIcon={<Heart size={15} />}
                    href="/saved-jobs"
                  />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Sign In Modal */}
        {showSignIn && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleOverlayClick}
          >
            <SignIn
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
            />
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="md:hidden fixed top-20 left-0 right-0 z-40 bg-[#143C78] text-white shadow-lg p-4 rounded-lg mx-4">
            <div className="flex flex-col gap-4 text-sm font-medium pt-5">
              <button onClick={() => scrollToId("Home")}>Home</button>
              <button onClick={() => scrollToId("AboutUs")}>About Us</button>
              <button onClick={() => scrollToId("faqs")}>FAQs</button>
              <button onClick={() => scrollToId("ContactUs")}>
                Contact Us
              </button>
              <Link to="/jobs">
                <Button variant="white" className="w-full mt-2">
                  <Search size={20} className="mr-2" />
                  Find Jobs
                </Button>
              </Link>

              <SignedOut>
                <Button variant="outline" onClick={() => setShowSignIn(true)}>
                  Login
                </Button>
              </SignedOut>

              <SignedIn>
                {user?.unsafeMetadata?.role === "recruiter" && (
                  <Link to="/post-job">
                    <Button variant="white" className="w-full mt-2">
                      <PenBox size={20} className="mr-2" />
                      Post a Job
                    </Button>
                  </Link>
                )}
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
