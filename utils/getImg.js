const getImg = (imgLink) => {
  const imgKey = imgLink.asset._ref
    .replace(/image-/, '')
    .replace(/-jpg/, '.jpg')
    .replace(/-png/, '.png')
    .replace(/-svg/, '.svg')
    .replace(/-webp/, '.webp');
  const imgSrc = `https://cdn.sanity.io/images/185dfub1/production/${imgKey}`;
  return imgSrc;
}
  
  export default getImg;