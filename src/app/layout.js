import "./globals.css";
import Header from "./components/Header";
import {Inter} from "next/font/google";

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
  };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${mainFontFamily.className}`}>
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
