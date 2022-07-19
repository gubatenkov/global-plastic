import { client } from './sanity';

export const homepageFieldsQuery = `
*[_type == 'homepage']{
  ...,
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
  "menu": *[_type == 'menu'][0],
  "socials": *[_type == 'socials'][0]
}
`;

export const getInvolvedFieldsQuery = async () => {
  return await client.fetch(involvedFieldsQuery);
};



