import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IPEKA App",
  description: "Aplikasi daftar transaksi pembayaran Sekolah Kristen IPEKA",
  icons: {
    icon: "/ipeka_logo.png",
    type: "image/png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
