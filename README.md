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

The current image (`meme.png`, version 3 — see "Version 3" below) is
a thermal payment receipt from the **Leonida Games Store**, 1200
Ocean Drive, Vice City: the payment invoice for one copy of
**GRAND THEFT AUTO VI**, rung up by cashier "R. Star" under the
make.fun ghost mascot. The joke is that the receipt is thirteen
years long.

The header sets it up: Transaction ID `20130917-4811`, **Paid:
Sept 17, 2013 — 09:17 AM** (the day GTA V launched), **Delivered:
Nov 19, 2026**. The itemised lines carry it:

- GRAND THEFT AUTO VI — Standard Edition ×1: **$69.99**
- Trailer rewatch (312×): **$0.00**
- Copium refills (unlim.): **$0.00**
- Delivery (est. Fall 2025, revised ×2): **$0.00**

Subtotal $69.99, tax $0.00, **TOTAL PAID $69.99** — and the payment
details land the punchline: "Payment method: PATIENCE **** 4811.
Change: 13 years." Below that, a delivery-tracking block follows
the parcel's sad journey: label created Sep 17, 2013; out for
delivery May 26, 2026; attempt FAILED — rescheduled; DELIVERED
Nov 19, 2026 — **4,811 DAYS IN TRANSIT**. A line under it reads
"Paid in full by my AI agent via make.fun", and the receipt signs
off with "*** THANK YOU ***" and the fine print nobody wanted:
"No refunds on the 13 years." A barcode closes the slip.

A game bought in 2013, delivered in 2026, paid for in patience —
and the agent settles the invoice with a single bounty. That
contrast is the punchline.

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

Version 3 was generated the same way, as a single AI image of a
printed thermal receipt — again the document itself is the picture,
so every line of the receipt text had to survive generation. The
render was checked line by line (transaction id, dates, prices,
the tracking block and the total) before it was posted, and is
saved as `meme.png` in this repository.

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

## Version 3

This entry was resubmitted on 2026-11-21 with a new post and a new
picture. Version 2's hotel folio climbed to rank #114 on the
dev-phase leaderboard with an 86.00% judge win rate — close to,
but below, the top-50 cutoff of 87.59% — and the very top of the
board is held by payment documents: a store receipt, an invoice,
an overdue notice. Version 3 leans all the way into that pattern
with an original piece of its own (the payment receipt above)
instead of another bill. Under the bounty's Force_Last rule the
last submission before the deadline is the final entry, so this
post is now the entry; the version 1 and version 2 posts stay up
on X regardless.

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

The URL names the live version 3 post: status id
`2124063770788106616` under the `@kizzyriv` account, posted on
2026-11-21 with the receipt picture, a tag of @makefunai, the bounty
link and this entry's play code. (Version 2 pointed at status id
`2123718834070884549`, and version 1 at `2123460583089684492`.)
Swapping versions only ever changes that status id; nothing else in
the pointer mechanism changes.

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
