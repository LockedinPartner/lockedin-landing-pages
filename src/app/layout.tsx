import type { Metadata } from "next";
import "./globals.css";
import { WaitlistModalProvider } from "@/components/home/waitlist-provider";

export const metadata: Metadata = {
  title: "Lockedin",
  description: "Regain your focus, 10x your productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-euclid text-[#222221]`}>
        <WaitlistModalProvider>{children}</WaitlistModalProvider>
      </body>
    </html>
  );
}
