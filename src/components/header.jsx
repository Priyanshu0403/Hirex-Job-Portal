import React from "react";
import { useEffect, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

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
    }
  };

  return (
    <div className="py-5">
      <div className="w-full flex justify-center fixed top-0 z-50">
        <nav
          className="fixed top-2 left-1/2 -translate-x-1/2 z-50 
                   w-[92%] max-w-8xl h-20 px-6 flex items-center justify-between 
                   rounded-xl shadow-lg border border-white/10 
                   bg-blue/30 backdrop-blur-md transition-all duration-300"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            // 15, 95, 183, 1
            background: "rgba( 20,60,120,0.5)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logo.png"
                className="h-14 object-contain w-auto rounded-lg opacity-90 backdrop-blur-sm bg-blue-950 p-1"
                alt="Hirrd Logo"
              />
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-sm text-neutral-300 font-medium">
            <Link to="/">
              <button
                onClick={() => scrollToId("Home")}
                className="hover:text-white hover:scale-105 transition duration-200"
              >
                Home
              </button>
            </Link>
            <Link to={"/jobs"}>
              <button
                className="hover:text-white hover:scale-105 transition duration-200"
              >
                Find Jobs
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

          <div className="flex gap-8">
            <SignedOut>
              <Button variant="outline" onClick={() => setShowSignIn(true)}>
                Login
              </Button>
            </SignedOut>
            <SignedIn>
              {user?.unsafeMetadata?.role === "recruiter" && (
                <Link to="/post-job">
                  <Button variant="white" className="rounded-full">
                    <PenBox size={20} className="mr-2" />
                    Post a Job
                  </Button>
                </Link>
              )}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Jobs"
                    labelIcon={<BriefcaseBusiness size={15} />}
                    href="/my-jobs"
                  />
                  <UserButton.Link
                    label="Saved Jobs"
                    labelIcon={<Heart size={15} />}
                    href="/saved-jobs"
                  />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </div>
        </nav>

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
      </div>
    </div>
  );
};

export default Header;
