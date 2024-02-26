
import "./globals.css";
import "./style.css";
import metas from "@/data/metaData";
import { GoogleAnalytics } from '@next/third-parties/google'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Caramel&family=Righteous&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <body >{children}</body>
      <GoogleAnalytics gaId={metas.google_analytics_id} />
    </html>
  );
}
