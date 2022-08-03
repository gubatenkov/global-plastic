import { client } from './sanity';

export const homepageFieldsQuery = `
*[_type == 'homepage']{
  ...,
  "meta": *[_type == 'meta'][0],
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getHomepageFieldsQuery = async () => {
  return await client.fetch(homepageFieldsQuery);
};

export const countriesFieldsQuery = `
*[_type == 'countries']{
  ...,
  "meta": *[_type == 'meta'][0],
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getCountriesFieldsQuery = async () => {
  return await client.fetch(countriesFieldsQuery);
};

export const countryFieldsQuery = `
*[_type == 'countryPages']{
  ...,
  "meta": *[_type == 'meta'][0],
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getCountryFieldsQuery = async () => {
  return await client.fetch(countryFieldsQuery);
};

export const involvedFieldsQuery = `
*[_type == 'involved']{
  ...,
  "meta": *[_type == 'meta'][0],
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getInvolvedFieldsQuery = async () => {
  return await client.fetch(involvedFieldsQuery);
};

export const roadmapFieldsQuery = `
*[_type == 'roadmap']{
  ...,
  "meta": *[_type == 'meta'][0],
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getRoadmapFieldsQuery = async () => {
  return await client.fetch(roadmapFieldsQuery);
};

export const mediaFieldsQuery = `
*[_type == 'mediapage']{
  ...,
  "meta": *[_type == 'meta'][0],
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getMediaFieldsQuery = async () => {
  return await client.fetch(mediaFieldsQuery);
};

export const missionFieldsQuery = `
*[_type == 'mission']{
  ...,
  "meta": *[_type == 'meta'][0],
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getMissionFieldsQuery = async () => {
  return await client.fetch(missionFieldsQuery);
};
