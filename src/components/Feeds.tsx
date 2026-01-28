import { feedMockData } from "@/mockData";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import FeedCard from "./FeedCard";

export default function Feeds() {
  return (
    <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-4">
      <div className="flex px-3 mb-10">
        <div className="flex rounded-full p-1 shadow-glow">
          <ChevronLeftIcon className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="flex-1 flex items-center justify-center text-xs">
          <p className="w-fit text-black text-center font-medium cursor-pointer bg-[#4EDCD8] rounded-2xl px-2 py-1">
            #questions
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-3">
        {feedMockData.map((feed) => (
          <FeedCard key={feed.name} feed={feed} />
        ))}
      </div>
    </div>
  );
}
