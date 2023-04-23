import Image from "next/image";

export default function MessageLoading() {
  const loadingMessages = () => {
    const messages = [];
    for (let i = 0; i < 10; i++) {
      messages.push(
        <div
          key={i + 100}
          className={`w-full flex mt-4 items-start ${
            i % 2 == 0 ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-800 shadow-md`}
          >
            <div className="text-sm font-medium w-80 h-5">{""}</div>
          </div>
        </div>
      );
    }
    return messages;
  };

  return <div>{loadingMessages()}</div>;
}
