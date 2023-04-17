"use client";
import joinClassName from "@/helper/joinClassName";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Chat } from "@/app/(dash)/dashboard/index.interface";

export default function ChatList(
  chats: Chat[],
  selected: number | null,
  setSelected: any
) {
  return chats.map((chat) => (
    <div
      key={chat.chat_id}
      className={joinClassName(
        chat.chat_id === selected
          ? "bg-[#20210] text-black bg-white"
          : "text-white hover:bg-gray-50 hover:text-gray-900",
        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      )}
      onClick={() => setSelected(chat.chat_id)}
    >
      <ChatBubbleLeftEllipsisIcon
        className={joinClassName(
          chat.chat_id === selected
            ? "text-black"
            : "text-gray-400 group-hover:text-gray-500",
          "mr-3 flex-shrink-0 h-6 w-6"
        )}
        aria-hidden="true"
      />
      {chat.title}
    </div>
  ));
}
