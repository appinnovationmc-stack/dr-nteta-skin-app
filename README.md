# Dr Nteta Skin App

Interactive prototype for **Dr Leslie Nteta** — dermatologist in Pretoria.

Your dermatologist, in your pocket. Shop Kind2Skin, Pimplex and Shavrex, run a 3-question skin check, and book a consult at Pretoria Central or Menlyn.

## Open it

```bash
git clone https://github.com/appinnovationmc-stack/dr-nteta-skin-app.git
open index.html
```

Or just open `index.html` in a browser. The UI is a 375×812 phone shell.

## Screens

| Screen | What it does |
|---|---|
| Splash | Brand mark, Get Started / Sign In |
| Home | Concerns, K2S range, combo offer, Dr Nteta strip |
| Checker | 3-question quiz → condition results |
| Results | Causes, avoid list, product recs, consult nudge |
| Shop | Filter by Kind2Skin / Pimplex / Shavrex + cart |
| Consult | Medical & cosmetic services, two Pretoria locations |
| Routine | AM / PM steps with 7-day streak |

## Brands

- **Kind2Skin** — Cream Ultra (R96), Ointment Base (R80)
- **Pimplex** — Cream 50ml (R84,95), Clarifying Cleanser (R69,95)
- **Shavrex** — Bump Solution Ultra (R69,56)
- Combo: K2S Ointment + Cream Ultra at R300 (was R500)

## Status

Front-end prototype. Cart, booking and auth are local / toast-only. Not wired to payments or a practice management system yet.

## Next

- Persist cart and quiz results
- Real booking calendar for both rooms
- Paystack checkout for the K2S range
- Capacitor wrap for Play Store / App Store
