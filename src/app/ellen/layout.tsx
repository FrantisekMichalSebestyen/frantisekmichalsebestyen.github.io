import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Výlet do Botanickej",
  description: "Náš výlet do Botanickej záhrady",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
