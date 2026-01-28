import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import HashtagContainer from "@/components/HashtagContainer";
import Feeds from "@/components/Feeds";
import Posts from "@/components/Posts";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black font-roboto">
      <Topbar onToggle={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isCollapsed={isCollapsed} />
        <main className="flex-1 flex px-7 pt-1 text-white overflow-hidden gap-12">
          <div className="w-1/4 h-full pt-4 pb-7">
            <HashtagContainer />
          </div>
          <div className="w-[40%] h-full">
            <Feeds />
          </div>
          <div className="w-[35%] h-full">
            <Posts />
          </div>
        </main>
      </div>
    </div>
  );
}
