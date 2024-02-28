import localFont from "next/font/local";

export const beautifulFont = localFont({
  src: [
    {
      path: "../public/font/Involve-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Involve-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/Involve-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/Involve-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
