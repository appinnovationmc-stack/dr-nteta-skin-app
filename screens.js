function nav(active){
  const svgs={
    home:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    checker:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    shop:'<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>',
    consult:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    routine:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
  };
  return `<div class="bnav">${['home','checker','shop','consult','routine'].map(id=>{
    const label=id[0].toUpperCase()+id.slice(1);
    const shop = id==='shop'
      ? `<div class="nav-icon-wrap"><svg viewBox="0 0 24 24" stroke-width="1.5">${svgs[id]}</svg><span class="badge">0</span></div>`
      : `<svg viewBox="0 0 24 24" stroke-width="1.5">${svgs[id]}</svg>`;
    return `<button class="bnav-item${id===active?' on':''}" onclick="go('${id}')">${shop}<span>${label}</span></button>`;
  }).join('')}</div>`;
}

document.getElementById('s-home').innerHTML=`
  <div class="scroll">
    <div class="home-hero">
      <div class="home-hero-glow"></div>
      <div class="t-eyebrow" style="margin-bottom:12px">Dr Nteta Skin App</div>
      <div class="t-display" style="font-size:28px">Find the Perfect<br>Solution for Your Skin</div>
      <div class="accent-rule"></div>
      <div class="t-body">Answer a few questions and we'll recommend the right products — and whether you need to see Dr Nteta.</div>
      <div class="home-search" onclick="go('checker')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Describe your skin concern…</span>
      </div>
    </div>
    <div class="section-header"><span class="t-eyebrow">Shop by Concern</span><button class="btn-ghost" onclick="go('shop')">View all →</button></div>
    <div class="concern-scroll">
      <div class="concern-pill" onclick="doResults('dry')"><span style="font-size:20px">💧</span><div class="concern-pill-label">Dryness &amp; Eczema</div><div class="concern-pill-count">2 products</div></div>
      <div class="concern-pill" onclick="doResults('acne')"><span style="font-size:20px">◉</span><div class="concern-pill-label">Acne &amp; Blemishes</div><div class="concern-pill-count">2 products</div></div>
      <div class="concern-pill" onclick="doResults('razor')"><span style="font-size:20px">✦</span><div class="concern-pill-label">Razor Bumps</div><div class="concern-pill-count">1 product</div></div>
      <div class="concern-pill" onclick="doResults('pigment')"><span style="font-size:20px">◈</span><div class="concern-pill-label">Hyperpigmentation</div><div class="concern-pill-count">1 product</div></div>
    </div>
    <div class="section-header" style="margin-top:8px"><span class="t-eyebrow">K2S Range — Born for SA Glow</span></div>
    <div class="products-scroll">
      <div class="prod-mini" onclick="go('shop')"><div class="prod-mini-img">🧴</div><div class="prod-mini-body"><div class="prod-mini-brand">Kind2Skin</div><div class="prod-mini-name">Cream Ultra</div><div class="prod-mini-price">R96,00</div></div></div>
      <div class="prod-mini" onclick="go('shop')"><div class="prod-mini-img">🫙</div><div class="prod-mini-body"><div class="prod-mini-brand">Kind2Skin</div><div class="prod-mini-name">Ointment Base</div><div class="prod-mini-price">R80,00</div></div></div>
      <div class="prod-mini" onclick="go('shop')"><div class="prod-mini-img">💊</div><div class="prod-mini-body"><div class="prod-mini-brand">Pimplex</div><div class="prod-mini-name">Cream 50ml</div><div class="prod-mini-price">R84,95</div></div></div>
      <div class="prod-mini" onclick="go('shop')"><div class="prod-mini-img">🧼</div><div class="prod-mini-body"><div class="prod-mini-brand">Pimplex</div><div class="prod-mini-name">Clarifying Cleanser</div><div class="prod-mini-price">R69,95</div></div></div>
      <div class="prod-mini" onclick="go('shop')"><div class="prod-mini-img">🪒</div><div class="prod-mini-body"><div class="prod-mini-brand">Shavrex</div><div class="prod-mini-name">Bump Solution Ultra</div><div class="prod-mini-price">R69,56</div></div></div>
    </div>
    <div class="home-banner" onclick="go('shop')" style="margin-top:24px">
      <div class="home-banner-glow"></div>
      <div class="home-banner-tag">Exclusive Combo — Save 40%</div>
      <div class="t-display-sm" style="margin-bottom:6px">Grab our exclusive<br>skincare combo before it's gone!</div>
      <div class="t-body" style="margin-bottom:16px">K2S Ointment &amp; Cream Ultra — <span style="color:var(--accent-lt)">R300</span> <span style="text-decoration:line-through;color:var(--white40)">R500</span></div>
      <button class="btn-primary" style="font-size:11px;padding:11px 22px">SHOP NOW</button>
    </div>
    <div class="section-header" style="margin-top:8px"><span class="t-eyebrow">Your Trusted Dermatologist</span></div>
    <div class="doctor-strip" onclick="go('consult')">
      <div class="doc-avatar">LN</div>
      <div><div class="t-eyebrow" style="margin-bottom:4px">30 Years Experience</div><div class="t-display-xs" style="font-size:16px">Dr Leslie Nteta</div><div class="t-small" style="margin-top:2px">Dermatologist · Pretoria</div></div>
      <div class="doc-strip-cta">Book →</div>
    </div>
  </div>${nav('home')}`;

document.getElementById('s-checker').innerHTML=`
  <div class="screen-top">
    <div class="back-row"><button class="back-btn" onclick="go('home')"><svg viewBox="0 0 24 24" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button><div class="t-eyebrow">Skin Checker</div></div>
    <div class="t-display-sm">Find the perfect<br>solution for your skin</div>
  </div>
  <div class="scroll">
    <div class="quiz-intro" id="quiz-intro">
      <div class="intro-icon">◈</div>
      <div class="t-eyebrow" style="margin-bottom:10px">Personalised Skin Analysis</div>
      <div class="t-display-xs" style="margin-bottom:8px">What's your skin<br>telling you?</div>
      <div class="accent-rule"></div>
      <div class="t-body" style="margin-bottom:28px">Answer 3 quick questions. We'll recommend the right products and tell you if you need to see Dr Nteta.</div>
      <button class="btn-primary" style="width:100%" onclick="startQuiz()">Start Skin Check</button>
    </div>
    <div id="quiz-wrap" style="display:none"></div>
  </div>${nav('checker')}`;

document.getElementById('s-results').insertAdjacentHTML('beforeend', nav('checker'));

document.getElementById('s-shop').innerHTML=`
  <div class="screen-top" style="padding-bottom:0">
    <div class="t-eyebrow" style="margin-bottom:10px">Shop K2S · Pimplex · Shavrex</div>
    <div class="t-display-sm" style="font-size:22px">K2S Range — Born for SA Glow.</div>
  </div>
  <div class="filter-row">
    <button class="f-chip on" onclick="filt(this,'all')">All</button>
    <button class="f-chip" onclick="filt(this,'k2s')">Kind2Skin</button>
    <button class="f-chip" onclick="filt(this,'pimplex')">Pimplex</button>
    <button class="f-chip" onclick="filt(this,'shavrex')">Shavrex</button>
  </div>
  <div class="scroll"><div class="shop-list" id="shop-list">
    <div class="shop-card" data-b="k2s"><div class="shop-img">🧴</div><div class="shop-body"><div class="shop-brand">Kind2Skin</div><div class="shop-name">Cream Ultra</div><div class="shop-tags"><span class="tag tag-sage">Dry Skin</span><span class="tag tag-sage">Eczema</span></div><div class="shop-desc">400g extra-thick moisturizer for dry, sensitive skin and eczema relief.</div><div class="shop-foot"><div class="t-price">R96,00</div><button class="shop-add" onclick="addCart(event)">+</button></div></div></div>
    <div class="shop-card" data-b="k2s"><div class="shop-img">🫙</div><div class="shop-body"><div class="shop-brand">Kind2Skin</div><div class="shop-name">Ointment Base</div><div class="shop-tags"><span class="tag tag-sage">Dry Skin</span><span class="tag tag-sage">Eczema</span></div><div class="shop-desc">250g ointment delivers deep hydration for dry, eczema-prone skin.</div><div class="shop-foot"><div class="t-price">R80,00</div><button class="shop-add" onclick="addCart(event)">+</button></div></div></div>
    <div class="shop-card" data-b="pimplex"><div class="shop-img">💊</div><div class="shop-body"><div class="shop-brand">Pimplex</div><div class="shop-name">Pimplex Cream 50ml</div><div class="shop-tags"><span class="tag tag-coral">Acne</span><span class="tag tag-coral">Blackheads</span></div><div class="shop-desc">Zap Blemishes Overnight. Targeted treatment for pimples and blackheads.</div><div class="shop-foot"><div class="t-price">R84,95</div><button class="shop-add" onclick="addCart(event)">+</button></div></div></div>
    <div class="shop-card" data-b="pimplex"><div class="shop-img">🧼</div><div class="shop-body"><div class="shop-brand">Pimplex</div><div class="shop-name">Clarifying Cleanser 125ml</div><div class="shop-tags"><span class="tag tag-coral">Acne</span><span class="tag tag-white">Oily Skin</span></div><div class="shop-desc">Wash Away the Chaos. Gentle oil-balance for acne-prone skin.</div><div class="shop-foot"><div class="t-price">R69,95</div><button class="shop-add" onclick="addCart(event)">+</button></div></div></div>
    <div class="shop-card" data-b="shavrex"><div class="shop-img">🪒</div><div class="shop-body"><div class="shop-brand">Shavrex</div><div class="shop-name">Bump Solution Ultra 30ml</div><div class="shop-tags"><span class="tag tag-blue">Razor Bumps</span><span class="tag tag-blue">Ingrown Hair</span></div><div class="shop-desc">Smooth Shaves, Zero Drama. Antiseptic solution for razor bumps.</div><div class="shop-foot"><div class="t-price">R69,56</div><button class="shop-add" onclick="addCart(event)">+</button></div></div></div>
  </div></div>${nav('shop')}`;

document.getElementById('s-consult').innerHTML=`
  <div class="scroll">
    <div class="doc-hero">
      <div class="doc-hero-glow"></div>
      <div class="t-eyebrow" style="margin-bottom:14px">Your Trusted Dermatologist in Pretoria</div>
      <div class="doc-profile-row">
        <div class="doc-avatar-lg">LN</div>
        <div><div class="t-display-xs">Dr Leslie Nteta</div><div class="t-small" style="margin-top:4px">MBBCh · Dermatologist</div><div class="t-small">Pretoria Central &amp; Menlyn</div></div>
      </div>
      <div class="t-body" style="margin-bottom:16px">Dr. Nteta brings a compassionate approach to skin health, offering medical and aesthetic dermatology services.</div>
      <div class="doc-stats"><div><div class="doc-stat-num">30+</div><div class="doc-stat-label">Years Exp.</div></div><div><div class="doc-stat-num">2</div><div class="doc-stat-label">Locations</div></div><div><div class="doc-stat-num">4.9 ★</div><div class="doc-stat-label">Rating</div></div></div>
    </div>
    <div class="section-header"><span class="t-eyebrow">Medical Dermatology</span></div>
    <div class="services-grid">
      <div class="svc-card" onclick="toast('Acne Treatment selected')"><div class="svc-icon">◉</div><div class="svc-name">Acne Treatment</div><div class="svc-desc">Personalised — laser therapy and medications</div></div>
      <div class="svc-card" onclick="toast('Eczema selected')"><div class="svc-icon">◈</div><div class="svc-name">Eczema &amp; Psoriasis</div><div class="svc-desc">Advanced chronic skin condition management</div></div>
      <div class="svc-card" onclick="toast('Hyperpigmentation selected')"><div class="svc-icon">✦</div><div class="svc-name">Hyperpigmentation</div><div class="svc-desc">Melasma, uneven tone and pigmentation</div></div>
      <div class="svc-card" onclick="toast('Skin Tags Removal selected')"><div class="svc-icon">✂</div><div class="svc-name">Skin Tags Removal</div><div class="svc-desc">Cryo, excision, hyfrecation</div></div>
    </div>
    <div class="section-header"><span class="t-eyebrow">Cosmetic Dermatology</span></div>
    <div class="services-grid">
      <div class="svc-card" onclick="toast('Chemical Peels selected')"><div class="svc-icon">◇</div><div class="svc-name">Chemical Peels</div><div class="svc-desc">Customised texture and tone improvement</div></div>
      <div class="svc-card" onclick="toast('Microneedling selected')"><div class="svc-icon">⊕</div><div class="svc-name">Microneedling</div><div class="svc-desc">Collagen-boosting scar and texture treatment</div></div>
      <div class="svc-card" onclick="toast('Mesotherapy selected')"><div class="svc-icon">◎</div><div class="svc-name">Mesotherapy</div><div class="svc-desc">Nourishing compounds for a refreshed glow</div></div>
      <div class="svc-card" onclick="toast('Allergy Testing selected')"><div class="svc-icon">⬡</div><div class="svc-name">Allergy Testing</div><div class="svc-desc">Help choosing products for your skin</div></div>
    </div>
    <div class="section-header"><span class="t-eyebrow">Convenient Locations in Pretoria</span></div>
    <div class="location-row" onclick="toast('Pretoria Central selected')"><div class="loc-dot">📍</div><div><div style="font-size:14px;font-weight:500;color:var(--white)">Pretoria Central</div><div class="t-small">+27 12 320 7901 · Mon–Fri</div></div><div class="loc-chevron">›</div></div>
    <div class="location-row" onclick="toast('Menlyn selected')"><div class="loc-dot">📍</div><div><div style="font-size:14px;font-weight:500;color:var(--white)">Menlyn, Pretoria</div><div class="t-small">+27 12 320 7901 · Mon–Sat</div></div><div class="loc-chevron">›</div></div>
    <div style="padding:20px 0 4px"><button class="book-btn" onclick="toast('Booking request sent to Dr Nteta!')">BOOK YOUR CONSULTATION</button></div>
  </div>${nav('consult')}`;

document.getElementById('s-routine').innerHTML=`
  <div class="screen-top">
    <div class="t-eyebrow" style="margin-bottom:10px">My Skin Routine</div>
    <div class="t-display-sm" style="font-size:22px">Recommended by<br>Dr Nteta</div>
  </div>
  <div class="scroll">
    <div class="streak"><div style="font-size:28px">◈</div><div><div style="font-family:'Cormorant Garamond',serif;font-size:26px;color:var(--accent-lt);font-weight:500">7 Day Streak</div><div class="t-small">Keep going — consistency is everything</div></div></div>
    <div class="time-toggle">
      <button class="t-tab on" id="tab-am" onclick="switchTab('am')">Morning</button>
      <button class="t-tab" id="tab-pm" onclick="switchTab('pm')">Night</button>
    </div>
    <div class="step-list" id="steps-am">
      <div class="step-row"><div class="step-num">I</div><div class="step-card"><div class="step-label">Cleanse</div><div class="step-product">Pimplex Clarifying Cleanser</div><div class="step-instruction">Apply to damp face, massage gently for 30 seconds.</div><div class="step-duration">1 min</div></div></div>
      <div class="step-row"><div class="step-num">II</div><div class="step-card"><div class="step-label">Treat Spots</div><div class="step-product">Pimplex Cream</div><div class="step-instruction">Apply a thin layer only on blemishes or dark spots.</div><div class="step-duration">30 sec</div></div></div>
      <div class="step-row"><div class="step-num">III</div><div class="step-card"><div class="step-label">Moisturise</div><div class="step-product">Kind2Skin Cream Ultra</div><div class="step-instruction">Apply generously to face and neck.</div><div class="step-duration">1 min</div></div></div>
      <div class="step-row"><div class="step-num">IV</div><div class="step-card"><div class="step-label">Protect</div><div class="step-product">SPF 30+ Sunscreen</div><div class="step-instruction">Always apply SPF after moisturiser.</div><div class="step-duration">30 sec</div></div></div>
    </div>
    <div class="step-list" id="steps-pm" style="display:none">
      <div class="step-row"><div class="step-num">I</div><div class="step-card"><div class="step-label">Double Cleanse</div><div class="step-product">Pimplex Clarifying Cleanser</div><div class="step-instruction">Remove makeup and sunscreen first, then cleanse.</div><div class="step-duration">2 min</div></div></div>
      <div class="step-row"><div class="step-num">II</div><div class="step-card"><div class="step-label">Active Treatment</div><div class="step-product">Pimplex Cream</div><div class="step-instruction">Night time is ideal for glycolic acid. Start 2–3 nights per week.</div><div class="step-duration">1 min</div></div></div>
      <div class="step-row"><div class="step-num">III</div><div class="step-card"><div class="step-label">Deep Moisture</div><div class="step-product">Kind2Skin Ointment Base</div><div class="step-instruction">Lock in moisture for 8 hours of deep repair.</div><div class="step-duration">1 min</div></div></div>
      <div class="step-row"><div class="step-num">IV</div><div class="step-card"><div class="step-label">Post-Shave Care</div><div class="step-product">Shavrex Bump Solution Ultra</div><div class="step-instruction">Apply to shaved areas at night.</div><div class="step-duration">30 sec</div></div></div>
    </div>
    <div style="padding:20px 24px 0">
      <div class="nudge" onclick="go('consult')">
        <div class="nudge-alert">Personalised Routine</div>
        <div class="t-display-xs" style="font-size:17px;margin-bottom:6px">Ready to Transform Your Skin?</div>
        <div class="t-body" style="margin-bottom:14px">Dr. Nteta provides personalised assessments tailored to your unique skin type.</div>
        <button class="btn-outline" style="font-size:11px;padding:11px 22px">BOOK WITH DR NTETA</button>
      </div>
    </div>
  </div>${nav('routine')}`;
