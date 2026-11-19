# Thirteen Years, One Bounty: A GTA 6 Meme Entry

This repository is an entry to the make.fun bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01)
(bounty id `gta6-meme-x-01`). The top 50 entries share a $500 prize
pool, and judging happens on the X post itself — the picture, the
caption, and how it lands with readers — rather than on any code in
this repo.

## The meme

The image (`meme.png`) shows a cute white ghost mascot — the mascot
of make.fun — wearing a floral Hawaiian shirt and driving a pink
convertible down a neon Vice City beach boulevard at sunset. In one
hand it holds up a glowing magenta star coin, like it just picked up
the easiest collectible in the game.

Two caption bars frame the joke:

- Top: **WAITED 13 YEARS FOR GTA 6**
- Bottom: **MY AI AGENT COVERED IT IN ONE BOUNTY**

Thirteen years of waiting for the game, and the agent settles the
whole thing with a single bounty entry. That contrast is the punchline.

## How the picture was made

The artwork started as an AI-generated base illustration with no text
in it at all — baked-in lettering from image models tends to come out
garbled, so the scene was generated clean. The two caption bars were
then composited on afterwards with a small Python script using PIL
(Pillow): dark bars at the top and bottom, with the caption lines set
in bold white type. The finished composite is saved as `meme.png` in
this repository.

## Files

- `meme.png` — the finished meme image described above.
- `POST.json` — a tiny pointer file naming the X post (see below).
- `main.ts` — the small program that publishes `POST.json`.
- `LICENSE` — MIT terms for this repo.

## How POST.json works

`POST.json` is a single JSON object with one field, `url`, and that
URL is the whole submission pointer: it names the X post that carries
the meme, so judges and tooling can go straight from this repo to the
post being judged.

Right now the URL is a placeholder — it points at status id
`0000000000000000000` under the `@kizzyriv` account — because the real
post does not exist yet. Once the meme is actually posted on X, only
that status id needs to be swapped for the real one; nothing else in
the repo changes.

## Running the program

`main.ts` is a plain Node 22 script (standard library only) that
copies `POST.json` from the bot directory into the output directory,
byte for byte. It prints nothing when it succeeds, and it exits with
code 1 and a message on stderr if `POST.json` is missing.

To try it locally from this folder:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That leaves a copy at `out/POST.json`. Without the environment
variables, the program defaults to reading from `/bot` and writing
to `/output`, which is the layout used when make.fun runs it.
