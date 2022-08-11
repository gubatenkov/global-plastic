import Head from 'next/head';
import getImg from '../../utils/getImg';

const Meta = ({
  data: {
    pageMeta,
    analytics: { tag },
  },
}) => {
  const {
    pageTitle,
    pageDescription,
    ogTitle,
    ogDescription,
    twitterSite,
    type,
    image,
    url,
  } = pageMeta;
  const imgSrc = getImg(image);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgSrc} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="OPLN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={imgSrc} />
      <meta name="twitter:site" content={twitterSite} />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${tag}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${tag}', { page_path: window.location.pathname });`,
        }}
      />
    </Head>
  );
};

export default Meta;
