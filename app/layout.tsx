import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Gusain — Full-stack developer",
  description:
    "Gaurav Gusain builds practical web applications, business software, and custom digital products across React, Next.js, Node.js, Laravel, MySQL, and MongoDB.",
  authors: [{ name: "Gaurav Gusain" }],
  openGraph: {
    title: "Gaurav Gusain — Full-stack developer",
    description:
      "Custom CRM systems, internal tools, and full-stack web applications for growing businesses.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="atmosphere" aria-hidden="true" />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
