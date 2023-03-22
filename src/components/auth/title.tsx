type AuthTitleProps = {
  text: string;
};
export default function AuthTitle({ text }: AuthTitleProps) {
  return (
    <h1 className={"dark:text-white text-4xl font-semibold text-center"}>
      {text}
    </h1>
  );
}
