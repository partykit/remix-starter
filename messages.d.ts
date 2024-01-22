// Keeping this simple, we send only one type of message
// (a total count of all connections and a count of connections from each country)

export type State = {
  total: number;
  from: Record<string, number>;
};
