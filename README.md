# Welcome to 🎈 PartyKit ⤫ Remix 💿!

This is a starter template for [Remix](https://remix.run) and [PartyKit](https://partykit.io). You can create a new project based on this template with the Remix CLI:

```sh
npx create-remix@latest ./my-partymix-app --template partykit/remix-starter
```

- [Remix Docs](https://remix.run/docs)
- [PartyKit Docs](https://docs.partykit.io/)

_NB: This is a **beta** release, so expect some rough edges. Please file issues or feedback at https://github.com/partykit/remix-starter!_

## Development

You will be running two processes during development:

- The Remix development server
- The PartyKit server

Both are started with one command:

```sh
npm run dev
```

Open up [http://127.0.0.1:1999](http://127.0.0.1:1999) and you should be ready to go!

If you want to check the production build, you can stop the dev server and run following commands:

```sh
npm run build
npm start
```

Then refresh the same URL in your browser (no live reload for production builds).

## Deployment

```sh
npm run deploy
```

If you don't already have a PartyKit account, you'll be prompted to create one during the deploy process.

## Thanks

_(This starter based on the original template for [Cloudflare Workers](https://github.com/remix-run/remix/tree/main/templates/cloudflare-workers))_
