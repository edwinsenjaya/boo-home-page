import React from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAmericasIcon,
  HeartIcon,
  UserIcon,
  UserGroupIcon,
  ClipboardDocumentIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const navItems = [
    {
      label: "Home",
      icon: <GlobeAmericasIcon className="h-5 w-5 text-[#4EDCD8]" />,
    },
    {
      label: "Match",
      icon: <HeartIcon className="h-5 w-5" />,
    },
    {
      label: "Messages",
      icon: <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />,
    },
    { label: "Profile", icon: <UserIcon className="h-5 w-5" /> },
    {
      label: "Personality Database",
      icon: <UserGroupIcon className="h-5 w-5" />,
    },
    {
      label: "Personality Tests",
      icon: <ClipboardDocumentIcon className="h-5 w-5" />,
    },
    {
      label: "Personality Resources",
      icon: <DocumentTextIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div
      className={`relative h-[calc(100vh-64px)] transition-all duration-600 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      } flex flex-col bg-black text-white overflow-hidden`}
    >
      <nav className="flex-1 mt-2 px-4 space-y-1">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
              index === 3 ? "mb-10" : ""
            }`}
            title={item.label}
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <span
              className={`font-medium whitespace-nowrap transition-all duration-500 ease-in-out ${
                isCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100 ml-4"
              } ${index === 0 ? "text-[#4EDCD8]" : ""}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      <div className="flex p-4">
        <div className="flex flex-col p-3 rounded-lg transition-colors gap-2">
          <span
            className={`text-xs text-[#757575] font-medium whitespace-nowrap transition-all duration-500 ease-in-out ${
              isCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100"
            }`}
          >
            We stand for love. 🩵
          </span>
          <div
            className={`flex text-xs text-[#757575] font-medium whitespace-nowrap transition-all duration-500 ease-in-out gap-4 ${
              isCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100"
            }`}
          >
            <span className="cursor-pointer">Terms</span>
            <span className="cursor-pointer">Privacy</span>
            <span className="cursor-pointer">FAQ</span>
            <span className="cursor-pointer">Safety Tips</span>
          </div>
          <div
            className={`text-xs text-[#757575] font-medium whitespace-nowrap transition-all duration-500 ease-in-out ${
              isCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100"
            }`}
          >
            © 2026 Boo Enterprises, Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
