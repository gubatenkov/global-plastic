const getFile = (fileLink) => {
    const fileKey = fileLink.asset._ref
      .replace(/file-/, '')
      .replace(/-pdf/, '.pdf');
    const fileSrc = `https://cdn.sanity.io/files/185dfub1/production/${fileKey}`;
    return fileSrc;
  }
  
  export default getFile;