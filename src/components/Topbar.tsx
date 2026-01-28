import React from "react";
import {
  Bars3Icon,
  CircleStackIcon,
  ChevronDownIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

interface TopbarProps {
  onToggle: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onToggle }) => {
  return (
    <div className="flex h-16 items-center px-6 bg-black text-white w-full">
      <Bars3Icon
        onClick={onToggle}
        className="h-8 w-8 rounded-lg hover:scale-110 transition-all cursor-pointer mr-2"
      />
      <span className="font-bold text-xl">Boo</span>
      <input
        type="text"
        placeholder="Search"
        className="w-full ml-4 mr-4 px-4 py-1 rounded-2xl shadow-glow text-white outline-none"
      />
      <div className="flex items-center gap-4">
        <BellIcon className="h-6 w-6 rounded-lg hover:scale-110 transition-all cursor-pointer" />
        <div className="flex">
          <CircleStackIcon className="h-6 w-6 bg-yellow-500 rounded-lg hover:scale-110 transition-all cursor-pointer mr-1" />
          <div className="cursor-pointer">250</div>
        </div>
        <UserCircleIcon className="h-6 w-6 rounded-lg bg-[#4EDCD8] hover:scale-110 transition-all cursor-pointer" />
        <div className="flex">
          <div className="mr-1 cursor-pointer">Ed</div>
          <ChevronDownIcon className="h-3 w-3 rounded-lg hover:scale-110 transition-all cursor-pointer mt-[5px]" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
