import MobileSidebar from "@/components/dashboard/MobileSidebar";
import Sidebar from "@/components/dashboard/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>

      <main className="md:pl-80 md:py-10 p-4">
        <MobileSidebar />
        {children}
      </main>
    </div>
  );
};

export default layout;
