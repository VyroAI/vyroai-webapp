import { cookies } from "next/headers";

async function fetchUser() {
  const cookieStore = cookies();
  const bearerToken = cookieStore.get("authorization");
  console.log(bearerToken?.value);
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `v1/self`, {
    headers: { authorization: bearerToken?.value },
  });
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Dashboard() {
  const user = await fetchUser();
  console.log(user);

  return <div></div>;
}
