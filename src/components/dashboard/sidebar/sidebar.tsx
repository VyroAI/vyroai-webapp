import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import NewChatButton from "@/components/dashboard/sidebar/newChatButton";
import NewFolderButton from "@/components/dashboard/sidebar/folderButton";
import ChatList from "@/components/dashboard/sidebar/chatList";
import LoadingSpinner from "@/components/utils/spinner";
import NavigationList from "@/components/dashboard/sidebar/navigationList";
import { Chat, User } from "@/app/(dash)/dashboard/index.interface";

export default function Sidebar({
  user,
  chats,
  children,
  selectedChat,
  setSelectedChat,
}: {
  user: User | null;
  chats: Chat[];

  children: React.ReactNode;
  selectedChat: number;
  setSelectedChat: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect(() => {
  //   if (chats.length == 0) return;
  //   if (chats[0].chat_id != 0 && selectedChat == 0) {
  //     setSelectedChat(chats[0].chat_id);
  //   }
  // }, [chats]);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[#202123]">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 px-2">
                    <div className="flex items-center">
                      <NewChatButton></NewChatButton>
                      <NewFolderButton></NewFolderButton>
                    </div>
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {chats[0]?.chat_id == 0 ? (
                      <div className={"flex mt-6 justify-center"}>
                        <LoadingSpinner></LoadingSpinner>
                      </div>
                    ) : (
                      ChatList(
                        chats,
                        selectedChat,
                        setSelectedChat,
                        setSidebarOpen
                      )
                    )}
                  </nav>
                </div>
                <div className=" border-gray-200 p-4">{NavigationList()}</div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14"></div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-[#202123]">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto bg-[#202123]">
              <div className="flex-shrink-0 pr-2">
                <div className="flex items-center">
                  <NewChatButton></NewChatButton>
                  <NewFolderButton></NewFolderButton>
                </div>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-[#202123] space-y-1 ">
                {chats[0]?.chat_id == 0 ? (
                  <div className={"flex mt-6 justify-center"}>
                    <LoadingSpinner></LoadingSpinner>
                  </div>
                ) : (
                  ChatList(chats, selectedChat, setSelectedChat, setSidebarOpen)
                )}
              </nav>
            </div>
            <div className="mt-5 px-2 bg-[#202123] space-y-1 ">
              {NavigationList()}
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1 ">
          <div className=" top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100 absolute">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

//
