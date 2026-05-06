import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientBehavior from "@/components/ClientBehavior";
import MatrixBackground from "@/components/MatrixBackground";

export const metadata: Metadata = {
  title: "Enoch Kumanyenu | Software Engineer",
  description:
    "Portfolio of Enoch Kumanyenu - Software Engineer specializing in Java, Spring Boot, Python, and AI development.",
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <MatrixBackground />
        <Header />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <ClientBehavior />
      </body>
    </html>
  );
}
