import StyledComponentsRegistry from "@/lib/registery";
import "@fontsource/lato";
import { GlobalStyles } from "./styles";
import Footer from "@/component/ui/Footer/Footer";
import Navbar from "@/component/ui/Navbar/Navbar";
import TopNavbar from "@/component/ui/Navbar/TopNavbar";
// import { assets } from "@/public/assets";
import { Metadata } from "next";
import Providers from "@/utils/Providers";
import { assets } from "@/public/assets";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import LocationModal from "@/component/locationModal";
import LocationModal from "@/component/newLocationModal/LocationModal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Diboruwa",
    template: "%s | Diboruwa",
  },
  description:
    "Diboruwa - One-Stop App for Home Services | Food | Groceries | Laundry | Cleaning | Moving",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://",
    siteName: "Diboruwa",
  },
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <TopNavbar />
          <Navbar />
          {authModal}

          <main className="main_container">{children}</main>
          <Analytics />
          
          <SpeedInsights />
          <Footer />
          <GlobalStyles />
        </Providers>
      </body>
    </html>
  );
}
