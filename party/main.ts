import { createRequestHandler, logDevReady } from "partymix";
import * as build from "@remix-run/dev/server-build";

import type * as Party from "partykit/server";

if (process.env.NODE_ENV === "development") {
  // trigger a reload on the remix dev server
  logDevReady(build);
}

// create a request handler for remix
const handleRequest = createRequestHandler({ build });

// This "main" party server simnply handles all regular http requests
export default class MyRemix implements Party.Server {
  static onFetch(
    request: Party.Request,
    lobby: Party.FetchLobby,
    ctx: Party.ExecutionContext
  ) {
    return handleRequest(request, lobby, ctx);
  }
}

MyRemix satisfies Party.Worker;
