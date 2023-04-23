import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Message } from "@/app/(dash)/dashboard/index.interface";
import MessageLoading from "@/components/dashboard/sidebar/messageLoading";

export default function MessageBox({
  messageList,
  messageListLoading,
}: {
  messageList: Message[];
  messageListLoading: boolean;
}) {
  const chatRef = useRef(null);

  const scrollToBottom = () => {
    if (chatRef.current) {
      // @ts-ignore
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div
      ref={chatRef}
      className={"flex-grow w-auto mb-10 overflow-y-scroll custom-scrollbar"}
    >
      <div>
        {messageListLoading ? (
          <MessageLoading></MessageLoading>
        ) : (
          <div>
            {messageList.map((message: Message) => (
              <div
                key={message.id}
                className={`w-full flex mt-4 items-start ${
                  message.bot ? "justify-end" : "justify-start"
                }`}
              >
                {!message.bot && (
                  <Image
                    width={32}
                    height={32}
                    src="https://cdn.vyroai.com/static/logo.webp"
                    alt="Assistant"
                    className=" mr-2 shadow-lg"
                  />
                )}
                <div
                  className={`px-4 py-2 rounded-lg inline-block ${
                    message.bot
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } shadow-md`}
                >
                  <div className="text-sm font-medium h-5">
                    {message.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
