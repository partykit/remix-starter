import type {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "partymix";
import WhosHere from "../components/whos-here";

declare const PARTYKIT_HOST: string;

export const meta: MetaFunction = () => {
  return [
    { title: "New Partymix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async function ({
  context,
}: LoaderFunctionArgs) {
  // You can use context.lobby to read vars, communicate with parties,
  // read from ai models or the vector db, and more.
  //
  // See https://docs.partykit.io/reference/partyserver-api/#partyfetchlobby
  // for more info.
  return Response.json({ partykitHost: PARTYKIT_HOST });
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>🎈 PartyKit ⤫ Remix 💿 </h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <WhosHere />
    </div>
  );
}
