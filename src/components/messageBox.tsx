import { useEffect, useState } from "react";
import { deleteCookie } from "cookies-next";
import { toast } from "react-toastify";
import Image from "next/image";
import { Message } from "@/app/(dash)/dashboard/index.interface";

export default function MessageBox({
  messageList,
}: {
  messageList: Message[];
}) {
  console.log(messageList);

  return (
    <div className={"grow w-auto"}>
      <div>
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
                <div className="text-sm font-medium">{message.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
