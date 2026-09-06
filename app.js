// ── Nav ──
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('s-'+id).classList.add('active');
}

// ── Toast ──
let tt;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(tt);tt=setTimeout(()=>el.classList.remove('show'),2600);
}

// ── Cart ──
let cart=0;
function addCart(e){
  e.stopPropagation();cart++;
  document.querySelectorAll('.badge').forEach(b=>{b.textContent=cart;b.classList.add('on');});
  toast('Added to cart — '+cart+' item'+(cart>1?'s':''));
}

// ── Shop filter ──
function filt(btn,brand){
  document.querySelectorAll('.f-chip').forEach(c=>c.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.shop-card').forEach(c=>{
    c.style.display=(brand==='all'||c.dataset.b===brand)?'flex':'none';
  });
}

// ── Routine tabs ──
function switchTab(t){
  document.getElementById('tab-am').classList.toggle('on',t==='am');
  document.getElementById('tab-pm').classList.toggle('on',t==='pm');
  document.getElementById('steps-am').style.display=t==='am'?'block':'none';
  document.getElementById('steps-pm').style.display=t==='pm'?'block':'none';
}

// ── Quiz ──
const QUIZ=[
  {q:'What is your main skin concern right now?',opts:[
    {icon:'💧',main:'Dryness & Eczema',sub:'Tight, rough or itchy skin',val:'dry'},
    {icon:'◉',main:'Acne & Blemishes',sub:'Pimples, blackheads, breakouts',val:'acne'},
    {icon:'◈',main:'Sensitive & Inflamed',sub:'Redness, eczema-prone patches',val:'eczema'},
    {icon:'✦',main:'Razor Bumps',sub:'Post-shave irritation or ingrowns',val:'razor'},
  ]},
  {q:'How long have you had this concern?',opts:[
    {icon:'▹',main:'Just started',sub:'Less than a week',val:'new'},
    {icon:'▹',main:'A few weeks',sub:'Coming and going',val:'weeks'},
    {icon:'▹',main:'Several months',sub:'Persistent issue',val:'months'},
    {icon:'▹',main:'Years',sub:'Chronic condition',val:'chronic'},
  ]},
  {q:'Have you tried any products before?',opts:[
    {icon:'▹',main:'No, first time',sub:'Looking for a starting point',val:'none'},
    {icon:'▹',main:'Pharmacy brands',sub:'Over-the-counter tried',val:'otc'},
    {icon:'▹',main:'Doctor-prescribed',sub:'Had prescription treatment',val:'rx'},
    {icon:'▹',main:'Natural remedies',sub:'Home or herbal solutions',val:'natural'},
  ]}
];

let step=0,picks=[];

function startQuiz(){
  document.getElementById('quiz-intro').style.display='none';
  document.getElementById('quiz-wrap').style.display='block';
  step=0;picks=[];renderQ();
}

function renderQ(){
  const s=QUIZ[step];
  const pct=Math.round((step/QUIZ.length)*100);
  let html=`
    <div class="quiz-prog">
      <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
      <span class="t-small">${step+1} of ${QUIZ.length}</span>
    </div>
    <div class="quiz-wrap">
      <div class="quiz-q">${s.q}</div>
  `;
  s.opts.forEach(o=>{
    html+=`<button class="q-option" onclick="pick(this,'${o.val}')">
      <div class="q-opt-icon">${o.icon}</div>
      <div><div class="q-opt-main">${o.main}</div><div class="q-opt-sub">${o.sub}</div></div>
    </button>`;
  });
  html+=`<button class="q-next" id="qnext" onclick="nextQ()">CONTINUE →</button></div>`;
  document.getElementById('quiz-wrap').innerHTML=html;
}

function pick(el,val){
  document.querySelectorAll('.q-option').forEach(o=>o.classList.remove('picked'));
  el.classList.add('picked');
  picks[step]=val;
  document.getElementById('qnext').classList.add('on');
}

function nextQ(){
  if(!picks[step])return;
  step++;
  if(step>=QUIZ.length){doResults(picks[0]);}
  else{renderQ();}
}

// ── Results ──
const DATA={
  dry:{
    condition:'Dryness & Eczema',eyebrow:'Skin Analysis — Hydration',
    desc:'Your skin lacks moisture and may have a weakened skin barrier. This is very common in South Africa\'s dry inland climate — especially in Pretoria and on the Highveld.',
    causes:'Hot showers, harsh soaps, dry Highveld air, dehydration, or an underlying condition like eczema.',
    avoid:'Alcohol-based products, very hot water, and fragranced soaps that strip your skin\'s natural oils.',
    tip:'Moisturise immediately after washing. Use a thick ointment at night for deep overnight repair.',
    severe:false,
    prods:[
      {emoji:'🧴',brand:'Kind2Skin',name:'Cream Ultra',price:'R96,00',why:'Its rich formula is clinically designed for dry and eczema-prone skin — strengthens the barrier and delivers immediate hydration.'},
      {emoji:'🫙',brand:'Kind2Skin',name:'Ointment Base',price:'R80,00',why:'Ointments seal in moisture 3× more effectively than creams. Best applied at night for 8 hours of deep repair.'}
    ]
  },
  acne:{
    condition:'Acne & Blemishes',eyebrow:'Skin Analysis — Acne',
    desc:'Your skin is producing excess sebum which is clogging pores and causing breakouts. Revolutionizing acne skincare to empower every South African facing breakouts.',
    causes:'Hormonal changes, stress, diet high in sugar or dairy, heavy skincare products, or not cleansing properly.',
    avoid:'Heavy oil-based moisturisers, skipping cleansing, touching your face, and picking at pimples — this causes scarring and hyperpigmentation.',
    tip:'Cleanse morning and night. Apply Pimplex Cream only to spots. Use a lightweight SPF moisturiser daily.',
    severe:false,
    prods:[
      {emoji:'🧼',brand:'Pimplex',name:'Clarifying Cleanser',price:'R69,95',why:'Gentle oil-balance for acne-prone skin — built for SA\'s relentless sun and sweat. Fights acne at the source.'},
      {emoji:'💊',brand:'Pimplex',name:'Pimplex Cream',price:'R84,95',why:'Targeted treatment for pimples & blackheads. Glycolic acid exfoliates; kojic acid prevents the dark spots left behind.'}
    ]
  },
  eczema:{
    condition:'Sensitive & Eczema-Prone',eyebrow:'Skin Analysis — Eczema',
    desc:'Your skin is showing signs of eczema — an inflammatory condition causing dry, itchy, and sometimes cracked skin. Advanced treatment is available at Dr Nteta\'s practice.',
    causes:'Genetic predisposition, allergens, stress, certain soaps or detergents, environmental changes, or contact with irritants.',
    avoid:'Fragranced products, rough fabrics, very hot baths, stress triggers, and scratching — which worsens the inflammation cycle.',
    tip:'Moisturise multiple times daily. Apply ointment within 3 minutes of bathing to lock in moisture.',
    severe:true,
    prods:[
      {emoji:'🧴',brand:'Kind2Skin',name:'Cream Ultra',price:'R96,00',why:'Free from common irritants. Its barrier-repair formula soothes the itch-scratch cycle — designed for South African skin.'},
      {emoji:'🫙',brand:'Kind2Skin',name:'Ointment Base',price:'R80,00',why:'Ointments are the gold standard for eczema management — more effective than creams or lotions for barrier repair.'}
    ]
  },
  razor:{
    condition:'Razor Bumps',eyebrow:'Skin Analysis — Shaving Care',
    desc:'You are experiencing pseudofolliculitis barbae — razor bumps caused by curled hairs growing back into the skin. Smooth Shaves, Zero Drama is within reach.',
    causes:'Shaving too close, blunt blades, dry shaving, or shaving against the hair grain.',
    avoid:'Dry shaving, pressing too hard, multi-blade razors that cut below skin level, and alcohol-based aftershaves.',
    tip:'Apply Shavrex immediately after shaving. Keep skin clean and moisturised between shaves.',
    severe:false,
    prods:[
      {emoji:'🪒',brand:'Shavrex',name:'Bump Solution Ultra',price:'R69,56',why:'Antiseptic formula prevents the infection that makes bumps worse. Ingrowns gone after one use — locally crafted for SA skin.'}
    ]
  },
  pigment:{
    condition:'Hyperpigmentation',eyebrow:'Skin Analysis — Pigmentation',
    desc:'You have areas darker than your natural skin tone. Extremely common in darker skin tones and often caused by post-acne marks or sun damage in SA\'s climate.',
    causes:'Sun exposure, hormonal changes (melasma), post-inflammatory marks from acne or injury, and certain medications.',
    avoid:'Sun exposure without SPF, picking at spots (makes pigmentation worse), and harsh scrubbing of affected areas.',
    tip:'Use kojic acid products consistently. Wear SPF 30+ every single day — SA sun makes pigmentation significantly worse.',
    severe:true,
    prods:[
      {emoji:'💊',brand:'Pimplex',name:'Pimplex Cream',price:'R84,95',why:'Contains kojic acid — a proven skin-brightening ingredient. Consistent use visibly lightens dark spots over 4–8 weeks.'}
    ]
  }
};

function doResults(key){
  const d=DATA[key]||DATA.dry;
  let prodsHtml=d.prods.map(p=>`
    <div class="rec-card">
      <div class="rec-card-left">${p.emoji}</div>
      <div class="rec-card-body">
        <div class="rec-brand">${p.brand}</div>
        <div class="rec-name">${p.name}</div>
        <div class="rec-why">${p.why}</div>
        <div class="rec-footer">
          <div class="t-price">${p.price}</div>
          <button class="rec-add" onclick="addCart(event)">ADD TO CART</button>
        </div>
      </div>
    </div>
  `).join('');

  const nudge=d.severe?`
    <div class="nudge" onclick="go('consult')">
      <div class="nudge-alert">⬡ Professional Consultation Recommended</div>
      <div class="t-display-xs" style="font-size:17px;margin-bottom:8px">We recommend seeing Dr Nteta</div>
      <div class="t-body" style="margin-bottom:16px">This condition benefits from a proper diagnosis. Dr. Nteta offers comprehensive consultations to identify the root cause and provide an effective treatment plan.</div>
      <button class="btn-primary" style="font-size:11px;padding:11px 22px">BOOK CONSULTATION →</button>
    </div>
  `:`
    <div class="nudge" onclick="go('consult')">
      <div class="nudge-alert">◈ Professional Advice Available</div>
      <div class="t-display-xs" style="font-size:17px;margin-bottom:8px">Want a personalised plan?</div>
      <div class="t-body" style="margin-bottom:16px">If products don't improve your skin in 4 weeks, Dr Nteta can provide a comprehensive treatment plan tailored to your unique skin type.</div>
      <button class="btn-outline" style="font-size:11px;padding:11px 22px">BOOK WITH DR NTETA →</button>
    </div>
  `;

  document.getElementById('results-body').innerHTML=`
    <div class="results-hero">
      <div class="results-glow"></div>
      <button class="btn-ghost" style="margin-bottom:16px" onclick="go('checker')">← Back to Checker</button>
      <div class="t-eyebrow" style="margin-bottom:10px">${d.eyebrow}</div>
      <div class="t-display" style="font-size:26px;margin-bottom:8px">${d.condition}</div>
      <div class="accent-rule"></div>
      <div class="t-body">${d.desc}</div>
    </div>
    <div class="section-header" style="padding-top:24px"><span class="t-eyebrow">Understanding Your Skin</span></div>
    <div class="info-block">
      <div class="info-row"><div class="info-dot" style="margin-top:6px"></div><div><div class="t-small" style="margin-bottom:3px;letter-spacing:1px;text-transform:uppercase">Causes</div><div class="t-body" style="font-size:13px">${d.causes}</div></div></div>
      <div class="info-row"><div class="info-dot" style="background:var(--coral);margin-top:6px"></div><div><div class="t-small" style="margin-bottom:3px;letter-spacing:1px;text-transform:uppercase">What to Avoid</div><div class="t-body" style="font-size:13px">${d.avoid}</div></div></div>
      <div class="info-row"><div class="info-dot" style="background:var(--sage);margin-top:6px"></div><div><div class="t-small" style="margin-bottom:3px;letter-spacing:1px;text-transform:uppercase">Routine Tip</div><div class="t-body" style="font-size:13px">${d.tip}</div></div></div>
    </div>
    <div class="section-header"><span class="t-eyebrow">Recommended for You</span></div>
    ${prodsHtml}
    <div style="padding:0 0 4px">${nudge}</div>
  `;
  go('results');
}
