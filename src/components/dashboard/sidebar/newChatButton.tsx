import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function NewChatButton() {
  return (
    <button
      className="flex grow flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10 bg-[#202123] ml-2"
      onClick={() => {}}
    >
      <FontAwesomeIcon icon={faPlus} className={"h-[18px]"} />
      {"New chat"}
    </button>
  );
}
