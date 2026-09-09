# HANDOFF — Dr Nteta Skin App + POINT

You are taking over this project. Do not redesign the brand. Do not start a new visual system.

## Owner
Maobane Tebogo Chikane · Pretoria · SuperGrok

## Source of truth (in this order)
1. **Working app:** `DrNtetaSkinApp.html`
2. **User’s latest original UI:** `originals/DrNtetaSkinApp-2.html`
   - Montserrat + Open Sans
   - Blue `#1B3F9E` · Cyan `#00AEEF`
   - Screens: splash, home, scan, results, shop, consult, book, routine
3. Ignore older gold/ink (`DrNtetaSkinApp_1.html`) and cream/paper experiments unless the user asks.

## Product
Clinic skin app for Dr Leslie Nteta (Pretoria Central & Brooklyn).
- Scan a skin concern → Kind2Skin / Pimplex / Shavrex + consult nudge
- Shop, cart, combo
- Book a consult
- 7-day AM/PM routine

**POINT is an add-on, not the whole app.**
User points at a body zone → real procedure name, SA price band, desk routing:
- Skin / toxin / peel → Dr Nteta desk
- Lipo / tuck / BBL / lift → Pretoria plastic desk
Then fill the existing book form / WhatsApp +27 12 320 7901.

## Already in the working HTML
- All original screens from file 2
- Home POINT card + Body · POINT pill
- `s-point` figure map, `s-pzone` procedure cards
- Live getUserMedia on the existing Scan preview
- Capture still runs original `runScan()` analysis
- iOS-lite: frosted tab bar, safe areas, full-screen under 520px
- Nav still: Home · Scan · Shop · Consult · Routine

## Hard rules
- Do not replace Montserrat / Open Sans / blue-cyan.
- Do not invent a dark-gold glass app or a cream paper app.
- Do not drop splash, shop, consult, book, or routine.
- Camera needs HTTPS or localhost.
- Quotes are estimates, not invoices. Keep the medical disclaimer.

## Next work
1. Keep file 2 look pixel-faithful while finishing POINT quote → WhatsApp / book.
2. Split only if deploy needs it: index.html + css/ + js/ — same UI.
3. Deploy to Vercel (GitHub user `appinnovationmc-stack`).
4. Optional later: Capacitor, Paystack cart, quote persistence.

## Do not
- Rebuild the UI from scratch
- Change the clinic into a generic AI body-mod app
- Argue about older attachments; file 2 won
