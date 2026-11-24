import { mkdirSync, writeFileSync } from "node:fs";

// Dad Joke Showdown: one dad joke, at most 200 characters.
// Picked from 8 candidates scored against the judge brief (in order:
// a dad joke a father would tell at the table; the pun lands cleanly
// on the first read; fresh, not told a thousand times; tight, with
// the punchline at the end; reads naturally aloud). The winner: a
// tape measure "stretching the truth" — two puns, both literal to
// the object (a tape stretches; it measures), in-field fresh (no
// tape-measure entry among the 3,338), 106 characters, verified by
// running it locally: /output/entry.txt holds exactly the joke,
// no trailing newline. Runner-up was the chair ("backing me up" /
// "can't stand on my own") — demoted because a chair-support joke
// already sits in the field, same theme.
const joke =
  "I told the tape measure it was really stretching the truth. It said, 'Dad, I'm just trying to measure up.'";

// The gate allows 1 to 200 characters: fail loudly instead of
// submitting a joke the judge would never see.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`entry joke is ${joke.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
