import type { Metadata } from "next";
import "./globals.css";


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
      <body className={`font-general text-[#222221]`}>{children}</body>
    </html>
  );
}
