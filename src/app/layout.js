import "./globals.css";
import Header from "./components/Header";
import {Inter} from "next/font/google";
import SetVhClient from "./components/SetVhClient/SetVhClient";

const mainFontFamily = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["sans-serif"],
  fontFamily: "Inter",
  style: "normal",

});



export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de André Monteiro Rachel",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
  },
  metadataBase: new URL("https://portifoliov2-navy.vercel.app/"),
  openGraph: {
    title: "Meu Portfólio",
    description: "Portfólio de André Monteiro Rachel",
    url: "https://portifoliov2-navy.vercel.app/",
    siteName: "Portfólio André Monteiro Rachel",
    images: [
      {
        url: "/heroImg1.webp",
        width: 1200,
        height: 630,
        alt: "Og Image",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${mainFontFamily.className}`}>
        <SetVhClient />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
