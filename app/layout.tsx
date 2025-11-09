import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import IntlProvider from "@/components/IntlProvider";
import { space_Grotesk } from "./fonts";
import { Header } from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Rodrigo's Portfolio",
  description: "Searching for a new opportunity as a Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${space_Grotesk.className} antialiased bg-bg`}>
        <LocaleProvider>
          <IntlProvider>
              <Header />
              <main>{children}</main>
              <Footer />
          </IntlProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
