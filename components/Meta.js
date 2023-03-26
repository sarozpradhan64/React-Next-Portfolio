import React from "react";
import Head from "next/head";
import metas from "../src/metaData";
export default function Meta() {
  return (
    <Head>
      <title>{metas.title ? metas.title : metas.user.name}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />

      <meta
        name="title"
        content={metas.title ? metas.title : metas.user.name}
      />
      <meta
        name="description"
        content={metas.description}
      />
      <meta
        name="og:description"
        content={metas.description}
      />
      <meta name="og:image"
      content={metas.imageSrc} />
      <meta
        name="keywords"
        content={metas.keyword}
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="2 days" />
      <meta name="author" content={metas.user.name} />
    </Head>
  );
}
