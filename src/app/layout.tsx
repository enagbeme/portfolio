import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientBehavior from "@/components/ClientBehavior";

export const metadata: Metadata = {
  title: "Enoch's Portfolio",
  description: "Personal portfolio of Enoch Kumanyenu",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientBehavior />
      </body>
    </html>
  );
}
