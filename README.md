# Dr Nteta Skin App

Clinic skin app for **Dr Leslie Nteta** (Pretoria Central & Menlyn/Brooklyn).

Single-file clinical UI (Montserrat + Open Sans · blue `#1B3F9E` · cyan `#00AEEF`) with Kind2Skin / Pimplex / Shavrex shop, skin scan, consult booking, AM/PM routine, and **Body · POINT** procedure quotes.

**Read this first if you are a Grok bot:** [`GROK_BOT_HANDOFF.md`](GROK_BOT_HANDOFF.md) · Issue [#1](https://github.com/appinnovationmc-stack/dr-nteta-skin-app/issues/1)

## Live entry

- **App:** [`DrNtetaSkinApp.html`](DrNtetaSkinApp.html) — current working single-file app
- **`index.html`** redirects to `DrNtetaSkinApp.html` for Vercel / static hosting
- **Baseline UI:** [`originals/DrNtetaSkinApp-2.html`](originals/DrNtetaSkinApp-2.html) — source brand baseline (do not restyle away from blue/cyan)

Older split files (`styles.css`, `app.js`, `screens.js`) are a previous gold/dark phone-shell prototype and are **not** the live UI.

## Screens

| Screen | What it does |
|---|---|
| Splash | Brand mark · Get Started |
| Home | Concerns, K2S range, combo, POINT card, Dr Nteta strip |
| Scan | Live `getUserMedia` preview when available + concern shortcuts → results |
| Results | Condition mapping, product recs, consult nudge |
| Shop | Kind2Skin / Pimplex / Shavrex + combo R300 (was R500) |
| Consult | Services & locations · WhatsApp |
| Book | Name, phone, location, procedure/notes · toast + WhatsApp deep link |
| Routine | AM / PM steps · 7-day streak |
| POINT | SVG body map → zone procedures → quote card (book / WhatsApp) |

## Brands & contact

- **Kind2Skin** — Cream Ultra R96 · Ointment R80
- **Pimplex** — Cream R84,95 · Clarifying Cleanser R69,95
- **Shavrex** — Bump Solution Ultra R69,56
- Combo: K2S Ointment + Cream Ultra **R300** (was R500)
- Dr Leslie Nteta · +27 12 320 7901 · [WhatsApp](https://wa.me/27123207901)

## POINT desks

- Face toxin / peels / medical derm → **Dr Nteta desk**
- Lipo / tummy tuck / BBL / facelift → **Pretoria plastic desk**

Quotes are **estimates**, not invoices. Keep the medical disclaimer.

## Deploy

Static hosting (Vercel). Camera requires HTTPS or localhost.

```bash
git clone https://github.com/appinnovationmc-stack/dr-nteta-skin-app.git
open DrNtetaSkinApp.html
```

Owner: Maobane Tebogo Chikane
