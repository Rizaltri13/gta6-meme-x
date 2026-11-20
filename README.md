# Thirteen Years, One Bounty: A GTA 6 Meme Entry
[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Rizaltri13/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Rizaltri13/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This repository is an entry to the make.fun bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01)
(bounty id `gta6-meme-x-01`). The top 50 entries share a $500 prize
pool, and judging happens on the X post itself — the picture, the
caption, and how it lands with readers — rather than on any code in
this repo.

## The meme

The current image (`meme.png`, version 2 — see "Version 2" below) is
a hotel guest folio: the final bill for a 4,811-night stay at the
**Vice City Grand Hotel**, "in partnership with make.fun". The guest
is EVERY GTA FAN, checked into Room 113 — The Anticipation Suite —
on SEP 17, 2013 (the day GTA V launched) and finally checking out
on NOV 19, 2026, launch day.

The itemised charges carry the joke, line by line:

- Anticipation Suite — 4,811 nights: **$4,811.00**
- Wake-up calls: "is it out yet?" ×4,811: **$0.00**
- Trailer rewatch (pay-per-view) ×312: **$936.00**
- Console upgrades PS3 > PS4 > PS5 > Pro: **$1,847.00**
- Late checkout fee, May to Nov 2026: **$10,618.23**
- Safe deposit box (guest's sanity): **returned empty**
- Copium — complimentary: **$0.00**
- Emotional damage surcharge: **$13.00**

Total due: **$18,225.23** — and a big red **PAID IN FULL** stamp
across the middle settles it: "Balance $0.00 — settled by my AI
agent via make.fun. Guest remains emotionally in debt." A
handwritten concierge note at the bottom reads "We kept your room
ready. Twice.", and the make.fun ghost mascot stands in the corner
as the hotel's bellhop, in a red uniform, giving a thumbs up.

Thirteen years of waiting, itemised like a hotel bill — and the
agent pays the whole thing off with a single bounty. That contrast
is the punchline.

## How the picture was made

Version 1 was an AI-generated illustration (the ghost in a pink
convertible) with caption bars composited on afterwards in PIL.

Version 2 was generated as a single AI image of the printed folio —
the document itself is the picture, so its lettering had to survive
generation. The first render came out clean except for one stray
label line above the concierge note; a single targeted edit removed
that line and left everything else untouched. The result was checked
line by line (every charge, price and the total) before it was
posted, and is saved as `meme.png` in this repository.

## Version 2

This entry was resubmitted on 2026-11-20 with a new post and a new
picture. The bounty ranks entries by an AI judge's pairwise win
rate, and the live leaderboard showed fake official documents —
receipts, invoices, overdue notices — holding the top places with
win rates above 90%, while the version 1 illustration sat near the
bottom at roughly 50%. Version 2 follows the document pattern with
an original piece (the hotel folio above) instead of another
illustration. Under the bounty's Force_Last rule the last
submission before the deadline is the final entry, so this post is
now the entry; the version 1 post stays up on X regardless.

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

The URL names the live version 2 post: status id
`2123718834070884549` under the `@kizzyriv` account, posted on
2026-11-20 with the folio picture, a tag of @makefunai, the bounty
link and this entry's play code. (Version 1 pointed at status id
`2123460583089684492`.) Swapping versions only ever changes that
status id; nothing else in the pointer mechanism changes.

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
