import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import { ThemeProvider } from "~/hooks/theme-provider";
import Image from "next/image";
import { Navbar } from "~/components/nav";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HelloFaizan | Indie Hacker",
  description:
    "Just a 17 yo who is trying to make something out of his life | Building internet products",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "HelloFaizan | Indie Hacker",
    description:
      "Just a 17 yo who is trying to make something out of his life | Building internet products",
    type: "website",
    locale: "en_US",
    url: "https://hellofaizan.tech",
    images: "/portfolio.png",
    siteName: "HelloFaizan | Indie Hacker",
  },
  twitter: {
    site: "@hellofaizaan",
    images: "/portfolio.png",
    card: "summary_large_image",
    title: "HelloFaizan | Indie Hacker",
    description:
      "Just a 17 yo who is trying to make something out of his life | Building internet products",
    creator: "@hellofaizaan",
  },
  keywords: [
    "HelloFaizan",
    "Indie Hacker",
    "Indie Hacker India",
    "Indie Hacker Pakistan",
    "Indie Hacker Bangladesh",
    "Indie Hacker World",
    "Indie Hacker",
    "Indie Hacker",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={
          GeistSans.className + " min-h-dvh md:min-h-screen bg-background"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Image
            src={"/bg.svg"}
            width={0}
            height={0}
            alt="background"
            className="absolute z-[-1] left-0 w-full h-1/2 md:h-[70%] lg:h-[80%] object-cover md:object-fill"
          />
          <div className="flex-auto min-w-0 flex flex-col md:px-0 container md:max-w-3xl mx-auto w-full px-0 md:pt-16 pb-6 md:pb-8">
            <div className="flex-1">
              <Navbar />
              <div className="px-3 md:px-0">{children}</div>
            </div>
          </div>
        </ThemeProvider>
        <Script
          defer
          src="https://stats.findsaas.pro/script.js"
          data-website-id="51fed3b7-7942-4f98-86a5-f50f210633ff"
        ></Script>
      </body>
    </html>
  );
}
