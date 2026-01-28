import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black font-roboto">
      <Topbar onToggle={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isCollapsed} />
        <main className="flex-1 p-8 text-white">
          <h1 className="text-4xl font-bold">Boo Home Page</h1>
        </main>
      </div>
    </div>
  );
}
