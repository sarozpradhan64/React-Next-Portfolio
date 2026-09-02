import "./style.css";
import metas from "@/data/metaData";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";

import { ActiveProvider } from "@/context/ActiveContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-righteous",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Saroj Pradhan",
  title: metas.title,
  description: metas.description,
  keywords: metas.keywords,
  openGraph: {
    images: metas.photoPath,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${righteous.variable}`}>
      <body>
        <script
          src="https://cdn.jsdelivr.net/gh/clashrelated/nepal-relief-banner@1.0.2/banner.min.js"
          integrity="sha384-zsV61Tmn6kfxMnauiuGMOgbTqBC6qhHBy/x0ne2M0sSSoK3q+xTlPs3ZMC8W/SUp"
          crossOrigin="anonymous"
          data-position="sticky"
          data-theme="auto"
          data-lang="en"
        ></script>
        <ActiveProvider>{children}</ActiveProvider>
      </body>
      <GoogleAnalytics gaId={metas.google_analytics_id ?? ""} />
    </html>
  );
}
