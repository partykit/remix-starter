import { createRequestHandler, logDevReady } from "partymix";
import * as build from "@remix-run/dev/server-build";

import type {
  PartyExecutionContext,
  PartyFetchLobby,
  PartyRequest,
  PartyServer,
  PartyWorker,
} from "partykit/server";

if (process.env.NODE_ENV === "development") {
  // trigger a reload on the remix dev server
  logDevReady(build);
}

const handleRequest = createRequestHandler({ build });

export default class MyRemix implements PartyServer {
  static onFetch(
    request: PartyRequest,
    lobby: PartyFetchLobby,
    ctx: PartyExecutionContext
  ) {
    return handleRequest(request, lobby, ctx);
  }
}

MyRemix satisfies PartyWorker;
