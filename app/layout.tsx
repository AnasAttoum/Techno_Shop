import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: { name: "Anas Attoum" },
  title: 'Techno Shop',
  description: 'Techno Shop will be your favorite shop for all what you need.',
  keywords:
    "React.Js , Next.Js , Next.JS 14 , TailwindCSS, CSS, Javascript , TypeScript",
  icons: "/techno_shop.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Nav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
