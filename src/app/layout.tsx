import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import { ThemeProvider } from "~/hooks/theme-provider";
import { Navbar } from "~/components/nav";
import Script from "next/script";
import { Toaster } from "~/components/ui/sonner";
import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/sidebar";
import Hire from "~/components/hire";
import Footer from "~/components/footer";
import { Separator } from "~/components/ui/separator";
import { ReactNode } from "react";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammadfaizan.in"),
  title: "Mohammad Faizan | Full Stack Android and Web Developer | India",
  description:
    "Mohammad Faizan, experienced Full Stack Android and Web Developer and specializing in React, Arduino, Java, and Kotlin. Creating responsive web applications and native Android apps | Building internet products",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Mohammad Faizan | Full Stack Android and Web Developer | India",
    description:
      "Mohammad Faizan, experienced Full Stack Android and Web Developer and specializing in React, Arduino, Java, and Kotlin. Creating responsive web applications and native Android apps | Building internet products",
    type: "website",
    locale: "en_US",
    url: "https://mohammadfaizan.in",
    images: "/portfolio.png",
    siteName: "Mohammad Faizan | Full Stack Android and Web Developer | India",
  },
  twitter: {
    site: "@hellofaizaan",
    images: "/portfolio.png",
    card: "summary_large_image",
    title: "Mohammad Faizan | Full Stack Android and Web Developer | India",
    description:
      "Mohammad Faizan, experienced Full Stack Android and Web Developer and specializing in React, Arduino, Java, and Kotlin. Creating responsive web applications and native Android apps | Building internet products",
    creator: "@hellofaizaan",
  },
  keywords: [
    "Mohammad Faizan Developer Portfolio",
    "Mohammad Faizan Front-End Developer Jammu Kashmir",
    "Mohammad Faizan Android App Developer India",
    "Mohammad Faizan Full Stack Developer",

    // Role Based Keywords
    "Mohammad Faizan Front-End Web Developer",
    "Mohammad Faizan Android Developer",
    "Mohammad Faizan Mobile App Developer",
    "Mohammad Faizan UI/UX Developer",
    "Mohammad Faizan JavaScript Developer",
    "Mohammad Faizan React Developer",

    // Technical Skills Keywords
    "Mohammad Faizan HTML CSS JavaScript Developer",
    "Mohammad Faizan Android Development Expert",
    "Mohammad Faizan React.js Developer",
    "Mohammad Faizan Next.js Projects",
    "Mohammad Faizan Mobile-First Developer",
    "Mohammad Faizan Responsive Web Designer",
    "Mohammad Faizan Java Kotlin Developer",
    "Mohammad Faizan Android SDK Expert",
    "Mohammad Faizan Material Design Developer",
    "Mohammad Faizan Tailwind CSS Expert",

    // Interest Based Keywords
    "Mohammad Faizan AI ML Developer",
    "Mohammad Faizan Open Source Contributor",
    "Mohammad Faizan SaaS Developer",
    "Mohammad Faizan Developer Tools Expert",
    "Mohammad Faizan UX Designer",
    "Mohammad Faizan IoT Developer",
    "Mohammad Faizan Tech Innovator",

    // Location Based Keywords
    "Mohammad Faizan Developer Jammu Kashmir",
    "Mohammad Faizan Indian Developer",
    "Mohammad Faizan Remote Developer India",
    "Mohammad Faizan Freelance Developer India",
    "Hire Mohammad Faizan Front-End Developer India",
    "Mohammad Faizan Android App Developer Portfolio",
    "Mohammad Faizan Custom Web Applications",
    "Mohammad Faizan Mobile App Development Services",
    "Mohammad Faizan React Native Development",
    "Mohammad Faizan Modern Web Developer",
    "Mohammad Faizan UI UX Development Projects",

    // Action Based Keywords
    "Hire Mohammad Faizan Android Developer",
    "Hire Mohammad Faizan Front-End Developer",
    "Mohammad Faizan Web Development Projects",
    "Mohammad Faizan Mobile App Projects",
    "Mohammad Faizan Developer Collaboration",
    "Mohammad Faizan Tech Consultation",

    // Emerging Tech Keywords
    "Mohammad Faizan DSA Developer",
    "Mohammad Faizan Competitive Programming",
    "Mohammad Faizan AI Integration Expert",
    "Mohammad Faizan Modern Web Technologies",
    "Mohammad Faizan Tech Stack Expert",
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohammad Faizan",
              "jobTitle": "Web Developer, Software Engineer",
              "description": "Mohammad Faizan is a web developer and software engineer from Kashmir, India. Not the Pakistani cricketer.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kashmir",
                "addressCountry": "India"
              },
              "url": "https://mohammadfaizan.in/",
              "sameAs": [
                "https://twitter.com/hellofaizan",
                "https://github.com/hellofaizan"
              ]
            })
          }}
        />
      </Head>
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <div className="flex-auto min-w-0 flex flex-col md:px-0 container md:max-w-3xl mx-auto w-full px-0 md:pt-14 pb-6 md:pb-8">
              <div className="flex-1">
                <Navbar />
                <div className="px-5 md:px-0">{children}</div>

                <div className="flex flex-col gap-2 mt-7 px-5 md:px-0">
                  <Hire />
                  <Separator className="w-full my-5 bg-muted-foreground/35" />
                  <Footer />
                </div>
                <Toaster />
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
        <Script
          defer
          src="https://umami-beta-seven.vercel.app/script.js"
          data-website-id="92e2a7bc-f079-4387-be70-0ad0b202b7a8"
        ></Script>
      </body>
    </html>
  );
}
