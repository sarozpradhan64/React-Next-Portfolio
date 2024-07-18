import "./style.css";
import metas from "@/data/metaData";
import { GoogleAnalytics } from "@next/third-parties/google";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${righteous.variable}`}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <body>{children}</body>
      <GoogleAnalytics gaId={metas.google_analytics_id} />
    </html>
  );
}
