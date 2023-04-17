"use client";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteCookie } from "cookies-next";

import { useRouter } from "next/navigation";
import { Chat, User } from "@/app/(dash)/dashboard/index.interface";

export default function Dashboard({ params }: { params: { token: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<User>({});
  const [chats, setChat] = useState<Chat[]>([{ chat_id: 0, title: "" }]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/self`, {
      mode: "cors",
      cache: "no-cache",
      headers: {
        authorization: params.token,
      },
    })
      .then(async (response) => {
        const responseFromServer = await response.json();
        if (response.status == 200) {
          setUser(responseFromServer.data.user);
          setChat(responseFromServer.data.chats);
        } else {
          toast.error(responseFromServer.message);
          deleteCookie("authorization");
          await router.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={"h-full h-full"}>
      <Sidebar user={user} chats={chats}></Sidebar>
    </div>
  );
}
