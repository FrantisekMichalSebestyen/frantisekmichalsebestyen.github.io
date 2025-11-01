import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "What is František listening to?",
  description: "Check what františek is listening to :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-purple-700">
      <body className="antialiased prose-lg rounded-xl xl:prose-2xl flex flex-col lg:flex-row max-w-2xl lg:grid lg:grid-cols-3 lg:max-w-7xl lg:gap-10 mx-auto font-pixel p-4 gap-4 bg-neutral-900 text-pink-50">
        {children}
      </body>
    </html>
  );
}
