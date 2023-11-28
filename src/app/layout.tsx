import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Container from "@/components/common/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nere",
  description: "Nere E-commerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
    <body className={inter.className}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Container>{children}</Container>
        </main>
        {/* <Footer /> */}
      </div>
    </body>
  </html>

  
  );
}
