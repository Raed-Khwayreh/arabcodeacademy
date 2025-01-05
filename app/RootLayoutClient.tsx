"use client";

import localFont from "next/font/local";
import "./globals.css";
import "@/styles/variables.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "@/components/ui/provider";
import { DiscountHeader, Footer, Navbar } from "@/components/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const tajawal = localFont({
  src: [
    { path: "/fonts/Tajawal-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "/fonts/Tajawal-Light.ttf", weight: "300", style: "normal" },
    { path: "/fonts/Tajawal-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Tajawal-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/Tajawal-Bold.ttf", weight: "700", style: "normal" },
    { path: "/fonts/Tajawal-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "/fonts/Tajawal-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-tajawal",
});

const queryClient = new QueryClient();

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${tajawal.variable} vsc-initialized`}>
        <QueryClientProvider client={queryClient}>
          <Provider>
            <DiscountHeader
              text="خصومات بنسبة 20% على الكورسات"
              startDate="2024-10-20T00:00:00"
              endDate="2025-10-24T18:55:10"
            />
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
