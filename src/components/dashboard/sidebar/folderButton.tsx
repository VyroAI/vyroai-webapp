import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
export default function NewFolderButton() {
  return (
    <button className="ml-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 p-3 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10 bg-[#202123]">
      {" "}
      <FontAwesomeIcon icon={faFolder} className={"h-[18px]"} />
    </button>
  );
}
