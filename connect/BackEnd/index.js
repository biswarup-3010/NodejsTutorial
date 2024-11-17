const express = require("express");
const app = express();

const PORT = process.env.PORT || 4444;

const jokes = [
  {
    id: "joke_001",
    joke: "Why don't skeletons fight each other? They don't have the guts!",
  },
  {
    id: "joke_002",
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised!",
  },
  {
    id: "joke_003",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: "joke_004",
    joke: "I used to play piano by ear, but now I use my hands.",
  },
  {
    id: "joke_005",
    joke: "What did one ocean say to the other ocean? Nothing, they just waved.",
  },
  {
    id: "joke_006",
    joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
  },
  {
    id: "joke_007",
    joke: "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
  },
  {
    id: "joke_008",
    joke: "Parallel lines have so much in common. It's a shame they'll never meet.",
  },
  {
    id: "joke_009",
    joke: "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
  },
  {
    id: "joke_010",
    joke: "I can't trust stairs because they're always up to something.",
  },
];

app.get("/", (req, resp) => {
  resp.send("server created");
});

app.get("/api/jokes", (req, resp) => {
  resp.json(jokes);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
