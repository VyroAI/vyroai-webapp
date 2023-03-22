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
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    bg: "black",
  },
  {
    id: 1,
    name: "Sign in with Google",
    icon: "google_icon.svg",
    darkIcon: "google_icon.svg",
    url: "https://appleid.apple.com/auth/authorize",
    bg: "white",
  },
  {
    id: 2,
    name: "Sign in with Instagram",
    icon: "instagram_logo.svg",
    darkIcon: "instagram_logo_dark.svg",
    url: "https://www.facebook.com/v9.0/dialog/oauth",
    bg: "#E1306C",
  },

  {
    id: 3,
    name: "Sign in with Discord",
    icon: "discord_logo.svg",
    darkIcon: "discord_logo_dark.svg",
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    bg: "#5662F6",
  },
];
export let RegisterProvider: Provider[] = [
  {
    id: 0,
    name: "Register using Apple",
    icon: "apple_logo.svg",
    darkIcon: "apple_logo_dark.svg",
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    bg: "black",
  },
  {
    id: 1,
    name: "Register using Google",
    icon: "google_icon.svg",
    darkIcon: "google_icon.svg",
    url: "https://appleid.apple.com/auth/authorize",
    bg: "white",
  },
  {
    id: 2,
    name: "Register using Instagram",
    icon: "instagram_logo.svg",
    darkIcon: "instagram_logo_dark.svg",
    url: "https://www.facebook.com/v9.0/dialog/oauth",
    bg: "#E1306C",
  },

  {
    id: 3,
    name: "Register using Discord",
    icon: "discord_logo.svg",
    darkIcon: "discord_logo_dark.svg",
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    bg: "#5662F6",
  },
];
