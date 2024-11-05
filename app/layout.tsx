import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Tajawal } from "next/font/google";
import "./globals.css";
import "../styles/variables.css";
import DiscountHeader from "./Components/DiscountHeader/DiscountHeader";
import { Provider } from "../components/ui/provider";

const tajawal = localFont({
  src: [
    {
      path: "/fonts/Tajawal-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/Tajawal-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/Tajawal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Tajawal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Tajawal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Tajawal-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/Tajawal-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Arab Code Academy",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tajawal.variable}`}
      >
         <Provider>
        <DiscountHeader
          text="خصومات بنسبة 20% على الكورسات"
          startDate="2024-10-20T00:00:00"
          endDate="2025-10-24T18:55:10"
        />
        {children}
        </Provider>
      </body>
    </html>
  );
}
