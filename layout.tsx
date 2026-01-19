import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}