import { client } from './sanity';

export const heroFieldsQuery = `
*[_type == 'homepage']
`;

export const getHeroFieldsQuery = async () => {
  return await client.fetch(heroFieldsQuery);
};

