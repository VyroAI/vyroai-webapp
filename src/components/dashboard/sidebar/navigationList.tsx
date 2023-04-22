import navigation from "@/components/dashboard/store/navigation";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function NavigationList() {
  const router = useRouter();
  return navigation.map((nav) => (
    <div
      key={nav.id}
      className={
        "text-white hover:bg-gray-50  hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      }
      onClick={() => {
        //logout function, deletes cookies and redirects to login
        if (nav.id == 2) {
          deleteCookie("authorization");
          router.push("login");
        }
      }}
    >
      {
        <nav.icon
          className={
            "text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
          }
          aria-hidden="true"
        />
      }
      {nav.name}
    </div>
  ));
}
