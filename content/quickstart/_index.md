---
title: Quick Start
alwaysopen: true
weight: 1
---

Welcome to Cloudflare Workers! This tutorial series will bring you from no experience with Workers, to writing and deploying your first project!

Cloudflare Workers is a platform for building and deploying code to a global cloud network. If you’re interested in how the platform works, check out the [Reference](/reference) section of the documentation.

## Installing the CLI

All of the tutorials in the Workers documentation use [Wrangler][2], Cloudflare's open-source command-line tool for managing Cloudflare Workers projects. To begin, you’ll need to [install Wrangler](TODO: link to install page) on your machine.

To confirm that Wrangler has successfully installed on your machine, run `wrangler --help` on the command-line. You should see output like the below screenshot:

![Verify Wrangler Installation](./media/verify-wrangler-install.png)

## Scaffold a Project

We've tried to make it as easy as possible for new and returning users alike to get up and running with Workers by including support for templates in Wrangler. Wrangler's `generate` subcommand allows you to create new projects based on existing templates. We maintain a great list of templates in our [Template Gallery](/templates), designed to help you get started quickly with Workers based on what you need in your project. For now, let's use one of our basic templates, which includes support for building and deploying JavaScript code, to generate our first Wrangler project:

``` sh
$ wrangler generate my-worker https://github.com/cloudflare/worker-template
```

![Generate a Project](./media/generate-project.png)

> 💡 Protip: If you're ever unsure what a Wrangler subcommand does, like `wrangler generate`, try adding `--help` to the end of the command.

TODO: "Generating a new _rustwasm_": screenshot should be redone when JS support lands

..and navigate into the newly generated project directory, and look at the list of files created:

``` sh
$ cd my-worker
$ ls
```

## Configure your Project

You'll need the following values from [your Cloudflare account](/reference/write-workers/api-keys) to deploy code to Cloudflare Workers:

- your Global API key
- the email addess associated with your Cloudflare account
- your Account ID
- your Zone ID (if you are running workers on your own domain)

With these keys, you can use Wrangler to set up your default credentials for deploying to Cloudflare Workers, via the `config` subcommand:

``` sh
$ wrangler config <email> <global_api_key>
```

The `wrangler.toml` file contains the information Wrangler needs to connect to the Cloudflare Workers API, and deploy your code.

In `wrangler.toml`, fill in the corresponding `account_id` and `zone_id` with the values found in your dashboard. The **name** field in this config file should have a default value already filled in – feel free to change it, if you'd like.

Finally, if you are deploying your code to your own domain, you need to set a **route** for your app: where it will be hosted and accessible by your users. The route field here is a _pattern_: if we chose the route `wasm-worker.signalnerve.com`, the Worker would _only_ run on that exact subdomain, at the _root_ path. If you changed the route to `wasm-worker.signalnerve.com/*` (using the `*` or _wildcard_ symbol), the Worker would then run on any path on that subdomain, for instance, `wasm-worker.signalnerve.com/test`, or even `wasm-worker.signalnerve.com/test/123`. Learn more about routes [here](/reference/write-workers/routes)

## Build and Preview your Project

![Inside my-worker directory](./media/cd-ls-my-worker.png)

`worker.js` contains the actual code that you'll deploy to Workers. Let's use two more Wrangler commands to build your project, and preview it:

``` sh
$ wrangler build
$ wrangler preview
```

Wrangler's `build` command will install the necessary dependencies for your project, and compile it to make it ready for deployment. The `build` command will also notify you of any build warnings before deployment.

The `preview` command will take your built Worker project and upload it to a unique URL at [cloudflareworkers.com](https://cloudflareworkers.com). This means that you can actually test your project with our Workers runtime, and optionally, you can share this URL so that other users can test your Worker!

![Preview your Worker](./media/wrangler-preview.png)

(TODO: JS preview currently doesn't work, should be updated when JS support lands in Wrangler)

## Publish your Project

With your project configured, it's time to publish it! Wrangler has a built-in command for uploading your script, generating the route that corresponds to your `wrangler.toml` file, and wiring them together. If that sounds complicated, don't worry – we've made it really easy:

``` sh
wrangler publish
```

![Wrangler Publish Command](./media/wrangler-publish.png)

Your Worker will be uploaded and deployed to the route you specified in your config file. To ensure that everything deployed correctly, go to the URL specified at the end of the publishing process – you should see your Worker running as expected!

![Published Worker](./media/published.png)

TODO I have multiscript, and this whole section assumes zone workers: will need to redo this with zoneless workers and probably rework the routing copy as we update Wrangler to support that.

## Learn More

This is just the beginning of what you can do with Cloudflare Workers. If you'd like to dive deeper into building projects with Cloudflare Workers, check out the full-length tutorials below:

- [Build An Application](/tutorials/build-an-application)
- [Build A Serverless Function](/tutorials/build-a-serverless-function)
- [Configure Your CDN](/tutorials/configure-your-cdn)

[2]: https://github.com/cloudflare/wrangler
[3]: TODO