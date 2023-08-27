import usePartySocket from "partysocket/react";
import { useState } from "react";
import type { Message, State } from "../../messages.d";
import countryCodeEmoji from "./country-code-emoji";

// This is a component that will connect to the partykit backend
// and display the number of connected users, and where they're from.
export default function WhosHere(props: { host: string }) {
  const [users, setUsers] = useState<State>();

  usePartySocket({
    host: props.host,
    // connect to the party defined by 'geo.ts'
    party: "geo",
    // this can be any name, we just picked 'index'
    room: "index",
    onMessage(evt) {
      const data = JSON.parse(evt.data) as Message;
      setUsers(data);
    },
  });

  return !users ? (
    "Connecting..."
  ) : (
    <div className="presence">
      <b>Who's here?</b>
      <br />
      {users?.total} user{users?.total !== 1 ? "s" : ""} online. (
      {Object.entries(users?.from || {})
        .map(([from, count]) => {
          return `${count} from ${countryCodeEmoji(from)}`;
        })
        .join(", ")}
      )
    </div>
  );
}
