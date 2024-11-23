import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";
// import { assets } from "@/public/assets";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dibo Ruwa",
    template: "%s | Dibo Ruwa",
  },
  description:
    "DiboRuwa - One-Stop App for Home Services | Northern Nigeria | Food | Laundry | Cleaning",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://",
    // site_name: "D",
  },
};

export default function RootLayout({
  children,
  // authModal,
}: {
  children: React.ReactNode;
  // authModal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />

        <main className="main_container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
