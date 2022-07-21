## Getting Started

1. Clone this repository
- `git clone repository_link`
2. `npm install` in the project root folder on local
3. `npm install` in the `studio` folder 
4. Create a `.env` file in the web root folder containing the next variables:
- NEXT_PUBLIC_SANITY_PROJECT_ID =
- NEXT_PUBLIC_SANITY_DATASET =
- NEXT_PUBLIC_PORTAL_ID =
- NEXT_PUBLIC_CONTACT_FORM_GUID =
5. `npm run dev` to start the frontend locally
     - Your frontend should be running on [http://localhost:3000](http://localhost:3000)
6. `npm start` to start the studio locally
     - Your studio should be running on [http://localhost:3333](http://localhost:3333)
7. `npm run build` to build to production locally

## Site Structure

- root folder - a dynamic frontend with [Next.js](https://nextjs.org)
- `studio` folder - structured content using [Sanity.io](https://www.sanity.io)