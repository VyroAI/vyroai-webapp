import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";
import { Message } from "@/app/(dash)/dashboard/index.interface";

export default function InputBox({
  selectedChat,
  setMessageList,
  token,
  messageList,
}: {
  selectedChat: number;
  setMessageList: any;
  token: string;
  messageList: Message[];
}) {
  const [postMessage, setPostMessage] = useState<string>("");

  const sendMessage = () => {
    if (selectedChat == 0 && postMessage == "") return;
    const payload = {
      content: postMessage,
    };

    console.log(payload);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/chat/${selectedChat}/message`, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const responseFromServer = await response.json();
        if (response.status == 201) {
          setPostMessage("");
          let currentToCompare = messageList.slice();
          currentToCompare.push(responseFromServer.data);
          setMessageList(currentToCompare);
        } else {
          toast.error(responseFromServer.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={"flex-none mx-auto w-full lg:pb-10 pb-4"}>
      <div className={"lg:px-44 px-4"}>
        <div className="flex">
          <textarea
            value={postMessage}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            onChange={(e) => setPostMessage(e.target.value)}
            className="flex-1 px-4 focus:outline-none grow h-10 border border-black rounded-l-lg rounded-y-lg pt-1"
            placeholder="Type your message here..."
          />
          <button
            onClick={sendMessage}
            className="send-button p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-r-lg flex-none w-10"
          >
            <PaperAirplaneIcon
              className="h-6 w-6 transform rotate-45"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
