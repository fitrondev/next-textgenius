import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Genius",
  description: "A platform for making AI content generator tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
}
