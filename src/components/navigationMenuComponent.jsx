// import React from "react";
// import { useEffect, useState } from "react";

// import { Link, useSearchParams } from "react-router-dom";
// import {
//   SignedIn,
//   SignedOut,
//   UserButton,
//   SignIn,
//   useUser,
// } from "@clerk/clerk-react";
// import { Button } from "./ui/button";
// import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
// const Navbar = () => {


//     const [showSignIn, setShowSignIn] = useState(false);
    
//       const [search, setSearch] = useSearchParams();
//       const { user } = useUser();
    
    
//       useEffect(() => {
//         if (search.get("sign-in")) {
//           setShowSignIn(true);
//         }
//       }, [search]);
    
//       const handleOverlayClick = (e) => {
//         if (e.target === e.currentTarget) {
//           setShowSignIn(false);
//           setSearch({});
//         }
//       };
//   return (
//     <div className="w-full flex justify-center fixed top-0 z-50">
//       <nav
//         className="fixed top-2 left-1/2 -translate-x-1/2 z-50 
//                    w-[92%] max-w-6xl h-20 px-6 flex items-center justify-between 
//                    rounded-xl shadow-lg border border-white/10 
//                    bg-black/30 backdrop-blur-md transition-all duration-300"
//         style={{
//           borderBottom: "1px solid rgba(255,255,255,0.05)",
//           background: "rgba(17,18,20,0.4)",
//           backdropFilter: "blur(14px)",
//           WebkitBackdropFilter: "blur(14px)",
//         }}
//       >
//         <div className="flex items-center">
//           <Link to="/">
//             <img src="/logo.png" className="h-12 object-contain w-auto rounded-lg opacity-90 backdrop-blur-sm bg-white/5 p-1" alt="Hirrd Logo" />
//           </Link>
          
//         </div>

//         <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-sm text-neutral-300 font-medium">
//           <a
//             href="#upload"
//             className="hover:text-white hover:scale-105 transition duration-200"
//           >
//             Upload
//           </a>
//           <a
//             href="#results"
//             className="hover:text-white hover:scale-105 transition duration-200"
//           >
//             Results
//           </a>
//           <a
//             href="#chat"
//             className="hover:text-white hover:scale-105 transition duration-200"
//           >
//             AI Chat
//           </a>
//         </div>

//         {/* 🔒 Placeholder Login */}
//         <div>
//           <button
//             disabled
//             className="bg-white/10 text-white text-sm px-4 py-1.5 rounded-xl 
//                        hover:scale-105 transition cursor-not-allowed"
//             title="Login coming soon"
//           >
//             Login
//           </button>
//         </div>

//         <div className="flex gap-8">
//           <SignedOut>
//             <Button variant="outline" onClick={() => setShowSignIn(true)}>
//               Login
//             </Button>
//           </SignedOut>
//           <SignedIn>
//             {user?.unsafeMetadata?.role === "recruiter" && (
//               <Link to="/post-job">
//                 <Button variant="white" className="rounded-full">
//                   <PenBox size={20} className="mr-2" />
//                   Post a Job
//                 </Button>
//               </Link>
//             )}
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                 },
//               }}
//             >
//               <UserButton.MenuItems>
//                 <UserButton.Link
//                   label="My Jobs"
//                   labelIcon={<BriefcaseBusiness size={15} />}
//                   href="/my-jobs"
//                 />
//                 <UserButton.Link
//                   label="Saved Jobs"
//                   labelIcon={<Heart size={15} />}
//                   href="/saved-jobs"
//                 />
//                 <UserButton.Action label="manageAccount" />
//               </UserButton.MenuItems>
//             </UserButton>
//           </SignedIn>
//         </div>
//       </nav>

//       {showSignIn && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//           onClick={handleOverlayClick}
//         >
//           <SignIn
//             signUpForceRedirectUrl="/onboarding"
//             fallbackRedirectUrl="/onboarding"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
