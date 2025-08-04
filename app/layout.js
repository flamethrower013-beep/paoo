
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './componets/Footer'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pao-PLayer Arena Organiser",
  description: "Play And Earn",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body
        className={`h-full overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
