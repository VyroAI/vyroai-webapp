import InputBox from "@/components/dashboard/inputBox";
import { useEffect, useState } from "react";
import MessageBox from "@/components/messageBox";
import { toast } from "react-toastify";
import { deleteCookie } from "cookies-next";
import { Message } from "@/app/(dash)/dashboard/index.interface";

export default function MainSection({
  chatName,
  selectedChat,
  token,
}: {
  chatName: string;
  selectedChat: number;
  token: string;
}) {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [messageListLoading, setMessageListLoading] = useState<boolean>(true);

  useEffect(() => {
    if (selectedChat == 0) return;
    setMessageListLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}v1/chat/${selectedChat}/messages?limit=50&offset=1`,
      {
        mode: "cors",
        cache: "no-cache",
        headers: {
          authorization: token,
        },
      }
    )
      .then(async (response) => {
        const responseFromServer = await response.json();
        if (response.status == 200) {
          setMessageList(responseFromServer.data.messages);
          setMessageListLoading(false);
        } else {
          toast.error(responseFromServer.message);
          deleteCookie("authorization");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedChat]);

  return (
    <main className="">
      <div className={"container mx-auto h-screen"}>
        <div className={"flex flex-col h-full"}>
          <h1 className={"text-center font-bold text-2xl flex-none h-14 pt-10"}>
            {chatName}
          </h1>
          <MessageBox
            messageList={messageList}
            messageListLoading={messageListLoading}
          ></MessageBox>
          <InputBox
            selectedChat={selectedChat}
            messageList={messageList}
            setMessageList={setMessageList}
            token={token}
          ></InputBox>
        </div>
      </div>
    </main>
  );
}
