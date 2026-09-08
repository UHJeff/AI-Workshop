import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeff Hu",
  description: "I help UH startups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
