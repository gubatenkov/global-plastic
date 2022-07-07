import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import config from './config';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

export const urlForImage = (source) => imageUrlBuilder(config).image(source);

export const client = createClient(config);

export default client;
