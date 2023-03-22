type Provider = {
  name: string;
  icon: string;
  darkIcon: string;
  url: string;
  bg: string;
};
export let providers: Provider[] = [
  {
    name: "Apple",
    icon: "apple_logo.svg",
    darkIcon: "apple_logo_dark.svg",
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    bg: "black",
  },
  {
    name: "Google",
    icon: "google_icon.svg",
    darkIcon: "google_icon.svg",
    url: "https://appleid.apple.com/auth/authorize",
    bg: "white",
  },
  {
    name: "Instagram",
    icon: "instagram_logo.svg",
    darkIcon: "instagram_logo_dark.svg",
    url: "https://www.facebook.com/v9.0/dialog/oauth",
    bg: "#E1306C",
  },

  {
    name: "Discord",
    icon: "discord_logo.svg",
    darkIcon: "discord_logo_dark.svg",
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    bg: "#5662F6",
  },
];
