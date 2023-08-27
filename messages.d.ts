// Keeping this simple, we send only one type of message
// (a total count of all connections and a count of connections from each country)

export type Message = {
  total: number;
  from: Record<string, number>;
};

// On the server, we'll store the state in memory
export type State = Message | undefined;
