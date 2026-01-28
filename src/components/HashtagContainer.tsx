import { hashtagMockData } from "@/mockData";

export default function HashtagContainer() {
  return (
    <div className="flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-glow rounded-2xl">
      <h1 className="text-xl font-bold mb-4 sticky top-0 z-10 bg-black pt-4 py-2 px-4">
        Universes
      </h1>
      <div className="flex flex-col gap-2 px-5">
        {hashtagMockData.map((hashtag) => (
          <div
            key={hashtag.name}
            className="flex justify-between items-center gap-2"
          >
            <span className="text-xs font-medium cursor-pointer shadow-glow hover:shadow-hover rounded-2xl px-2 py-1 transition-all">
              #{hashtag.name}
            </span>
            <span className="text-xs font-medium text-[#757575]">
              {hashtag.count}M souls
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
