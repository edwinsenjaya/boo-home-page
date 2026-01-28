import {
  HeartIcon,
  ChatBubbleLeftIcon,
  UserIcon,
  ArrowTurnUpRightIcon,
  PaperAirplaneIcon,
  StarIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

interface FeedCardProps {
  feed: {
    name: string;
    content: string;
    likes: number;
    comments: number;
    timestamp: string;
    personality: string;
    zodiac: string;
    points: number;
  };
}

export default function FeedCard({ feed }: FeedCardProps) {
  return (
    <div className="flex flex-col shadow-glow rounded-3xl p-5 mb-4 bg-black">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex relative p-1 rounded-full overflow-hidden shadow-glow">
          <UserIcon className="h-9 w-9" />
        </div>
        <div className="flex flex-col w-full gap-1">
          <div className="flex w-full justify-between items-center gap-2">
            <span className="font-bold text-sm text-white">{feed.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#757575]">{feed.timestamp}</span>
              <EllipsisVerticalIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] shadow-glow px-2 py-0.5 rounded-full font-bold">
              {feed.personality}
            </span>
            <span className="text-[10px] shadow-glow px-2 py-0.5 rounded-full font-medium">
              {feed.zodiac}
            </span>
            <span className="text-[10px] shadow-glow px-2 py-0.5 rounded-full font-bold">
              {feed.points} pts
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-white leading-relaxed mb-4">{feed.content}</p>
      <div className="flex items-center gap-2 pt-2">
        <div className="flex items-center gap-1.5 cursor-pointer group">
          <HeartIcon className="h-5 w-5 text-[#757575]" />
          <span className="text-xs text-[#757575] ">{feed.likes}</span>
        </div>
        <div className="flex items-center gap-1.5 cursor-pointer group">
          <ChatBubbleLeftIcon className="h-5 w-5 text-[#757575]" />
          <span className="text-xs text-[#757575] ">{feed.comments}</span>
        </div>
        <PaperAirplaneIcon className="h-5 w-5 text-[#757575]" />
        <ArrowTurnUpRightIcon className="h-5 w-5 text-[#757575]" />
        <StarIcon className="h-5 w-5 text-[#757575]" />
      </div>
    </div>
  );
}
