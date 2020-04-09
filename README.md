# Cloudflare Workers Documentation

This repo is a boilerplate for starting Cloudflare Developer documentation on Gatsy and Workers site, similar that deployed on developers.cloudflare.com/workers and developers.cloudflare.com/api.

## Install

Ensure you have the the following installed:

- [node](https://nodejs.org/en/download/) version 9

## Preview

To test the content or static gatsby files locally, run:

```
npm run install
npm run start
```

Your site is now running at `http://localhost:8000/workers`!

## Develop 

To develop replace and add markdown files in `/src/content`. 

This repo is setup to run a Gatsby site on /workers using the content and components in `src/*`. Assuming you want this to run a different route, do a find and replace of all `workers` instances in this code base to run the worker on a different route.

Note I - Victoria - am actively working to improve the process so please DM me if you have any questions in the meantime!

# Worker

To test the Worker logic serving these static files (i.e. anything in `./workers-site`), first setup wrangler by following the [quick start](https://developers.cloudflare.com/workers/quickstart/). Make sure to add your account id to your `wrangler.toml` and authenticate using `wrangler config`

Last preview your Worker by running:

```
npm run worker-start
```

## Build

To build all files to `public`:

```
npm run build
```

To build all Worker files to `worker-site/dist`:

```
npm run build && npm run worker-build
```

## Test

To run test of the Workers script, run:

```
npm worker-test
```

## What's inside

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

2.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

3.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

## Publishing

To publish to staging:

```
npm run publish staging
```
