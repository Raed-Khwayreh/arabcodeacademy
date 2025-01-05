import type { Metadata } from "next";
import "./globals.css";
import "@/styles/variables.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "Arab Code Academy",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
