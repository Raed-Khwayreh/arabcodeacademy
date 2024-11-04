import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../styles/variables.css";
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
      <body className={`${tajawal.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
