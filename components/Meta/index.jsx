const Meta = ({ ogTitle, ogDescription, twitterSite, type, image, url }) => {
  return (
    <>
      <meta property='og:title' content={ogTitle} />
      <meta property='og:type' content={type} />
      <meta property='og:site_name' content='OPLN' />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={ogTitle} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:site' content={twitterSite}/>
      <meta name='twitter:description' content={ogDescription} />
    </>
  );
}

export default Meta;