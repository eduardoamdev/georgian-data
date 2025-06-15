import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georgian Data",
  description: "A collection of Georgian datasets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Template</h1>
        {children}
      </body>
    </html>
  );
}
