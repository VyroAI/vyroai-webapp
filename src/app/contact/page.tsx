import Head from "next/head";
import FormBox from "@/components/contact/formBox";
import BreakLine from "@/helper/breakLine";

export default function ContactPage() {
  return (
    <div className={"relative top-16"}>
      <div className={"flex lg:flex-row lg:flex-col"}>
        <div className="basis-1/2 h-screen">
          <div className={"flex items-center justify-center min-h-screen"}>
            <h1
              className={
                "text-4xl font-extrabold dark:text-white lg:mt-[-200px]"
              }
            >
              Lets Chat {BreakLine()} Tell me about your project{" "}
            </h1>
          </div>
        </div>
        <FormBox></FormBox>
      </div>
    </div>
  );
}
