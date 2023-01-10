import { jokes } from "../../../lib/data";

export default function handler(request, response) {
  const { id } = request.query;

  const requestedJoke = jokes.find((joke) => joke.id === id);

  if (!requestedJoke) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(requestedJoke);
}
