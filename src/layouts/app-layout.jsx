import Header from "@/components/header";
import { Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 -mt-10">
        <div className="container mx-auto px-4 text-center text-sm">
    © Copyright {new Date().getFullYear()} HireX • {" "}
    <a
      href="https://github.com/Priyanshu0403"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      (Priyanshu Sarvaiyya)
    </a>
  </div>
      </div>
    </div>
  );
};

export default AppLayout;
