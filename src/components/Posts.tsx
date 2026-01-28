import { feedMockData } from "@/mockData";
import { UserIcon } from "@heroicons/react/24/outline";
import FeedCard from "./FeedCard";

export default function Feeds() {
  return (
    <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-4">
      <div className="flex flex-col shadow-glow rounded-3xl p-5 mx-3 mb-4 bg-black">
        <div className="flex items-center gap-3 mb-4"></div>
        <div className="flex items-center justify-center mb-3">
          <UserIcon className="h-40 w-40" />
        </div>
        <p className="text-sm text-white text-center leading-relaxed mb-4">
          Let someone know you really like them with 2 free Super Loves per week
        </p>
        <div className="flex items-center justify-center">
          <div className="w-fit shadow-glow rounded-full px-2 py-1 mb-4">
            Someone just purchased
          </div>
        </div>
        <button className="bg-[#4EDCD8] cursor-pointer text-black py-2 px-4 rounded-full">
          ACTIVATE BOO INFINITY
        </button>
      </div>
      <h2 className="text-white font-bold text-lg mx-3 mb-5">Related Posts</h2>
      <div className="flex flex-col gap-2 px-3">
        {feedMockData.map((feed) => (
          <FeedCard key={feed.name} feed={feed} />
        ))}
      </div>
    </div>
  );
}
