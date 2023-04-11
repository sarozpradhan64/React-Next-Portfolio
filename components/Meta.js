import React from "react";
import Head from "next/head";
import metas from "../src/metaData";
export default function Meta({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} | ${metas.title}` : metas.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />

      <meta
        name="title"
        content={title ? `${title} | ${metas.title}` : metas.title}
      />
      <meta
        name="description"
        content={description ? description : metas.description}
      />
      <meta
        name="og:description"
        content={description ? description : metas.description}
      />
      <meta name="og:image" content={metas.imageSrc} />
      <meta name="keywords" content={metas.keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="2 days" />
      <meta name="author" content={metas.user.name} />
    </Head>
  );
}
