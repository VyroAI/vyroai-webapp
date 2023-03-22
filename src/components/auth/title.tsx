type AuthTitleProps = {
  text: string;
  description: string;
};
export default function AuthTitle({ text, description }: AuthTitleProps) {
  return (
    <div>
      <h1 className={"dark:text-white text-4xl font-semibold text-center"}>
        {text}
      </h1>

      <h2
        className={"dark:text-[#FFFFFF] text-md font-medium text-center mt-4"}
      >
        {description}
      </h2>
    </div>
  );
}
