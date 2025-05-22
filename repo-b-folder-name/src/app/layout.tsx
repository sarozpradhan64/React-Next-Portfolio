import "./style.css";
import metas from "@/data/metaData";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";

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
      <body>{children}</body>
      <GoogleAnalytics gaId={metas.google_analytics_id} />
    </html>
  );
}
