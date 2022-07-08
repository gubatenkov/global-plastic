import { client } from './sanity';

export const homepageFieldsQuery = `
*[_type == 'homepage']
`;

export const getHomepageFieldsQuery = async () => {
  return await client.fetch(homepageFieldsQuery);
};

