This repo is an example of the existing Cloudflare Developer Docs that once used Hugo to be replaced with Gatsby.

Deployed using Worker's sites and Github actions. No team city, kubernetes, bitbucket required.

# Prereqs

### node

Check if you have node already by running:

```
node --version
```

If a version number outputs you already have node, skip this step otherwise run:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
nvm install node
nvm use node
```

### wrangler

Now with npm run wrangler

```
npm i -g @cloudflare/wrangler
```

# Setup

First clone the repo

```
git clone git@github.com:victoriabernard92/gatsby-docs.git
```

Install the working version of these docs

```
cd gatsby-docs
npm install
npm run start
```

# Content

Replace all existing markdown content in `./src/content` with markdown files you wish to serve. Follow how the existing markdown and directory structure references media, links, and so.

Don't mess with the content in `src/static` unless you wish to change styles.

Note if you don't use a field in the frontmatter (e.g. `showNew`) make sure to remove it from any graphql queries

# Configure

## Replace prefix

Replace instances of `/workers` with the path of your documentation's prefix

## Wrangler.toml

Replace all the account id, zone id, and path values of the site you wish to serve on Cloudflare.

# Deploy

This repo is already set up with wrangler Github actions, so once staging or master branch is pushed on Github, the site will automatically deploy at the corresponding path set up in your wrangler.toml you just need to place your Cloudflare API token into the Github repo's secrets. Read the [wrangler Github action. README](https://github.com/cloudflare/wrangler-action) for more deploy options
