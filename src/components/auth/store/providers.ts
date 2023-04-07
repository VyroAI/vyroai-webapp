export type Provider = {
  id: number;
  name: string;
  icon: string;
  darkIcon: string;
  url: string;
  bg: string;
};

export let LoginProvider: Provider[] = [
  {
    id: 0,
    name: "Sign in with Apple",
    icon: "apple_logo.svg",
    darkIcon: "apple_logo_dark.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/apple/login",
    bg: "black",
  },
  {
    id: 1,
    name: "Sign in with Google",
    icon: "google_icon.svg",
    darkIcon: "google_icon.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/google/login",
    bg: "white",
  },
  {
    id: 2,
    name: "Sign in with Instagram",
    icon: "instagram_logo.svg",
    darkIcon: "instagram_logo_dark.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/Instagram/login",
    bg: "#E1306C",
  },

  {
    id: 3,
    name: "Sign in with Discord",
    icon: "discord_logo.svg",
    darkIcon: "discord_logo_dark.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/discord/login",
    bg: "#5662F6",
  },
];
export let RegisterProvider: Provider[] = [
  {
    id: 0,
    name: "Register using Apple",
    icon: "apple_logo.svg",
    darkIcon: "apple_logo_dark.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/discord/register",
    bg: "black",
  },
  {
    id: 1,
    name: "Register using Google",
    icon: "google_icon.svg",
    darkIcon: "google_icon.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/google/register",
    bg: "white",
  },
  {
    id: 2,
    name: "Register using Instagram",
    icon: "instagram_logo.svg",
    darkIcon: "instagram_logo_dark.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/instagram/register",
    bg: "#E1306C",
  },

  {
    id: 3,
    name: "Register using Discord",
    icon: "discord_logo.svg",
    darkIcon: "discord_logo_dark.svg",
    url: process.env.NEXT_PUBLIC_API_URL + "v1/auth/discord/register",
    bg: "#5662F6",
  },
];
