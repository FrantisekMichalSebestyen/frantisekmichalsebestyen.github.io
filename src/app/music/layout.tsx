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
      <body className="antialiased prose-xl rounded-xl prose-invert flex flex-col max-w-2xl mx-auto font-pixel p-4 gap-4 bg-neutral-900 text-pink-50">
          {children}
      </body>
    </html>
  );
}
