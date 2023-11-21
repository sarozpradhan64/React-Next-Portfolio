import Script from "next/script";
import metas from "../src/metaData";
import "../styles/tailwind.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*   google analytics  */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${metas.google_analytics_id}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${metas.google_analytics_id}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      {/* google analytics end  */}

      {/* google adsense  */}
      <Script
      id="Adsense-id"
      data-ad-client={metas.google_adsense_id}
      async="true"
      strategy="beforeInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />


      {/* google adsense end  */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
