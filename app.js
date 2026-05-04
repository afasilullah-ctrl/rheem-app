// ===== RHEEM HVAC SERVICE REPORT APP =====

// State
let currentSection = 1;
const totalSections = 9;
let sitePhotos = []; // { category, dataUrl, name }
let selectedLat = null, selectedLng = null;
let signatureCtx = null, isDrawing = false;
let addedErrorCodes = [];
let currentErrorMatch = null;


// ===== LANGUAGE SYSTEM =====
let currentLang = 'en';

const TRANSLATIONS = {
  en: {
    // Progress steps
    step1:'Job Info', step2:'Unit Details', step3:'Refrigeration', step4:'Electrical',
    step5:'Airflow', step6:'Inspection', step7:'Photos', step8:'Faults', step9:'Summary',
    // Section 1
    s1title:'Job Information', s1sub:'Customer and site details',
    lblCustomer:'Customer Name', lblContact:'Contact Number',
    lblSite:'Site Location', lblSitePh:'Search address or click map to pin location',
    lblCity:'City', lblCityPh:'Auto-filled from GPS or enter manually',
    lblCountry:'Country', lblCountryPh:'Auto-filled from GPS or enter manually',
    lblDate:'Service Date', lblTech:'Technician Name', lblTechPh:'Engineer / Technician name',
    lblServiceType:'Type of Service Visit',
    stPM:'🔧 Preventive Maintenance', stComm:'⚙️ Commissioning',
    stTrouble:'🔍 Troubleshooting', stHealth:'✅ Routine Health Check', stWarranty:'🛡️ Warranty',
    btnGPS:'📍 Use GPS', btnNext:'Next', btnBack:'← Back',
    // Section 2
    s2title:'Unit Details', s2sub:'Brand, type and model selection',
    lblBrand:'Brand', lblUnitType:'Unit Type', lblOutdoor:'Outdoor Model',
    lblIndoor:'Indoor Model', lblSerial:'Serial Number', lblInstYear:'Installation Year',
    lblInstYearPh:'e.g. 2022',
    // Section 3
    s3title:'Refrigeration Parameters', s3sub:'R-410A system readings and calculations',
    // Section 9 action buttons
    btnPreview:'👁 Preview Report', btnPDF:'📄 Save as PDF', btnWA:'💬 WhatsApp',
    btnEmailRheem:'📧 Email Rheem', btnSubmit:'✅ Submit Report',
    // Fault jump
    jumpFault:'⚡ Jump to Fault Diagnosis',
    // Toast messages
    toastLoc:'Getting your location...', toastLocOK:'Location captured!',
    toastCityOK:'City & country auto-filled!', toastLocFail:'Could not get location. Please enter address manually.',
    toastFillCustomer:'Please fill in all required customer details',
    toastPickService:'Please select a service visit type',
    toastPickModel:'Please select brand, unit type and model',
    toastErrAdded:'Error code already added',
    toastStatus:'Please select overall system status',
    toastSummary:'Please enter work performed summary',
    toastSubmit:'✅ Report submitted! Generating PDF...',
  },
  ar: {
    // Progress steps
    step1:'بيانات الوظيفة', step2:'تفاصيل الوحدة', step3:'التبريد', step4:'الكهرباء',
    step5:'تدفق الهواء', step6:'الفحص', step7:'الصور', step8:'الأعطال', step9:'الملخص',
    // Section 1
    s1title:'معلومات الوظيفة', s1sub:'بيانات العميل والموقع',
    lblCustomer:'اسم العميل', lblContact:'رقم التواصل',
    lblSite:'موقع الموقع', lblSitePh:'ابحث عن العنوان أو انقر على الخريطة لتحديد الموقع',
    lblCity:'المدينة', lblCityPh:'تُملأ تلقائياً من GPS أو أدخلها يدوياً',
    lblCountry:'البلد', lblCountryPh:'تُملأ تلقائياً من GPS أو أدخلها يدوياً',
    lblDate:'تاريخ الخدمة', lblTech:'اسم الفني', lblTechPh:'اسم المهندس / الفني',
    lblServiceType:'نوع زيارة الخدمة',
    stPM:'🔧 الصيانة الوقائية', stComm:'⚙️ التشغيل والتسليم',
    stTrouble:'🔍 استكشاف الأعطال', stHealth:'✅ فحص صحة دوري', stWarranty:'🛡️ ضمان',
    btnGPS:'📍 استخدام GPS', btnNext:'التالي', btnBack:'→ رجوع',
    // Section 2
    s2title:'تفاصيل الوحدة', s2sub:'اختيار العلامة والنوع والموديل',
    lblBrand:'العلامة التجارية', lblUnitType:'نوع الوحدة', lblOutdoor:'موديل الوحدة الخارجية',
    lblIndoor:'موديل الوحدة الداخلية', lblSerial:'الرقم التسلسلي', lblInstYear:'سنة التركيب',
    lblInstYearPh:'مثال: 2022',
    // Section 3
    s3title:'معاملات التبريد', s3sub:'قراءات نظام R-410A والحسابات',
    // Section 9 action buttons
    btnPreview:'👁 معاينة التقرير', btnPDF:'📄 حفظ كـ PDF', btnWA:'💬 واتساب',
    btnEmailRheem:'📧 إرسال بريد ريم', btnSubmit:'✅ إرسال التقرير',
    // Fault jump
    jumpFault:'⚡ الانتقال لتشخيص الأعطال',
    // Toast messages
    toastLoc:'جارٍ تحديد موقعك...', toastLocOK:'تم تحديد الموقع!',
    toastCityOK:'تم ملء المدينة والبلد تلقائياً!', toastLocFail:'تعذّر تحديد الموقع. يرجى إدخال العنوان يدوياً.',
    toastFillCustomer:'يرجى ملء جميع بيانات العميل المطلوبة',
    toastPickService:'يرجى اختيار نوع زيارة الخدمة',
    toastPickModel:'يرجى اختيار العلامة والنوع والموديل',
    toastErrAdded:'كود الخطأ مُضاف مسبقاً',
    toastStatus:'يرجى اختيار حالة النظام الإجمالية',
    toastSummary:'يرجى إدخال ملخص الأعمال المنجزة',
    toastSubmit:'✅ تم إرسال التقرير! جارٍ إنشاء PDF...',
  }
};

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.en[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle('ar-mode', lang === 'ar');
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Update active button
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnAR').classList.toggle('active', lang === 'ar');
  
  // Update progress step labels
  const stepLabels = document.querySelectorAll('.step');
  stepLabels.forEach(s => {
    const n = s.dataset.step;
    const keyMap = {1:'step1',2:'step2',3:'step3',4:'step4',5:'step5',6:'step6',7:'step7',8:'step8',9:'step9'};
    const key = keyMap[n];
    if (key) {
      const num = s.querySelector('span');
      const numHtml = num ? num.outerHTML : '';
      s.innerHTML = numHtml + ' ' + t(key);
    }
  });

  // Update all data-en / data-ar elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'ar' ? (el.getAttribute('data-ar') || el.getAttribute('data-en')) : el.getAttribute('data-en');
  });

  // Update section headers and labels
  applyLabelTranslations(lang);
}

function applyLabelTranslations(lang) {
  const isAr = lang === 'ar';
  
  // Section 1
  const s1h = document.querySelector('.form-section[data-section="1"] h2');
  const s1p = document.querySelector('.form-section[data-section="1"] p');
  if(s1h) s1h.textContent = t('s1title');
  if(s1p) s1p.textContent = t('s1sub');
  
  // Field labels mapping: [labelText_en, inputId_or_null, placeholderKey]
  const labelMaps = [
    ['Customer Name', 'customerName', 'lblCustomer', 'lblCustomerPh'],
    ['Contact Number', 'contactNumber', 'lblContact', null],
    ['Site Location', 'siteAddress', 'lblSite', 'lblSitePh'],
    ['City', 'cityField', 'lblCity', 'lblCityPh'],
    ['Country', 'countryField', 'lblCountry', 'lblCountryPh'],
    ['Service Date', 'serviceDate', 'lblDate', null],
    ['Technician Name', 'techName', 'lblTech', 'lblTechPh'],
    ['Type of Service Visit', null, 'lblServiceType', null],
  ];

  // Update GPS button
  const gpsBtn = document.getElementById('locateBtn');
  if(gpsBtn) gpsBtn.textContent = t('btnGPS');

  // Update service type toggle buttons
  const stButtons = document.querySelectorAll('#serviceTypeGroup .toggle-btn');
  const stKeys = ['stPM','stComm','stTrouble','stHealth','stWarranty'];
  stButtons.forEach((b,i) => { if(stKeys[i]) b.textContent = t(stKeys[i]); });

  // Update Next/Back buttons text
  document.querySelectorAll('.btn-next').forEach(b => {
    const sec = b.closest('.form-section')?.dataset.section;
    const nextLabels = {
      1: isAr ? 'التالي: تفاصيل الوحدة ←' : 'Next: Unit Details →',
      2: isAr ? 'التالي: التبريد ←' : 'Next: Refrigeration →',
      3: isAr ? 'التالي: الكهرباء ←' : 'Next: Electrical →',
      4: isAr ? 'التالي: تدفق الهواء ←' : 'Next: Airflow →',
      5: isAr ? 'التالي: الفحص ←' : 'Next: Inspection →',
      6: isAr ? 'التالي: الصور ←' : 'Next: Photos →',
      7: isAr ? 'التالي: تشخيص الأعطال ←' : 'Next: Fault Diagnosis →',
      8: isAr ? 'التالي: الملخص ←' : 'Next: Summary →',
    };
    if(sec && nextLabels[sec]) b.textContent = nextLabels[sec];
  });
  document.querySelectorAll('.btn-back').forEach(b => { b.textContent = isAr ? '→ رجوع' : '← Back'; });

  // Update Jump to Fault button
  const jumpBtn = document.querySelector('.fault-quick-btn');
  if(jumpBtn) jumpBtn.textContent = t('jumpFault');

  // Update action buttons
  const btnPreview = document.querySelector('.btn-preview');
  const btnPDF = document.querySelector('.btn-print');
  const btnWA = document.querySelector('.btn-whatsapp');
  const btnSubmit = document.querySelector('.btn-submit');
  const btnEmailRheem = document.querySelector('.btn-email-rheem');
  if(btnPreview) btnPreview.textContent = t('btnPreview');
  if(btnPDF) btnPDF.textContent = t('btnPDF');
  if(btnWA) btnWA.textContent = t('btnWA');
  if(btnSubmit) btnSubmit.textContent = t('btnSubmit');
  if(btnEmailRheem) btnEmailRheem.innerHTML = t('btnEmailRheem');

  // Section 2
  const s2h = document.querySelector('.form-section[data-section="2"] h2');
  const s2p = document.querySelector('.form-section[data-section="2"] p');
  if(s2h) s2h.textContent = t('s2title');
  if(s2p) s2p.textContent = t('s2sub');

  // Section 3
  const s3h = document.querySelector('.form-section[data-section="3"] h2');
  const s3p = document.querySelector('.form-section[data-section="3"] p');
  if(s3h) s3h.textContent = t('s3title');
  if(s3p) s3p.textContent = t('s3sub');

  // Update placeholders
  const phMap = {
    'customerName': isAr ? 'الاسم الكامل أو الشركة' : 'Full name or company',
    'contactNumber': isAr ? '+971 xx xxx xxxx' : '+971 xx xxx xxxx',
    'siteAddress': t('lblSitePh'),
    'cityField': t('lblCityPh'),
    'countryField': t('lblCountryPh'),
    'techName': t('lblTechPh'),
    'serialNumber': isAr ? 'الرقم التسلسلي للوحدة' : 'Unit serial number',
    'installYear': isAr ? 'مثال: 2022' : 'e.g. 2022',
    'workSummary': isAr ? 'اوصف جميع الأعمال التي تمت خلال هذه الزيارة...' : 'Describe all work performed during this visit...',
    'recommendations': isAr ? 'قطع الغيار المطلوبة، تاريخ الصيانة القادم، بنود تتطلب موافقة العميل...' : 'Parts to order, next PM date, items requiring customer approval...',
    'spareParts': isAr ? 'اذكر أي قطع تم استبدالها' : 'List any parts replaced',
    'errorNotes': isAr ? 'اشرح أعراض العطل، خطوات التشخيص، القطع المستبدلة...' : 'Describe fault symptoms, steps taken to diagnose, parts replaced...',
    'inspectionNotes': isAr ? 'الملاحظات، الصور الملتقطة، البنود التي تحتاج متابعة...' : 'Observations, photos taken, items requiring follow-up...',
  };
  Object.entries(phMap).forEach(([id, ph]) => {
    const el = document.getElementById(id);
    if(el) el.placeholder = ph;
  });

  // Update form field labels in Section 1 (all labels in the section)
  const allLabels = document.querySelectorAll('.field-group label');
  const labelTextMap_en = {
    'Customer Name': t('lblCustomer'),
    'Contact Number': t('lblContact'),
    'Site Location': t('lblSite'),
    'City': t('lblCity'),
    'Country': t('lblCountry'),
    'Service Date': t('lblDate'),
    'Technician Name': t('lblTech'),
    'Type of Service Visit': t('lblServiceType'),
    'Brand': t('lblBrand'),
    'Unit Type': t('lblUnitType'),
    'Outdoor Model': t('lblOutdoor'),
    'Indoor Model': t('lblIndoor'),
    'Serial Number': t('lblSerial'),
    'Installation Year': t('lblInstYear'),
  };
  allLabels.forEach(lbl => {
    const txt = lbl.childNodes[0]?.textContent?.trim();
    const span = lbl.querySelector('.req');
    if(txt && labelTextMap_en[txt]) {
      lbl.childNodes[0].textContent = labelTextMap_en[txt] + (span ? ' ' : '');
    }
  });
}


// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setDate();
  generateReportId();
  initSignature();
  populateErrorTable(null);
  updateProgress();
  setToggleGroupListeners();
});

function setDate() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('serviceDate').value = today;
  document.getElementById('reportDate').textContent = new Date().toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
}

function generateReportId() {
  const num = Math.floor(Math.random() * 900000) + 100000;
  document.getElementById('reportId').textContent = `SR-${num}`;
}

// ===== SECTION NAVIGATION =====
function nextSection(current) {
  if (!validateSection(current)) return;
  goToSection(current + 1);
}

function prevSection(current) {
  goToSection(current - 1);
}

function goToSection(n) {
  if (n < 1 || n > totalSections) return;
  document.querySelectorAll('.form-section').forEach(s => s.classList.remove('active'));
  document.querySelector(`.form-section[data-section="${n}"]`).classList.add('active');
  currentSection = n;
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (n === 9) setTimeout(generatePreview, 300);
}

function updateProgress() {
  const pct = (currentSection / totalSections) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
  document.querySelectorAll('.step').forEach(s => {
    const num = parseInt(s.dataset.step);
    s.classList.remove('active', 'completed');
    if (num === currentSection) s.classList.add('active');
    else if (num < currentSection) s.classList.add('completed');
  });
}

function validateSection(n) {
  if (n === 1) {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('contactNumber').value.trim();
    const addr = document.getElementById('siteAddress').value.trim();
    const svcType = document.getElementById('serviceTypeVal').value;
    if (!name || !phone || !addr) {
      showToast(t('toastFillCustomer'), 'error');
      return false;
    }
    if (!svcType) {
      showToast(t('toastPickService'), 'error');
      return false;
    }
  }
  if (n === 2) {
    const brand = document.getElementById('brandVal').value;
    const type = document.getElementById('unitType').value;
    const model = document.getElementById('outdoorModel').value;
    if (!brand || !type || !model || model.includes('Select')) {
      showToast(t('toastPickModel'), 'error');
      return false;
    }
  }
  return true;
}

// ===== TOGGLE GROUPS =====
function setToggleGroupListeners() {
  document.querySelectorAll('.toggle-group').forEach(group => {
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const g = this.closest('.toggle-group');
        g.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        // Set hidden input - try multiple ID patterns for robustness
        const gId = g.id || '';
        const val = this.dataset.value;
        const candidates = [
          gId.replace('Group', 'Val').replace('StatusVal', 'StatusVal'),
          gId + 'Val',
          gId.replace('Status', 'StatusVal'),
        ];
        for (const hiddenId of candidates) {
          const el = hiddenId ? document.getElementById(hiddenId) : null;
          if (el) { el.value = val; break; }
        }
      });
    });
  });
}

function setToggle(groupId, value, hiddenId) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.value === value);
  });
  if (hiddenId) document.getElementById(hiddenId).value = value;
}

function setPhase(type) {
  const isThree = type === 'three';
  document.getElementById('voltL2Wrap').style.display = isThree ? '' : 'none';
  document.getElementById('voltL3Wrap').style.display = isThree ? '' : 'none';
  document.getElementById('phaseVal').value = isThree ? 'Three Phase 400V' : 'Single Phase 230V';
  // Toggle compressor 2 based on package + phase
  checkPackageFields();
}

function checkPackageFields() {
  const type = document.getElementById('unitType').value;
  const isPackage = type === 'Package';
  document.getElementById('comp2Wrap').style.display = isPackage ? '' : 'none';
  document.getElementById('comp1Label').textContent = isPackage ? 'Compressor 1 Current (A)' : 'Compressor Current (A)';
}

// ===== BRAND & UNIT TYPE =====
function updateBrand(brand) {
  document.getElementById('brandVal').value = brand;
  const group = document.getElementById('brandGroup');
  group.querySelectorAll('.toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.value === brand);
  });
  updateUnitType();
}

function updateUnitType() {
  const brand = document.getElementById('brandVal').value || 'Rheem';
  const type = document.getElementById('unitType').value;
  const outdoorSel = document.getElementById('outdoorModel');
  const indoorSel = document.getElementById('indoorModel');

  outdoorSel.innerHTML = '<option value="">— Select outdoor model —</option>';
  indoorSel.innerHTML = '<option value="">— Select outdoor model first —</option>';
  document.getElementById('techParamsBox').style.display = 'none';

  if (!type || !MODELS[brand] || !MODELS[brand][type]) return;

  const data = MODELS[brand][type];
  data.outdoor.forEach(m => {
    outdoorSel.innerHTML += `<option value="${m}">${m}</option>`;
  });

  checkPackageFields();
  refreshErrorTable(); // Update error codes to match unit category
}

function onModelSelect() {
  const brand = document.getElementById('brandVal').value || 'Rheem';
  const type = document.getElementById('unitType').value;
  const outdoor = document.getElementById('outdoorModel').value;
  const indoorSel = document.getElementById('indoorModel');

  // Populate indoor models
  indoorSel.innerHTML = '<option value="">— Select indoor model —</option>';
  if (MODELS[brand] && MODELS[brand][type]) {
    MODELS[brand][type].indoor.forEach(m => {
      indoorSel.innerHTML += `<option value="${m}">${m}</option>`;
    });
  }

  // Show tech params if available
  showTechParams(outdoor);
  updateRatedCurrent(outdoor);
}

function showTechParams(modelKey) {
  const params = TECH_PARAMS[modelKey];
  const box = document.getElementById('techParamsBox');
  const grid = document.getElementById('techParamsGrid');

  if (!params) { box.style.display = 'none'; return; }

  box.style.display = '';
  grid.innerHTML = '';

  const items = [
    { label: 'Tonnage', value: params.tonnage },
    { label: 'Voltage / Phase', value: params.voltage },
    { label: 'Refrigerant', value: params.refrigerant },
    { label: 'Total Charge', value: params.totalCharge },
    { label: 'Rated Current (T1)', value: params.ratedCurrentT1 },
    { label: 'Rated Current (T3)', value: params.ratedCurrentT3 },
    { label: 'Power Input (T1)', value: params.powerInputT1 },
    { label: 'Capacity (T1)', value: params.capacityT1 },
    { label: 'EER (T1)', value: params.eerT1 },
    { label: 'Design Press. High', value: params.designPressureHigh },
    { label: 'Design Press. Low', value: params.designPressureLow }
  ];

  items.forEach(item => {
    grid.innerHTML += `
      <div class="param-item">
        <div class="param-label">${item.label}</div>
        <div class="param-value">${item.value}</div>
      </div>`;
  });
}

function updateRatedCurrent(modelKey) {
  const params = TECH_PARAMS[modelKey];
  const display = document.getElementById('ratedCurrentDisplay');
  if (!params) {
    display.textContent = 'No rated current data for this model — refer to nameplate';
    display.style.color = '';
    return;
  }
  display.innerHTML = `<strong>T1 (Standard): ${params.ratedCurrentT1}</strong> &nbsp;|&nbsp; T3 (High Ambient): ${params.ratedCurrentT3} &nbsp;|&nbsp; Design Pressure: HP ${params.designPressureHigh} / LP ${params.designPressureLow}`;
  display.style.color = '#1A1A1A';
}

// ===== REFRIGERATION CALCULATIONS =====
// R-410A: Get saturation temperature from pressure (linear interpolation)
function getSatTemp(psig) {
  const table = R410A_SATURATION;
  if (psig <= table[0].psig) return table[0].temp;
  if (psig >= table[table.length-1].psig) return table[table.length-1].temp;
  for (let i = 0; i < table.length - 1; i++) {
    if (psig >= table[i].psig && psig <= table[i+1].psig) {
      const ratio = (psig - table[i].psig) / (table[i+1].psig - table[i].psig);
      return table[i].temp + ratio * (table[i+1].temp - table[i].temp);
    }
  }
  return null;
}

function calcRefrig() {
  const suctionTemp = parseFloat(document.getElementById('suctionTemp').value);
  const suctionPressure = parseFloat(document.getElementById('suctionPressure').value);
  const dischargePressure = parseFloat(document.getElementById('dischargePressure').value);
  const dischargeTemp = parseFloat(document.getElementById('dischargeTemp').value);
  const liquidLineTemp = parseFloat(document.getElementById('liquidLineTemp').value);

  let alerts = [];

  // Saturation temperatures
  let satSuction = null, satCond = null;
  if (!isNaN(suctionPressure)) {
    satSuction = getSatTemp(suctionPressure);
    document.getElementById('satSuctionVal').textContent = satSuction !== null ? satSuction.toFixed(1) : '—';
  }
  if (!isNaN(dischargePressure)) {
    satCond = getSatTemp(dischargePressure);
    document.getElementById('satCondVal').textContent = satCond !== null ? satCond.toFixed(1) : '—';
  }

  // Superheat = Suction Temp - Sat Suction Temp
  if (!isNaN(suctionTemp) && satSuction !== null) {
    const sh = suctionTemp - satSuction;
    document.getElementById('superheatVal').textContent = sh.toFixed(1);
    const card = document.getElementById('superheatCard');
    const status = document.getElementById('superheatStatus');
    card.classList.remove('ok','warn','err');

    if (sh < 3) {
      card.classList.add('err');
      status.textContent = '⚠ Too Low — Flood Back Risk';
      status.style.color = '#C62828';
      alerts.push({ type: 'error', msg: '❗ Superheat too low (&lt;3°C) — Risk of liquid flood back to compressor. Check TXV/MEV or refrigerant overcharge.' });
    } else if (sh >= 3 && sh <= 12) {
      card.classList.add('ok');
      status.textContent = '✓ Normal Range';
      status.style.color = '#2E7D32';
    } else if (sh > 12 && sh <= 20) {
      card.classList.add('warn');
      status.textContent = '⚠ Slightly High';
      status.style.color = '#E65100';
      alerts.push({ type: 'warn', msg: '⚠ Superheat slightly high (>12°C) — check for low charge or restricted metering device.' });
    } else {
      card.classList.add('err');
      status.textContent = '❗ Very High — Low Charge';
      status.style.color = '#C62828';
      alerts.push({ type: 'error', msg: '❗ Superheat very high (>20°C) — system likely undercharged or TXV stuck closed. Check refrigerant level.' });
    }
  }

  // Subcooling = Sat Cond Temp - Liquid Line Temp
  if (!isNaN(liquidLineTemp) && satCond !== null) {
    const sc = satCond - liquidLineTemp;
    document.getElementById('subcoolingVal').textContent = sc.toFixed(1);
    const card = document.getElementById('subcoolingCard');
    const status = document.getElementById('subcoolingStatus');
    card.classList.remove('ok','warn','err');

    if (sc < 3) {
      card.classList.add('err');
      status.textContent = '⚠ Too Low — Low Charge';
      status.style.color = '#C62828';
      alerts.push({ type: 'error', msg: '❗ Subcooling too low (&lt;3°C) — system may be undercharged or liquid line restriction present.' });
    } else if (sc >= 3 && sc <= 12) {
      card.classList.add('ok');
      status.textContent = '✓ Normal Range';
      status.style.color = '#2E7D32';
    } else {
      card.classList.add('warn');
      status.textContent = '⚠ High — Overcharged?';
      status.style.color = '#E65100';
      alerts.push({ type: 'warn', msg: '⚠ Subcooling high (>12°C) — system may be overcharged. Verify refrigerant charge.' });
    }
  }

  // Discharge temp check
  if (!isNaN(dischargeTemp)) {
    if (dischargeTemp > 120) {
      alerts.push({ type: 'error', msg: `❗ Discharge temperature ${dischargeTemp}°C is dangerously high (>120°C). Check refrigerant charge, suction superheat, and compressor condition.` });
    } else if (dischargeTemp > 100) {
      alerts.push({ type: 'warn', msg: `⚠ Discharge temperature ${dischargeTemp}°C is elevated (>100°C). Monitor closely.` });
    }
  }

  // Design pressure check
  const designHigh = 450, designLow = 250;
  if (!isNaN(dischargePressure) && dischargePressure > designHigh) {
    alerts.push({ type: 'error', msg: `❗ Discharge pressure ${dischargePressure} PSIG exceeds design limit of ${designHigh} PSIG. High pressure protection may trip.` });
  }
  if (!isNaN(suctionPressure) && suctionPressure < 60) {
    alerts.push({ type: 'warn', msg: `⚠ Suction pressure ${suctionPressure} PSIG is very low — check for low charge, restriction, or evaporator freeze-up.` });
  }

  showAlerts('refrigAlerts', alerts);
}

function showAlerts(id, alerts) {
  const el = document.getElementById(id);
  if (!alerts.length) { el.style.display = 'none'; return; }
  el.style.display = '';
  el.className = 'alert-box';
  const hasError = alerts.some(a => a.type === 'error');
  el.classList.add(hasError ? 'alert-error' : 'alert-warn');
  el.innerHTML = alerts.map(a => `<div style="margin-bottom:4px;">${a.msg}</div>`).join('');
}

// ===== ELECTRICAL =====
function checkVoltage() {
  const l1 = parseFloat(document.getElementById('voltL1').value);
  const l2 = parseFloat(document.getElementById('voltL2').value);
  const l3 = parseFloat(document.getElementById('voltL3').value);
  const el = document.getElementById('voltageAlert');
  const phase = document.getElementById('phaseVal').value;

  let alerts = [];

  if (!isNaN(l1)) {
    const nomV = phase.includes('400') ? 400 : 230;
    const tolerance = nomV * 0.1;  // L-L nominal for 3ph is 400V, L-N for 1ph is 230V
    if (l1 < nomV - tolerance || l1 > nomV + tolerance) {
      alerts.push({ type: 'error', msg: `⚡ Voltage L1 (${l1}V) is outside ±10% of nominal ${nomV}V. Check supply.` });
    }
  }

  if (phase.includes('400') && !isNaN(l1) && !isNaN(l2) && !isNaN(l3)) {
    const avg = (l1 + l2 + l3) / 3;
    const imbalance = Math.max(Math.abs(l1-avg), Math.abs(l2-avg), Math.abs(l3-avg)) / avg * 100;
    if (imbalance > 2) {
      alerts.push({ type: 'warn', msg: `⚠ Phase imbalance: ${imbalance.toFixed(1)}%. Should be below 2%. Check connections.` });
    }
  }

  showAlerts('voltageAlert', alerts);
  el.style.display = alerts.length ? '' : 'none';
}

function checkCurrents() {
  const comp1 = parseFloat(document.getElementById('compCurrent1').value);
  const model = document.getElementById('outdoorModel').value;
  const params = TECH_PARAMS[model];
  let alerts = [];

  if (params && !isNaN(comp1)) {
    const rated = parseFloat(params.ratedCurrentT1);
    if (comp1 > rated * 1.15) {
      alerts.push({ type: 'error', msg: `❗ Compressor current (${comp1}A) exceeds rated ${rated}A by >15%. Check for restricted airflow, overcharge, or mechanical issue.` });
    } else if (comp1 > rated * 1.1) {
      alerts.push({ type: 'warn', msg: `⚠ Compressor current (${comp1}A) is elevated vs rated ${rated}A. Monitor system.` });
    } else if (comp1 < rated * 0.6 && comp1 > 0) {
      alerts.push({ type: 'warn', msg: `⚠ Compressor current (${comp1}A) is low vs rated ${rated}A. Check refrigerant charge.` });
    }
  }

  const el = document.getElementById('currentAlert');
  const wrap = document.getElementById('currentAlertWrap');
  if (alerts.length) {
    wrap.style.display = '';
    el.style.display = '';
    showAlerts('currentAlert', alerts);
  } else {
    wrap.style.display = 'none';
  }
}

// ===== AIRFLOW & DELTA T =====
function calcDeltaT() {
  const supply = parseFloat(document.getElementById('supplyAirTemp').value);
  const returnT = parseFloat(document.getElementById('returnAirTemp').value);
  const el = document.getElementById('deltaTVal');
  const alertEl = document.getElementById('airflowAlert');

  if (isNaN(supply) || isNaN(returnT)) {
    el.textContent = '—';
    alertEl.style.display = 'none';
    return;
  }

  const dT = returnT - supply;
  el.textContent = dT.toFixed(1);

  let alerts = [];

  // Low supply temp warning
  if (supply < 8) {
    alerts.push({ type: 'error', msg: `❄️ Supply air temperature (${supply}°C) is below 8°C — Risk of evaporator freeze-up. Check airflow: filters, blower speed, dampers.` });
  }

  // Delta-T analysis
  if (dT < 6) {
    alerts.push({ type: 'warn', msg: `⚠ Delta-T (${dT.toFixed(1)}°C) is low — below ideal range of 6–12°C. Possible causes: insufficient refrigerant charge, high airflow, or low system load.` });
    el.style.color = '#E65100';
  } else if (dT > 12) {
    alerts.push({ type: 'warn', msg: `⚠ Delta-T (${dT.toFixed(1)}°C) is high — above ideal 6–12°C range. Possible causes: dirty filter, low airflow, blocked ductwork, or high load.` });
    el.style.color = '#C62828';
  } else {
    el.style.color = '#2E7D32';
  }

  showAlerts('airflowAlert', alerts);
}

// ===== ERROR CODES =====
function getActiveCategory() {
  const unitType = document.getElementById('unitType')?.value || '';
  if (unitType === 'VRF') return 'VRF';
  if (unitType === 'Package') return 'Commercial';
  if (unitType === 'Wall Mount Split') return 'Mini Split';
  if (unitType === 'Ducted Split') return 'Ducted';
  return null; // show all if no model selected
}

function populateErrorTable(filterCat) {
  const tbody = document.getElementById('errorTableBody');
  const titleEl = document.getElementById('errorTableTitle');
  if (!tbody) return;
  const codes = filterCat
    ? ERROR_CODES.filter(e => e.model_category === filterCat)
    : ERROR_CODES;

  // Group by category
  const groups = {};
  codes.forEach(e => {
    if (!groups[e.model_category]) groups[e.model_category] = [];
    groups[e.model_category].push(e);
  });

  let html = '';
  Object.entries(groups).forEach(([cat, items]) => {
    html += `<tr class="error-cat-row"><td colspan="4">📋 ${cat} — ${items[0].series}</td></tr>`;
    items.forEach(e => {
      html += `<tr>
        <td><strong>${e.code}</strong></td>
        <td>${e.description}</td>
        <td>${e.model_category} · ${e.series}</td>
        <td>${e.action}</td>
      </tr>`;
    });
  });
  tbody.innerHTML = html || '<tr><td colspan="4">No error codes for selected unit type</td></tr>';
  if (titleEl) titleEl.textContent = filterCat ? `Error Code Reference — ${filterCat}` : 'Error Code Reference — All Models';
}

function refreshErrorTable() {
  const cat = getActiveCategory();
  populateErrorTable(cat);
}

function searchErrorCode() {
  const query = document.getElementById('errorCodeInput').value.trim().toUpperCase();
  const lookup = document.getElementById('errorLookup');
  const addBtn = document.getElementById('addErrorBtn');
  currentErrorMatch = null;

  if (!query || query.length < 1) {
    lookup.style.display = 'none';
    addBtn.style.display = 'none';
    return;
  }

  const cat = getActiveCategory();
  const pool = cat ? ERROR_CODES.filter(e => e.model_category === cat) : ERROR_CODES;
  const matches = pool.filter(e =>
    e.code.toUpperCase().includes(query) ||
    e.description.toUpperCase().includes(query)
  );
  // If no matches in category, fall back to all codes
  const finalMatches = matches.length ? matches : ERROR_CODES.filter(e =>
    e.code.toUpperCase().includes(query) ||
    e.description.toUpperCase().includes(query)
  );

  if (!finalMatches.length) {
    lookup.innerHTML = '<div class="error-result-item"><div class="error-result-desc">No matching codes found</div></div>';
    lookup.style.display = '';
    addBtn.style.display = 'none';
    return;
  }

  lookup.innerHTML = finalMatches.slice(0, 10).map((e, i) => `
    <div class="error-result-item" onclick="selectError(${ERROR_CODES.indexOf(e)})">
      <div class="error-result-code">${e.code} — ${e.description}</div>
      <div class="error-result-desc">${e.model_category} · ${e.series}</div>
    </div>
  `).join('');

  lookup.style.display = '';
}

function selectError(idx) {
  const match = ERROR_CODES[idx];
  if (!match) return;
  currentErrorMatch = match;
  document.getElementById('errorCodeInput').value = `${match.code} — ${match.description}`;
  document.getElementById('errorLookup').style.display = 'none';
  document.getElementById('addErrorBtn').style.display = '';
}

function addErrorCode() {
  if (!currentErrorMatch) return;
  if (addedErrorCodes.some(e => e.code === currentErrorMatch.code && e.model_category === currentErrorMatch.model_category)) {
    showToast(t('toastErrAdded'), 'warning');
    return;
  }
  addedErrorCodes.push({...currentErrorMatch});
  renderAddedErrors();
  document.getElementById('errorCodeInput').value = '';
  document.getElementById('addErrorBtn').style.display = 'none';
  currentErrorMatch = null;
}

function renderAddedErrors() {
  const el = document.getElementById('addedErrors');
  el.innerHTML = addedErrorCodes.map((e, i) => `
    <div class="error-tag">
      <div>
        <div class="error-tag-code">${e.code} — ${e.description}</div>
        <div class="error-tag-desc"><strong>Series:</strong> ${e.series}</div>
        <div class="error-tag-desc"><strong>Action:</strong> ${e.action}</div>
      </div>
      <div class="error-tag-remove" onclick="removeError(${i})">×</div>
    </div>
  `).join('');
}

// ===== DIRECT FAULT JUMP =====
function jumpToFaults() {
  // Allow direct access to fault section without validating earlier sections
  goToSection(8);
}

// ===== PHOTOS =====
function handlePhotoUpload(input, category) {
  const files = Array.from(input.files);
  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      sitePhotos.push({ category, dataUrl: ev.target.result, name: file.name });
      renderPhotoSection(category);
    };
    reader.readAsDataURL(file);
  });
  input.value = ''; // reset so same file can be re-added if needed
}

function renderPhotoSection(category) {
  const categoryMap = {
    'dataplate': 'dataPlatePhotos',
    'pressure': 'pressurePhotos',
    'electrical': 'electricalPhotos',
    'site': 'sitePhotos',
    'invoice': 'invoicePhotos'
  };
  const containerId = categoryMap[category];
  if (!containerId) return;
  const container = document.getElementById(containerId);
  if (!container) return;
  const catPhotos = sitePhotos.filter(p => p.category === category);
  container.innerHTML = catPhotos.map((p, i) => {
    const globalIdx = sitePhotos.indexOf(p);
    return `
      <div class="photo-thumb-wrap">
        <img src="${p.dataUrl}" class="photo-thumb" alt="${p.name}" onclick="viewPhoto(${globalIdx})">
        <button type="button" class="photo-remove-btn" onclick="removePhoto(${globalIdx})">×</button>
        <div class="photo-thumb-label">${p.name.length > 18 ? p.name.substring(0,15)+'…' : p.name}</div>
      </div>
    `;
  }).join('');
  updatePhotoCount();
}

function updatePhotoCount() {
  const badge = document.getElementById('photoCountBadge');
  const text = document.getElementById('photoCountText');
  if (!badge || !text) return;
  const total = sitePhotos.length;
  if (total === 0) {
    text.textContent = 'No photos added yet';
    badge.style.background = '#F9FAFB';
    badge.style.borderColor = '#E5E7EB';
    badge.style.color = '#6B7280';
  } else {
    const dp = sitePhotos.filter(p=>p.category==='dataplate').length;
    const pr = sitePhotos.filter(p=>p.category==='pressure').length;
    const el = sitePhotos.filter(p=>p.category==='electrical').length;
    const si = sitePhotos.filter(p=>p.category==='site').length;
    const inv = sitePhotos.filter(p=>p.category==='invoice').length;
    text.textContent = `${total} photo(s) captured — 🏷️ ${dp} data plate · 🔴 ${pr} pressure · ⚡ ${el} electrical · 📸 ${si} site · 📄 ${inv} invoice/warranty`;
    badge.style.background = '#F0FDF4';
    badge.style.borderColor = '#BBF7D0';
    badge.style.color = '#166534';
  }
}

function removePhoto(idx) {
  const cat = sitePhotos[idx]?.category;
  sitePhotos.splice(idx, 1);
  if (cat) renderPhotoSection(cat);
  // Re-render all to fix indices
  ['dataplate','pressure','electrical','site','invoice'].forEach(c => renderPhotoSection(c));
}

function viewPhoto(idx) {
  const p = sitePhotos[idx];
  if (!p) return;
  const overlay = document.createElement('div');
  overlay.className = 'photo-overlay';
  overlay.innerHTML = `
    <div class="photo-overlay-inner">
      <button class="photo-overlay-close" onclick="this.closest('.photo-overlay').remove()">✕ Close</button>
      <img src="${p.dataUrl}" style="max-width:95vw;max-height:85vh;border-radius:8px;">
      <div style="color:#fff;margin-top:8px;font-size:13px;">${p.name}</div>
    </div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

function removeError(i) {
  addedErrorCodes.splice(i, 1);
  renderAddedErrors();
}

// ===== SIGNATURE PAD =====
function initSignature() {
  const canvas = document.getElementById('signatureCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  signatureCtx = ctx;

  canvas.width = canvas.offsetWidth;
  canvas.height = 140;
  ctx.strokeStyle = '#1A1A1A';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';

  let drawing = false, lastX = 0, lastY = 0;

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  };

  canvas.addEventListener('mousedown', e => { drawing = true; const p = getPos(e); lastX = p.x; lastY = p.y; });
  canvas.addEventListener('mousemove', e => {
    if (!drawing) return;
    const p = getPos(e);
    ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(p.x, p.y); ctx.stroke();
    lastX = p.x; lastY = p.y;
  });
  canvas.addEventListener('mouseup', () => { drawing = false; saveSignature(); });
  canvas.addEventListener('touchstart', e => { e.preventDefault(); drawing = true; const p = getPos(e); lastX = p.x; lastY = p.y; }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (!drawing) return;
    const p = getPos(e);
    ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(p.x, p.y); ctx.stroke();
    lastX = p.x; lastY = p.y;
  }, { passive: false });
  canvas.addEventListener('touchend', () => { drawing = false; saveSignature(); });
}

function clearSignature() {
  const canvas = document.getElementById('signatureCanvas');
  signatureCtx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('signatureData').value = '';
}

function saveSignature() {
  const canvas = document.getElementById('signatureCanvas');
  document.getElementById('signatureData').value = canvas.toDataURL();
}

// ===== LOCATION =====
document.getElementById('locateBtn').addEventListener('click', () => {
  if (!navigator.geolocation) {
    showToast('Geolocation not supported', 'error');
    return;
  }
  showToast(t('toastLoc'), '');
  navigator.geolocation.getCurrentPosition(pos => {
    selectedLat = pos.coords.latitude;
    selectedLng = pos.coords.longitude;
    document.getElementById('latDisplay').textContent = selectedLat.toFixed(5);
    document.getElementById('lngDisplay').textContent = selectedLng.toFixed(5);
    document.getElementById('coordsDisplay').style.display = '';
    document.getElementById('siteAddress').value = `Lat: ${selectedLat.toFixed(5)}, Lng: ${selectedLng.toFixed(5)}`;
    showMapEmbed(selectedLat, selectedLng);
    showToast(t('toastLocOK'), 'success');
    reverseGeocode(selectedLat, selectedLng);
  }, () => {
    showToast(t('toastLocFail'), 'error');
  });
});

document.getElementById('siteAddress').addEventListener('change', function() {
  const addr = this.value;
  if (addr && !addr.startsWith('Lat:')) {
    showMapEmbed(null, null, addr);
  }
});

function reverseGeocode(lat, lng) {
  // Use nominatim (free, no key required) for reverse geocoding
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
    .then(r => r.json())
    .then(data => {
      if (data && data.address) {
        const addr = data.address;
        const city = addr.city || addr.town || addr.village || addr.county || '';
        const country = addr.country || '';
        if (city) document.getElementById('cityField').value = city;
        if (country) document.getElementById('countryField').value = country;
        // Also update site address to human-readable
        if (data.display_name) {
          document.getElementById('siteAddress').value = data.display_name;
        }
        showToast(t('toastCityOK'), 'success');
      }
    })
    .catch(() => {/* silently fail - user can fill manually */});
}

function showMapEmbed(lat, lng, addr) {
  const mapDiv = document.getElementById('map');
  let src = '';
  // NOTE: Replace YOUR_API_KEY with actual Google Maps API key in production
  if (lat && lng) {
    src = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  } else if (addr) {
    src = `https://maps.google.com/maps?q=${encodeURIComponent(addr)}&z=15&output=embed`;
  }

  if (src) {
    mapDiv.innerHTML = `
      <iframe
        src="${src}"
        width="100%" height="260" frameborder="0"
        style="border:0; display:block;"
        allowfullscreen
        loading="lazy">
      </iframe>`;
  }
}

// ===== PREVIEW & SUBMIT =====
function generatePreview() {
  const grid = document.getElementById('previewGrid');
  const fields = [
    { label: 'Report ID', value: document.getElementById('reportId').textContent },
    { label: 'Date', value: document.getElementById('serviceDate').value },
    { label: 'Customer', value: document.getElementById('customerName').value },
    { label: 'Contact', value: document.getElementById('contactNumber').value },
    { label: 'Site', value: document.getElementById('siteAddress').value },
    { label: 'City', value: document.getElementById('cityField').value },
    { label: 'Country', value: document.getElementById('countryField').value },
    { label: 'Technician', value: document.getElementById('techName').value },
    { label: 'Service Type', value: document.getElementById('serviceTypeVal').value },
    { label: 'Brand', value: document.getElementById('brandVal').value },
    { label: 'Unit Type', value: document.getElementById('unitType').value },
    { label: 'Outdoor Model', value: document.getElementById('outdoorModel').value },
    { label: 'Indoor Model', value: document.getElementById('indoorModel').value },
    { label: 'Suction Temp', value: val('suctionTemp', '°C') },
    { label: 'Suction Pressure', value: val('suctionPressure', ' PSIG') },
    { label: 'Discharge Pressure', value: val('dischargePressure', ' PSIG') },
    { label: 'Discharge Temp', value: val('dischargeTemp', '°C') },
    { label: 'Superheat', value: document.getElementById('superheatVal').textContent + ' °C' },
    { label: 'Subcooling', value: document.getElementById('subcoolingVal').textContent + ' °C' },
    { label: 'Supply Air Temp', value: val('supplyAirTemp', '°C') },
    { label: 'Return Air Temp', value: val('returnAirTemp', '°C') },
    { label: 'Delta-T', value: document.getElementById('deltaTVal').textContent + ' °C' },
    { label: 'Comp. Current', value: val('compCurrent1', ' A') },
    { label: 'Voltage L1-L2', value: val('voltL1', ' V') },
    { label: 'Photos Captured', value: sitePhotos.length ? `${sitePhotos.length} photo(s)` : 'None' },
    { label: 'System Status', value: document.getElementById('systemStatusVal').value },
    { label: 'Error Codes', value: addedErrorCodes.length ? addedErrorCodes.map(e => e.code).join(', ') : 'None' }
  ];

  grid.innerHTML = fields.filter(f => f.value && f.value.trim() && f.value !== '— °C' && f.value !== '— PSIG' && f.value !== '— A' && f.value !== '— V').map(f => `
    <div class="preview-item">
      <label>${f.label}</label>
      <span>${f.value}</span>
    </div>
  `).join('');
}

function val(id, unit = '') {
  const v = document.getElementById(id)?.value;
  return v ? v + unit : '—' + unit;
}

function submitReport() {
  const status = document.getElementById('systemStatusVal').value;
  const summary = document.getElementById('workSummary').value;
  if (!status) { showToast(t('toastStatus'), 'error'); return; }
  if (!summary.trim()) { showToast(t('toastSummary'), 'error'); return; }

  generatePreview();

  const report = buildReportData();
  savePDF();
  showToast(t('toastSubmit'), 'success');
}

function buildReportData() {
  return {
    reportId: document.getElementById('reportId').textContent,
    serviceDate: document.getElementById('serviceDate').value,
    jobInfo: {
      customerName: document.getElementById('customerName').value,
      contactNumber: document.getElementById('contactNumber').value,
      siteAddress: document.getElementById('siteAddress').value,
      coordinates: selectedLat ? { lat: selectedLat, lng: selectedLng } : null,
      technicianName: document.getElementById('techName').value,
      serviceType: document.getElementById('serviceTypeVal').value,
    },
    unitDetails: {
      brand: document.getElementById('brandVal').value,
      unitType: document.getElementById('unitType').value,
      outdoorModel: document.getElementById('outdoorModel').value,
      indoorModel: document.getElementById('indoorModel').value,
      serialNumber: document.getElementById('serialNumber').value,
      installYear: document.getElementById('installYear').value,
    },
    refrigerationParams: {
      suctionTemp: document.getElementById('suctionTemp').value,
      suctionPressure: document.getElementById('suctionPressure').value,
      dischargePressure: document.getElementById('dischargePressure').value,
      dischargeTemp: document.getElementById('dischargeTemp').value,
      liquidLineTemp: document.getElementById('liquidLineTemp').value,
      superheat: document.getElementById('superheatVal').textContent,
      subcooling: document.getElementById('subcoolingVal').textContent,
      satSuctionTemp: document.getElementById('satSuctionVal').textContent,
      satCondensingTemp: document.getElementById('satCondVal').textContent,
      refrigerantType: 'R-410A',
    },
    electricalParams: {
      phase: document.getElementById('phaseVal').value,
      voltageL1L2: document.getElementById('voltL1').value,
      voltageL2L3: document.getElementById('voltL2').value,
      voltageL1L3: document.getElementById('voltL3').value,
      compressorCurrent1: document.getElementById('compCurrent1').value,
      compressorCurrent2: document.getElementById('compCurrent2').value,
      indoorMotorCurrent: document.getElementById('indoorMotorCurrent').value,
      condFanCurrent: document.getElementById('condFanCurrent').value,
      hpSwitch: document.getElementById('hpSwitch').checked,
      lpSwitch: document.getElementById('lpSwitch').checked,
    },
    airflowParams: {
      supplyAirTemp: document.getElementById('supplyAirTemp').value,
      returnAirTemp: document.getElementById('returnAirTemp').value,
      deltaT: document.getElementById('deltaTVal').textContent,
      espMeasured: document.getElementById('espMeasured').value,
      airflowMeasured: document.getElementById('airflowMeasured').value,
      airflowUnit: document.getElementById('airflowUnit').value,
    },
    inspectionChecklist: getChecklistData(),
    photos: { total: sitePhotos.length, categories: { dataplate: sitePhotos.filter(p=>p.category==='dataplate').length, pressure: sitePhotos.filter(p=>p.category==='pressure').length, electrical: sitePhotos.filter(p=>p.category==='electrical').length, site: sitePhotos.filter(p=>p.category==='site').length } },
    errorCodes: addedErrorCodes,
    hasActiveError: document.getElementById('hasErrorVal').value,
    errorNotes: document.getElementById('errorNotes').value,
    summary: {
      systemStatus: document.getElementById('systemStatusVal').value,
      workSummary: document.getElementById('workSummary').value,
      recommendations: document.getElementById('recommendations').value,
      nextServiceDate: document.getElementById('nextServiceDate').value,
      spareParts: document.getElementById('spareParts').value,
    },
    signature: document.getElementById('signatureData').value ? 'Captured' : 'Not captured',
    timestamp: new Date().toISOString(),
  };
}

function getChecklistData() {
  const checks = {};
  document.querySelectorAll('input[type="checkbox"][id^="chk_"]').forEach(cb => {
    checks[cb.id.replace('chk_', '')] = cb.checked;
  });
  return checks;
}

// ===== TOAST =====
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => t.classList.remove('show'), 3500);
}

// Close error lookup on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.error-search-wrap')) {
    document.getElementById('errorLookup').style.display = 'none';
  }
});

// ===== BLOWER CURRENT WARNING =====
function checkBlowerCurrent() {
  const amps = parseFloat(document.getElementById('indoorMotorCurrent').value);
  const model = document.getElementById('outdoorModel').value || '';
  const warnWrap = document.getElementById('blowerWarnWrap');
  const warnMsg = document.getElementById('blowerWarnMsg');
  if (!warnWrap || !warnMsg) return;

  if (isNaN(amps) || amps <= 0) {
    warnWrap.style.display = 'none';
    return;
  }

  let triggered = false;
  if (BLOWER_THRESHOLDS) {
    for (const t of BLOWER_THRESHOLDS) {
      if (t.pattern.test(model) && amps < t.threshold) {
        warnMsg.innerHTML = `⚠️ <strong>Low Airflow Warning</strong> — Blower current ${amps.toFixed(1)} A is below the ${t.threshold} A minimum for ${t.label}.<br>Check ESP settings or fan speed configuration.`;
        warnWrap.style.display = '';
        triggered = true;
        break;
      }
    }
  }
  if (!triggered) {
    warnWrap.style.display = 'none';
  }
}

// ===== PDF GENERATION =====
function savePDF() {
  // Build full print report HTML then trigger browser print-to-PDF
  const reportId = document.getElementById('reportId').textContent;
  const printEl = document.getElementById('printReport');

  // Gather all data
  const d = {
    reportId,
    date: document.getElementById('serviceDate').value,
    customer: document.getElementById('customerName').value,
    contact: document.getElementById('contactNumber').value,
    site: document.getElementById('siteAddress').value,
    city: document.getElementById('cityField').value,
    country: document.getElementById('countryField').value,
    tech: document.getElementById('techName').value,
    serviceType: document.getElementById('serviceTypeVal').value,
    brand: document.getElementById('brandVal').value,
    unitType: document.getElementById('unitType').value,
    outdoorModel: document.getElementById('outdoorModel').value,
    indoorModel: document.getElementById('indoorModel').value,
    serial: document.getElementById('serialNumber').value,
    installYear: document.getElementById('installYear').value,
    suctionTemp: document.getElementById('suctionTemp').value,
    suctionPressure: document.getElementById('suctionPressure').value,
    dischargePressure: document.getElementById('dischargePressure').value,
    dischargeTemp: document.getElementById('dischargeTemp').value,
    liquidLineTemp: document.getElementById('liquidLineTemp').value,
    ambientTemp: document.getElementById('ambientTemp').value,
    superheat: document.getElementById('superheatVal').textContent,
    subcooling: document.getElementById('subcoolingVal').textContent,
    satSuction: document.getElementById('satSuctionVal').textContent,
    satCond: document.getElementById('satCondVal').textContent,
    refrigNotes: document.getElementById('refrigNotes').value,
    phase: document.getElementById('phaseVal').value,
    voltL1: document.getElementById('voltL1').value,
    voltL2: document.getElementById('voltL2').value,
    voltL3: document.getElementById('voltL3').value,
    comp1: document.getElementById('compCurrent1').value,
    comp2: document.getElementById('compCurrent2').value,
    indoorMotor: document.getElementById('indoorMotorCurrent').value,
    condFan: document.getElementById('condFanCurrent').value,
    hpSwitch: document.getElementById('hpSwitch').checked ? '✓ Operational' : '✗ Not Checked',
    lpSwitch: document.getElementById('lpSwitch').checked ? '✓ Operational' : '✗ Not Checked',
    supplyAir: document.getElementById('supplyAirTemp').value,
    returnAir: document.getElementById('returnAirTemp').value,
    deltaT: document.getElementById('deltaTVal').textContent,
    esp: document.getElementById('espMeasured').value,
    airflow: document.getElementById('airflowMeasured').value,
    airflowUnit: document.getElementById('airflowUnit').value,
    airflowNotes: document.getElementById('airflowNotes').value,
    hasError: document.getElementById('hasErrorVal').value,
    errorNotes: document.getElementById('errorNotes').value,
    systemStatus: document.getElementById('systemStatusVal').value,
    workSummary: document.getElementById('workSummary').value,
    recommendations: document.getElementById('recommendations').value,
    nextService: document.getElementById('nextServiceDate').value,
    spareParts: document.getElementById('spareParts').value,
    inspNotes: document.getElementById('inspectionNotes').value,
  };

  // ── Collect all active warnings from DOM ──────────────────────────────
  const activeWarnings = [];
  // Refrigerant warnings
  const refrigAlertEl = document.getElementById('refrigAlerts');
  if (refrigAlertEl && refrigAlertEl.style.display !== 'none' && refrigAlertEl.textContent.trim()) {
    refrigAlertEl.querySelectorAll('div').forEach(div => {
      const txt = div.textContent.trim();
      if (txt) activeWarnings.push({ type: 'refrig', msg: txt });
    });
  }
  // Voltage warnings
  const voltAlertEl = document.getElementById('voltageAlert');
  if (voltAlertEl && voltAlertEl.style.display !== 'none' && voltAlertEl.textContent.trim()) {
    voltAlertEl.querySelectorAll('div').forEach(div => {
      const txt = div.textContent.trim();
      if (txt) activeWarnings.push({ type: 'electrical', msg: txt });
    });
  }
  // Airflow / delta-T warnings
  const airAlertEl = document.getElementById('airflowAlert');
  if (airAlertEl && airAlertEl.style.display !== 'none' && airAlertEl.textContent.trim()) {
    airAlertEl.querySelectorAll('div').forEach(div => {
      const txt = div.textContent.trim();
      if (txt) activeWarnings.push({ type: 'airflow', msg: txt });
    });
  }
  // Blower current warning
  const blowerWarnEl = document.getElementById('blowerWarnMsg');
  if (blowerWarnEl && blowerWarnEl.textContent.trim()) {
    const bwrap = document.getElementById('blowerWarnWrap');
    if (bwrap && bwrap.style.display !== 'none') {
      activeWarnings.push({ type: 'airflow', msg: blowerWarnEl.textContent.trim() });
    }
  }

  // Checklist
  const chks = {};
  document.querySelectorAll('input[type="checkbox"][id^="chk_"]').forEach(cb => {
    chks[cb.id.replace('chk_','')] = cb.checked;
  });

  // Signature
  const sigData = document.getElementById('signatureData').value;

  // Logo (embedded)
  const logoImg = document.querySelector('.rheem-logo-img');
  const logoSrc = logoImg ? logoImg.src : '';

  const isThree = d.phase && d.phase.includes('Three');

  // ── Map static image URL ─────────────────────────────────────────────
  let mapStaticUrl = '';
  if (selectedLat && selectedLng) {
    // OpenStreetMap static tile - no API key needed
    mapStaticUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${selectedLat},${selectedLng}&zoom=15&size=600x300&maptype=mapnik&markers=${selectedLat},${selectedLng},red`;
  } else if (d.site && !d.site.startsWith('Lat:')) {
    const encodedAddr = encodeURIComponent(d.site);
    mapStaticUrl = `https://maps.google.com/maps/api/staticmap?center=${encodedAddr}&zoom=15&size=600x200&markers=color:red|${encodedAddr}&key=`;
  }


  function row(label, val) {
    if (!val || val === '' || val === '—') return '';
    return `<div class="print-field"><div class="print-label">${label}</div><div class="print-value">${val}</div></div>`;
  }
  function chkBox(id, label) {
    const checked = chks[id] || false;
    return `<div class="print-check-item"><span class="print-check-box${checked?' checked':''}">${checked?'✓':''}</span> ${label}</div>`;
  }

  // Error codes section
  let errorHtml = '';
  if (addedErrorCodes.length) {
    errorHtml = addedErrorCodes.map(e => `
      <div class="print-error-row">
        <span class="print-error-code">${e.code}</span>
        <div><div style="font-weight:600;font-size:11px;">${e.description}</div><div style="font-size:9px;color:#555;">${e.series} | ${e.action}</div></div>
      </div>`).join('');
  } else {
    errorHtml = '<div style="color:#888;font-size:11px;">No error codes logged</div>';
  }

  // Photos - grouped by category
  const photosByCategory = (cat) => sitePhotos.filter(p=>p.category===cat);
  const photoSection = (label, cat, icon) => {
    const photos = photosByCategory(cat);
    if (!photos.length) return '';
    return `<div style="margin-bottom:6px;"><div style="font-size:9px;color:#888;text-transform:uppercase;margin-bottom:3px;">${icon} ${label}</div><div class="print-photos-grid">${photos.slice(0,6).map(p=>`<img src="${p.dataUrl}" class="print-photo" alt="${p.name}">`).join('')}</div></div>`;
  };
  const photosHtml = sitePhotos.length
    ? (photoSection('Data Plate','dataplate','🏷️') + photoSection('Pressure Gauges','pressure','🔴') + photoSection('Electrical','electrical','⚡') + photoSection('Site Photos','site','📸') + photoSection('Invoice / Warranty','invoice','📄'))
    : '<div style="color:#888;font-size:11px;">No photos captured</div>';

  printEl.innerHTML = `
    <div class="print-report-wrap" style="${currentLang === 'ar' ? 'direction:rtl;text-align:right;' : ''}">
      <div class="print-header">
        <img src="${logoSrc}" class="print-logo" alt="Rheem">
        <div class="print-title">${currentLang === 'ar' ? 'تقرير خدمة التكييف' : 'HVAC Service Report'}</div>
        <div class="print-ref"><strong>Ref:</strong> ${d.reportId}<br><strong>Date:</strong> ${d.date}<br><strong>Status:</strong> ${d.systemStatus || 'N/A'}</div>
      </div>

      <div class="print-section">
        <div class="print-section-title">01 · Job Information</div>
        <div class="print-grid">
          ${row('Customer', d.customer)} ${row('Contact', d.contact)}
          ${row('Site Address', d.site)} ${row('City', d.city)}
          ${row('Country', d.country)} ${row('Technician', d.tech)}
          ${row('Service Type', d.serviceType)}
        </div>
        ${mapStaticUrl ? `<div style="margin-top:8px;"><div style="font-size:9px;color:#888;text-transform:uppercase;margin-bottom:4px;">📍 Location Map</div><img src="${mapStaticUrl}" style="width:100%;max-width:560px;height:160px;object-fit:cover;border:1px solid #EEE;border-radius:4px;" onerror="this.style.display='none'" alt="Location Map"><div style="font-size:9px;color:#888;margin-top:3px;">Lat: ${selectedLat ? selectedLat.toFixed(5) : '—'} | Lng: ${selectedLng ? selectedLng.toFixed(5) : '—'}</div></div>` : (d.site && !d.site.startsWith('Lat:') ? `<div style="margin-top:8px;font-size:9px;color:#888;">📍 Address: ${d.site}</div>` : '')}
      </div>

      <div class="print-section">
        <div class="print-section-title">02 · Unit Details</div>
        <div class="print-grid">
          ${row('Brand', d.brand)} ${row('Unit Type', d.unitType)}
          ${row('Outdoor Model', d.outdoorModel)} ${row('Indoor Model', d.indoorModel)}
          ${row('Serial Number', d.serial)} ${row('Install Year', d.installYear)}
        </div>
      </div>

      <div class="print-section">
        <div class="print-section-title">03 · Refrigeration Parameters (R-410A)</div>
        <div class="print-grid">
          ${row('Suction Temp', d.suctionTemp ? d.suctionTemp+'°C' : '')}
          ${row('Suction Pressure', d.suctionPressure ? d.suctionPressure+' PSIG' : '')}
          ${row('Discharge Pressure', d.dischargePressure ? d.dischargePressure+' PSIG' : '')}
          ${row('Discharge Temp', d.dischargeTemp ? d.dischargeTemp+'°C' : '')}
          ${row('Liquid Line Temp', d.liquidLineTemp ? d.liquidLineTemp+'°C' : '')}
          ${row('Ambient Temp', d.ambientTemp ? d.ambientTemp+'°C' : '')}
          ${row('Superheat (calc)', d.superheat !== '—' ? d.superheat+'°C' : '')}
          ${row('Subcooling (calc)', d.subcooling !== '—' ? d.subcooling+'°C' : '')}
          ${row('Sat. Suction Temp', d.satSuction !== '—' ? d.satSuction+'°C' : '')}
          ${row('Sat. Condensing Temp', d.satCond !== '—' ? d.satCond+'°C' : '')}
        </div>
        ${d.refrigNotes ? `<div style="font-size:10px;margin-top:6px;color:#444;"><strong>Notes:</strong> ${d.refrigNotes}</div>` : ''}
      </div>

      <div class="print-section">
        <div class="print-section-title">04 · Electrical Parameters</div>
        <div class="print-grid">
          ${row('Power Supply', d.phase)}
          ${isThree ? row('Voltage L1-L2', d.voltL1 ? d.voltL1+' V' : '') : row('Voltage L-N', d.voltL1 ? d.voltL1+' V' : '')}
          ${isThree ? row('Voltage L2-L3', d.voltL2 ? d.voltL2+' V' : '') : ''}
          ${isThree ? row('Voltage L1-L3', d.voltL3 ? d.voltL3+' V' : '') : ''}
          ${row('Compressor 1 Current', d.comp1 ? d.comp1+' A' : '')}
          ${d.comp2 ? row('Compressor 2 Current', d.comp2+' A') : ''}
          ${row('Indoor Fan / Blower Current', d.indoorMotor ? d.indoorMotor+' A' : '')}
          ${row('Condenser Fan Current', d.condFan ? d.condFan+' A' : '')}
          ${row('HP Switch', d.hpSwitch)} ${row('LP Switch', d.lpSwitch)}
        </div>
      </div>

      <div class="print-section">
        <div class="print-section-title">05 · Airflow & Temperatures</div>
        <div class="print-grid">
          ${row('Supply Air Temp', d.supplyAir ? d.supplyAir+'°C' : '')}
          ${row('Return Air Temp', d.returnAir ? d.returnAir+'°C' : '')}
          ${row('Delta-T', d.deltaT && d.deltaT!=='—' ? d.deltaT+'°C' : '')}
          ${row('ESP Measured', d.esp ? d.esp+' Pa' : '')}
          ${row('Airflow', d.airflow ? d.airflow+' '+d.airflowUnit : '')}
        </div>
        ${d.airflowNotes ? `<div style="font-size:10px;margin-top:6px;color:#444;"><strong>Notes:</strong> ${d.airflowNotes}</div>` : ''}
      </div>

      <div class="print-section">
        <div class="print-section-title">06 · Inspection Checklist</div>
        <div class="print-checklist">
          ${chkBox('condenser_clean','Condenser coil cleaned')}
          ${chkBox('evap_clean','Evaporator coil cleaned')}
          ${chkBox('filter_clean','Air filters cleaned/replaced')}
          ${chkBox('vibration','Vibration check — normal')}
          ${chkBox('drain','Drain pan cleaned')}
          ${chkBox('drain_line','Condensate drain clear')}
          ${chkBox('no_leaks','No visible refrigerant leaks')}
          ${chkBox('no_noise','No abnormal noise')}
          ${chkBox('fins','Condenser/evaporator fins OK')}
          ${chkBox('insulation','Pipe insulation intact')}
          ${chkBox('mounting','Unit mounting/brackets secure')}
          ${chkBox('connections','Electrical connections tightened')}
          ${chkBox('earthing','Earthing/grounding verified')}
          ${chkBox('mcb','MCB/fuses rated correctly')}
          ${chkBox('capacitor','Capacitors checked')}
          ${chkBox('thermostat','Thermostat functional')}
          ${chkBox('modes','All modes tested')}
          ${chkBox('sensors','Temperature sensors verified')}
          ${chkBox('blower_tight','Blower motor mountings & set screws tight')}
          ${chkBox('blower_belt','Blower belt / coupling condition checked')}
        </div>
        ${d.inspNotes ? `<div style="font-size:10px;margin-top:6px;color:#444;"><strong>Remarks:</strong> ${d.inspNotes}</div>` : ''}
      </div>

      <div class="print-section">
        <div class="print-section-title">07 · Site Photographs (${sitePhotos.length} captured)</div>
        ${photosHtml}
      </div>

      ${activeWarnings.length ? `
      <div class="print-section" style="break-inside:avoid;">
        <div class="print-section-title" style="background:#B71C1C;">⚠ System Warnings & Alerts</div>
        <div style="padding:4px 0;">
          ${activeWarnings.map(w => {
            const icon = w.type==='refrig' ? '❄️' : w.type==='electrical' ? '⚡' : '🌬️';
            const color = w.msg.includes('❗') || w.msg.includes('dangerously') ? '#B71C1C' : '#E65100';
            return `<div style="display:flex;align-items:flex-start;gap:6px;padding:4px 0;border-bottom:1px solid #EEE;font-size:10px;">
              <span style="flex-shrink:0;">${icon}</span>
              <span style="color:${color};font-weight:600;">${w.msg.replace(/[❗⚠️❄️⚡🌬️]/g,'').trim()}</span>
            </div>`;
          }).join('')}
        </div>
      </div>` : ''}

      <div class="print-section">
        <div class="print-section-title">08 · Fault Diagnosis</div>
        <div style="margin-bottom:8px;">${row('Active Error Code?', d.hasError)}</div>
        ${errorHtml}
        ${d.errorNotes ? `<div style="font-size:10px;margin-top:8px;color:#444;"><strong>Notes:</strong> ${d.errorNotes}</div>` : ''}
      </div>

      <div class="print-section">
        <div class="print-section-title">09 · Summary & Sign-Off</div>
        <div class="print-grid" style="margin-bottom:8px;">
          ${row('System Status', d.systemStatus)}
          ${row('Next Service Date', d.nextService)}
          ${row('Spare Parts Used', d.spareParts)}
        </div>
        ${d.workSummary ? `<div style="font-size:10px;margin-bottom:6px;"><strong>Work Performed:</strong><br>${d.workSummary}</div>` : ''}
        ${d.recommendations ? `<div style="font-size:10px;margin-bottom:6px;"><strong>Recommendations:</strong><br>${d.recommendations}</div>` : ''}
        <div style="margin-top:10px;">
          <div style="font-size:9px;color:#888;margin-bottom:4px;">Customer Signature:</div>
          ${sigData ? `<img src="${sigData}" style="height:60px;border:1px solid #CCC;border-radius:4px;display:block;">` : '<div class="print-sig"><span style="color:#AAA;font-size:10px;">Not captured</span></div>'}
        </div>
      </div>

      <div class="print-footer">
        ${currentLang === 'ar' ? 'تقرير مُنشأ إلكترونياً — لا يتطلب توقيعاً' : 'ELECTRICALLY GENERATED REPORT — NO SIGNATURE REQUIRED'} &nbsp;|&nbsp; Ref: ${d.reportId} &nbsp;|&nbsp; ${new Date().toLocaleString('en-GB')} &nbsp;|&nbsp; Rheem — Engineered for Life™
      </div>
    </div>
  `;

  // Trigger print dialog unless called silently
  if (!window._skipPrint) setTimeout(() => window.print(), 400);
}


// ===== EMAIL RHEEM =====
function emailRheem() {
  const reportId = document.getElementById('reportId').textContent;
  const customer = document.getElementById('customerName').value || 'N/A';
  const site = document.getElementById('siteAddress').value || 'N/A';
  const tech = document.getElementById('techName').value || 'N/A';
  const date = document.getElementById('serviceDate').value || '';
  const model = document.getElementById('outdoorModel').value || 'N/A';
  const unitType = document.getElementById('unitType').value || '';
  const status = document.getElementById('systemStatusVal').value || 'N/A';
  const serviceType = document.getElementById('serviceTypeVal').value || 'N/A';
  const brand = document.getElementById('brandVal').value || 'Rheem';
  const serial = document.getElementById('serialNumber').value || 'N/A';
  const workSummary = document.getElementById('workSummary').value || 'N/A';
  const recommendations = document.getElementById('recommendations').value || 'N/A';
  const sp = document.getElementById('suctionPressure').value;
  const dp = document.getElementById('dischargePressure').value;
  const sh = document.getElementById('superheatVal').textContent;
  const sc = document.getElementById('subcoolingVal').textContent;
  const dt = document.getElementById('deltaTVal').textContent;
  const comp1 = document.getElementById('compCurrent1').value;
  const v1 = document.getElementById('voltL1').value;
  const errors = addedErrorCodes.length
    ? addedErrorCodes.map(e => `${e.code} - ${e.description}`).join('; ')
    : 'None';
  const spareParts = document.getElementById('spareParts').value || 'None';

  const subject = encodeURIComponent(`Rheem HVAC Service Report - ${reportId} - ${customer}`);
  const body = encodeURIComponent(
`Rheem HVAC Service Report
==========================
Report Reference: ${reportId}
Date: ${date}
Service Type: ${serviceType}

CUSTOMER INFORMATION
Customer Name: ${customer}
Site Location: ${site}
Technician: ${tech}

UNIT DETAILS
Brand: ${brand}
Unit Type: ${unitType}
Model: ${model}
Serial No: ${serial}

REFRIGERATION PARAMETERS (R-410A)
Suction Pressure: ${sp || '—'} PSIG
Discharge Pressure: ${dp || '—'} PSIG
Superheat: ${sh || '—'} °C
Subcooling: ${sc || '—'} °C
Delta-T: ${dt || '—'} °C

ELECTRICAL
Voltage: ${v1 || '—'} V
Compressor Current: ${comp1 || '—'} A

ERROR CODES: ${errors}
SPARE PARTS USED: ${spareParts}

SYSTEM STATUS: ${status}

WORK PERFORMED:
${workSummary}

RECOMMENDATIONS:
${recommendations}

---
This report was generated by the Rheem HVAC Service App.
Rheem — Engineered for Life™`
  );

  const mailtoLink = `mailto:service.sa@rheem.com?subject=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
  showToast('Opening email client for Rheem service...', 'success');
}

// ===== WHATSAPP SHARE =====
function shareWhatsApp() {
  // Build the PDF report first, then share it via Web Share API
  // Fall back to text summary if share API unavailable
  const reportId = document.getElementById('reportId').textContent;
  const printEl = document.getElementById('printReport');

  // Trigger the PDF build first (same as savePDF but without print dialog)
  _buildPDFContent();

  // Use Web Share API if available (mobile) to share the page as PDF
  if (navigator.share && navigator.canShare) {
    // Convert the print content to a blob for sharing
    const htmlContent = printEl.innerHTML;
    const fullDoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Rheem Service Report ${reportId}</title>
    <style>
      body{font-family:Arial,sans-serif;font-size:11px;color:#111;margin:16px;}
      .print-header{display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #CC0000;padding-bottom:10px;margin-bottom:14px;}
      .print-logo{height:44px;} .print-title{font-size:18px;font-weight:800;color:#CC0000;text-transform:uppercase;}
      .print-section{margin-bottom:12px;} .print-section-title{background:#CC0000;color:#fff;padding:4px 10px;font-weight:700;font-size:11px;text-transform:uppercase;margin-bottom:6px;}
      .print-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px 10px;}
      .print-field{border-bottom:1px solid #EEE;padding:3px 0;} .print-label{font-size:8px;color:#888;text-transform:uppercase;}
      .print-value{font-size:11px;font-weight:600;} .print-footer{text-align:center;font-size:8px;color:#999;border-top:1px solid #EEE;padding-top:8px;margin-top:12px;}
      .print-check-item{display:flex;align-items:center;gap:6px;font-size:10px;padding:2px 0;}
      .print-check-box{width:10px;height:10px;border:1px solid #999;display:inline-block;text-align:center;line-height:10px;font-size:8px;}
      .print-check-box.checked{background:#CC0000;border-color:#CC0000;color:#fff;}
      .print-checklist{display:grid;grid-template-columns:1fr 1fr;gap:2px 12px;}
      .print-error-row{display:flex;gap:8px;padding:4px 0;border-bottom:1px solid #EEE;}
      .print-error-code{background:#CC0000;color:#fff;font-weight:700;padding:2px 6px;border-radius:3px;font-size:10px;flex-shrink:0;}
      .print-photos-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}
      .print-photo{width:100%;aspect-ratio:4/3;object-fit:cover;border:1px solid #EEE;border-radius:3px;}
    </style></head><body>${htmlContent}</body></html>`;
    const blob = new Blob([fullDoc], { type: 'text/html' });
    const file = new File([blob], `Rheem_Report_${reportId}.html`, { type: 'text/html' });
    if (navigator.canShare({ files: [file] })) {
      navigator.share({
        title: `Rheem Service Report ${reportId}`,
        text: 'Please find the HVAC service report attached.',
        files: [file]
      }).catch(() => _whatsAppFallback(reportId));
      return;
    }
  }
  _whatsAppFallback(reportId);
}

function _buildPDFContent() {
  // Calls savePDF logic without triggering print
  const temp = window._skipPrint;
  window._skipPrint = true;
  savePDF();
  window._skipPrint = temp;
}

function _whatsAppFallback(reportId) {
  // Fallback: send formatted text summary to WhatsApp
  const customer = document.getElementById('customerName').value || 'N/A';
  const site = document.getElementById('siteAddress').value || 'N/A';
  const tech = document.getElementById('techName').value || 'N/A';
  const date = document.getElementById('serviceDate').value || '';
  const model = document.getElementById('outdoorModel').value || 'N/A';
  const unitType = document.getElementById('unitType').value || '';
  const status = document.getElementById('systemStatusVal').value || 'N/A';
  const serviceType = document.getElementById('serviceTypeVal').value || 'N/A';

  const sp = document.getElementById('suctionPressure').value;
  const dp = document.getElementById('dischargePressure').value;
  const sh = document.getElementById('superheatVal').textContent;
  const sc = document.getElementById('subcoolingVal').textContent;
  const dt = document.getElementById('deltaTVal').textContent;

  const isThree = (document.getElementById('phaseVal').value || '').includes('Three');
  const v1 = document.getElementById('voltL1').value;
  const v2 = document.getElementById('voltL2').value;
  const v3 = document.getElementById('voltL3').value;
  const comp1 = document.getElementById('compCurrent1').value;
  const blower = document.getElementById('indoorMotorCurrent').value;

  const inv = sitePhotos.filter(p=>p.category==='invoice').length;
  const invStr = inv > 0 ? `\n• Invoice/Warranty docs: ${inv} attached` : '';
  const errors = addedErrorCodes.length
    ? addedErrorCodes.map(e => `${e.code} (${e.description})`).join(', ')
    : 'None';

  const voltStr = isThree
    ? `L1-L2: ${v1||'—'}V | L2-L3: ${v2||'—'}V | L1-L3: ${v3||'—'}V`
    : `L-N: ${v1||'—'}V`;

  const msg =
`🔧 *Rheem HVAC Service Report*
📋 Ref: ${reportId} | ${date}

👤 *Customer:* ${customer}
📍 *Site:* ${site}
👷 *Technician:* ${tech}
🔧 *Service Type:* ${serviceType}

🏭 *Unit:* ${unitType} — ${model}
📊 *System Status:* ${status}

❄️ *Refrigeration (R-410A)*
• Suction: ${sp||'—'} PSIG | Discharge: ${dp||'—'} PSIG
• Superheat: ${sh||'—'} °C | Subcooling: ${sc||'—'} °C
• Delta-T: ${dt||'—'} °C

⚡ *Electrical*
• ${voltStr}
• Compressor: ${comp1||'—'} A | Blower: ${blower||'—'} A

⚠️ *Error Codes:* ${errors}${invStr}

_Generated by Rheem Service App — Engineered for Life™_`;

  const url = 'https://wa.me/?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
}

// ===== PWA INSTALL PROMPT =====
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  // Banner is already visible by default; store prompt for later use
});

// Hide banner if app is running in standalone (already installed)
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
  const banner = document.getElementById('installBanner');
  if (banner) banner.style.display = 'none';
}

function installApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(choice => {
      const banner = document.getElementById('installBanner');
      if (banner) banner.style.display = 'none';
      deferredInstallPrompt = null;
    });
  } else {
    // iOS instructions
    showToast('On iOS: tap the Share button then "Add to Home Screen"', 'success');
  }
}

window.addEventListener('appinstalled', () => {
  const banner = document.getElementById('installBanner');
  if (banner) banner.style.display = 'none';
  showToast('✅ Rheem Service App installed!', 'success');
});

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
