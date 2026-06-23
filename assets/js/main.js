import { site } from "../../config/site.js";

const company = {
  nameAr: "امتثال الهندسية للاستشارات الأمن والسلامة",
  nameEn: "Emtithal Engineering - Security & Safety Consultancy",
};
const VAT_RATE = 0.15;

// Reusable VAT calculation function
function calculateVAT(amount, vatIncluded = false) {
  if (vatIncluded) {
    // Amount includes VAT, extract base and VAT
    const base = amount / (1 + VAT_RATE);
    const vat = amount - base;
    return { base, vat, total: amount };
  } else {
    // Amount is before VAT, add VAT
    const vat = amount * VAT_RATE;
    const total = amount + vat;
    return { base: amount, vat, total };
  }
}

const services = [
  {
    slug: "instant-technical-report",
    icon: "▤",
    name: "تقرير فني فوري",
    en: "Instant Technical Report",
    priceLabel: "517.50 ريال شامل الضريبة",
    basePrice: 450,
    description: "تقرير فني سريع للمنشآت المستوفية للمتطلبات الأساسية خلال 24 ساعة.",
    features: ["تسليم خلال 24 ساعة", "معتمد عبر بلدي / سلامة", "مسار واضح بدون تعقيد"],
    docs: [
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "عقد الإيجار", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "العنوان الوطني", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "رخصة البلدية المنتهية", required: false, label: "رخصة البلدية المنتهية (اختياري - مطلوب فقط في حال التجديد)", types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: true,
    pricingType: "fixed",
    vatIncluded: false
  },
  {
    slug: "non-instant-technical-report",
    icon: "▦",
    name: "تقرير فني غير فوري",
    en: "Non-Instant Technical Report",
    priceLabel: "يحسب حسب مساحة المحل",
    description: "تقرير فني شامل يتطلب مراجعة مخططات وشهادات مطابقة وإنهاء أعمال.",
    features: ["تسعير تلقائي حسب المساحة", "مراجعة هندسية منظمة", "متابعة حتى اكتمال الطلب"],
    docs: [
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "عقد الإيجار", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "العنوان الوطني", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "رخصة البلدية المنتهية", required: true, types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: true,
    pricingType: "area",
    vatIncluded: false
  },
  {
    slug: "safety-equipment-certificate",
    icon: "✓",
    name: "شهادة أدوات السلامة والوقاية من الحريق",
    en: "Safety Equipment Certificate",
    priceLabel: "287.50 ريال شامل الضريبة",
    basePrice: 250,
    description: "إصدار شهادة منظمة لأدوات وأنظمة السلامة والوقاية من الحريق للمنشآت.",
    features: ["تدقيق بيانات المنشأة", "شهادة منظمة", "مناسبة للمتطلبات التشغيلية"],
    docs: [
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "عقد الإيجار", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "العنوان الوطني", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "رخصة البلدية", required: false, label: "رخصة البلدية (اختياري - مطلوب فقط في حال التجديد)", types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: true,
    pricingType: "fixed",
    vatIncluded: false
  },
  {
    slug: "civil-defense-license-renewal",
    icon: "↻",
    name: "تجديد رخصة الدفاع المدني",
    en: "Civil Defense License Renewal",
    priceLabel: "تواصل عبر الواتساب",
    description: "متابعة تجديد ترخيص الدفاع المدني للمنشآت مع تنظيم مستندات السلامة السابقة.",
    features: ["تواصل مباشر عبر واتساب", "إرسال المستندات للمسؤول", "متابعة يدوية"],
    docs: [
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "التقرير الفني", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "شهادة تركيب الكاميرات", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "رخصة البلدية", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "عقد الإيجار", required: true, types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: false,
    pricingType: "whatsapp",
    whatsappMessage: "السلام عليكم، أرغب في تجديد رخصة الدفاع المدني."
  },
  {
    slug: "maintenance-contract",
    icon: "▣",
    name: "عقد صيانة",
    en: "Maintenance Contract",
    priceLabel: "حسب نطاق العمل",
    description: "تنظيم عقود الصيانة المطلوبة لأنظمة السلامة والوقاية.",
    features: ["مراجعة نطاق المنشأة", "متابعة مستندية", "تواصل سريع"],
    docs: [
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "رخصة بلدي", required: true, types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: true,
    pricingType: "custom",
    vatIncluded: false
  },
  {
    slug: "engineering-drawing",
    icon: "⌁",
    name: "مخطط هندسي",
    en: "Engineering Drawing",
    priceLabel: "يحسب حسب مساحة المشروع",
    description: "إعداد أو مراجعة المخططات الهندسية المرتبطة بمتطلبات السلامة.",
    features: ["مراجعة متطلبات الموقع", "تنسيق فني", "إخراج واضح"],
    docs: [
      { name: "رخصة الإنشاء", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: true,
    pricingType: "area",
    vatIncluded: false
  },
  {
    slug: "completion-certificate",
    icon: "✓",
    name: "شهادة الانهاء ومطابقة الاعمال",
    en: "Completion Certificate",
    priceLabel: "1500 ريال شامل الضريبة",
    basePrice: 1500,
    description: "إصدار شهادة إنهاء ومطابقة الأعمال للمشاريع الهندسية.",
    features: ["شهادة معتمدة", "مراجعة شاملة", "تسليم سريع"],
    docs: [
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "مخطط السلامة الهندسي", required: true, types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: true,
    pricingType: "fixed",
    vatIncluded: true
  },
  {
    slug: "electrical-extension-certificate",
    icon: "⚡",
    name: "شهادة سلامة تمديدات كهربائية",
    en: "Electrical Extension Safety Certificate",
    priceLabel: "يحسب حسب مساحة المشروع",
    description: "إصدار شهادة سلامة للتمديدات الكهربائية حسب المساحة.",
    features: ["فحص شامل", "شهادة معتمدة", "تسليم سريع"],
    docs: [
      { name: "السجل التجاري", required: true, types: ["PDF", "JPG", "PNG"] },
      { name: "المعاينة الهندسية", required: true, types: ["PDF", "JPG", "PNG"] }
    ],
    requiresPayment: true,
    pricingType: "area",
    vatIncluded: true
  }
];

const pricingTiers = [
  { max: 100, price: 608.70, label: "1-100 متر" },
  { max: 200, price: 695.65, label: "100-200 متر" },
  { max: 300, price: 782.61, label: "200-300 متر" },
  { max: 500, price: 869.57, label: "300-500 متر" },
  { max: 1000, price: 1304.35, label: "500-1000 متر" },
  { max: Infinity, price: 1739.13, label: "فوق 1000 متر" },
];

// Engineering drawing pricing tiers (before VAT)
const engineeringDrawingTiers = [
  { max: 200, price: 1500, label: "1-200 متر" },
  { max: 500, price: 1800, label: "200-500 متر" },
  { max: 700, price: 2300, label: "500-700 متر" },
  { max: 1000, price: 2700, label: "700-1000 متر" },
  { max: Infinity, price: null, label: "فوق 1000 متر" },
];

// Electrical extension certificate pricing tiers (VAT inclusive)
const electricalExtensionTiers = [
  { max: 100, price: 700, label: "1-100 متر" },
  { max: 350, price: 800, label: "100-350 متر" },
  { max: 500, price: 1000, label: "350-500 متر" },
  { max: 1000, price: 1250, label: "500-1000 متر" },
  { max: Infinity, price: 2000, label: "فوق 1000 متر" },
];

let selectedService = services[0];
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const formatSar = (value) => `${Number(value).toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 })} ريال`;
const uploadId = (index) => `required-upload-${index}`;

function whatsappUrl(message) {
  const number = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number || "{{WHATSAPP}}"}?text=${encodeURIComponent(message)}`;
}

function configureSite() {
  $$('[data-site="email"]').forEach((el) => { el.textContent = site.email; el.href = `mailto:${site.email}`; });
  $$('[data-site="phone"]').forEach((el) => { el.textContent = site.phone; el.href = `tel:${site.phone}`; });
  $$('[data-site="address"]').forEach((el) => { el.textContent = site.address; });
  $$('[data-site="company"]').forEach((el) => { el.textContent = company.nameAr; });
  $$('[data-whatsapp]').forEach((el) => { el.href = whatsappUrl(el.dataset.whatsapp || "السلام عليكم، أرغب في طلب خدمة من امتثال الهندسية."); });
}

function serviceCard(service) {
  return `<article class="card service-card"><div class="icon" aria-hidden="true">${service.icon}</div><h3>${service.name}</h3><p>${service.description}</p><div class="price">${service.priceLabel}</div><button class="btn primary" type="button" data-service="${service.slug}" data-route="service-details">عرض التفاصيل</button></article>`;
}

function renderServices() {
  $$('[data-services]').forEach((el) => { el.innerHTML = services.map(serviceCard).join(""); });
}

function serviceQuote(service, area = 0) {
  // Handle WhatsApp-only services
  if (service.pricingType === "whatsapp") {
    return { base: 0, vat: 0, total: 0, tier: "تواصل عبر الواتساب", priced: false };
  }

  // Handle custom pricing (maintenance contract)
  if (service.pricingType === "custom") {
    return { base: 0, vat: 0, total: 0, tier: "يحدد بعد المراجعة", priced: false };
  }

  // Handle area-based pricing for non-instant technical report
  if (service.slug === "non-instant-technical-report") {
    const tier = pricingTiers.find((item) => area <= item.max) || pricingTiers.at(-1);
    const vatCalc = calculateVAT(tier.price, service.vatIncluded);
    return { base: vatCalc.base, vat: vatCalc.vat, total: vatCalc.total, tier: tier.label, priced: true };
  }

  // Handle area-based pricing for engineering drawing
  if (service.slug === "engineering-drawing") {
    const tier = engineeringDrawingTiers.find((item) => area <= item.max) || engineeringDrawingTiers.at(-1);
    if (tier.price === null) {
      return { base: 0, vat: 0, total: 0, tier: "سيتم مراجعة السعر من قبل الفريق المختص", priced: false };
    }
    const vatCalc = calculateVAT(tier.price, service.vatIncluded);
    return { base: vatCalc.base, vat: vatCalc.vat, total: vatCalc.total, tier: tier.label, priced: true };
  }

  // Handle area-based pricing for electrical extension certificate
  if (service.slug === "electrical-extension-certificate") {
    const tier = electricalExtensionTiers.find((item) => area <= item.max) || electricalExtensionTiers.at(-1);
    const vatCalc = calculateVAT(tier.price, service.vatIncluded);
    return { base: vatCalc.base, vat: vatCalc.vat, total: vatCalc.total, tier: tier.label, priced: true };
  }

  // Handle fixed pricing
  if (service.basePrice) {
    const vatCalc = calculateVAT(service.basePrice, service.vatIncluded);
    return { base: vatCalc.base, vat: vatCalc.vat, total: vatCalc.total, tier: "سعر ثابت", priced: true };
  }

  return { base: 0, vat: 0, total: 0, tier: "يحدد بعد المراجعة", priced: false };
}

function updatePrice() {
  const area = Number($("#shopArea")?.value || 0);
  const quote = serviceQuote(selectedService, area);
  $$('[data-price-tier]').forEach((el) => { el.textContent = quote.tier; });
  $$('[data-price-base]').forEach((el) => { el.textContent = quote.priced ? formatSar(quote.base) : "يحدد بعد المراجعة"; });
  $$('[data-price-vat]').forEach((el) => { el.textContent = quote.priced ? formatSar(quote.vat) : "-"; });
  $$('[data-price-total]').forEach((el) => { el.textContent = quote.priced ? formatSar(quote.total) : "يحدد بعد المراجعة"; });
  if ($("#priceNote")) {
    if (selectedService.pricingType === "whatsapp") {
      $("#priceNote").textContent = "هذه الخدمة تتطلب التواصل عبر واتساب مباشرة.";
    } else if (selectedService.pricingType === "custom") {
      $("#priceNote").textContent = "سيتم تحديد السعر والضريبة بعد مراجعة نطاق الخدمة.";
    } else if (quote.priced) {
      $("#priceNote").textContent = "يتم حساب الضريبة تلقائيا بنسبة 15%.";
    } else {
      $("#priceNote").textContent = "سيتم تحديد السعر والضريبة بعد مراجعة نطاق الخدمة.";
    }
  }
}

function getDocumentIcon(docName) {
  const baladiDocs = ["رخصة الإنشاء", "رخصة البلدية", "بيانات الموقع", "مخطط الموقع"];
  const commerceDocs = ["السجل التجاري"];
  const civilDefenseDocs = ["صورة لأنظمة السلامة", "مخطط السلامة", "شهادة المطابقة وإنهاء الأعمال", "شهادة السلامة السابقة"];
  const nationalAddressDocs = ["العنوان الوطني"];
  const leaseDocs = ["عقد الإيجار"];

  if (nationalAddressDocs.includes(docName)) return "assets/icons/العنوان الوطني.png";
  if (leaseDocs.includes(docName)) return "assets/icons/ايجار.png";
  if (baladiDocs.includes(docName)) return "assets/icons/شعار بلدي.png";
  if (commerceDocs.includes(docName)) return "assets/icons/شعار وزارة التجارة.png";
  if (civilDefenseDocs.includes(docName)) return "assets/icons/شعار الدفاع المدني.png";
  return "assets/icons/شعار بلدي.png";
}

function renderDocuments() {
  const docs = selectedService.docs || [];
  const docsList = docs.map((doc) => {
    const docName = typeof doc === 'string' ? doc : doc.name;
    const isRequired = typeof doc === 'string' ? true : doc.required;
    return `<li><span>${docName}</span><span class="badge">${isRequired ? 'مطلوب' : 'اختياري'}</span></li>`;
  }).join("");
  $("#detailDocuments").innerHTML = docsList;

  const uploadsHtml = docs.map((doc, index) => {
    const docName = typeof doc === 'string' ? doc : doc.name;
    const docLabel = typeof doc === 'string' ? doc : (doc.label || doc.name);
    const isRequired = typeof doc === 'string' ? true : doc.required;
    const docTypes = typeof doc === 'string' ? ['PDF', 'JPG', 'PNG'] : doc.types;
    const acceptTypes = docTypes.map(t => t.toLowerCase()).join(',');
    const typesText = docTypes.join(' / ');

    return `
    <div class="upload-field" data-required="${isRequired}" data-index="${index}">
      <label for="${uploadId(index)}">${docLabel} ${isRequired ? '<span class="required-star">*</span>' : '<span class="optional-text">(اختياري)</span>'}</label>
      <p class="upload-types">${typesText}</p>
      <div class="upload-zone" id="upload-zone-${index}">
        <div class="upload-icon"><img src="${getDocumentIcon(docName)}" alt="${docName}" class="doc-icon"></div>
        <p class="upload-text">اسحب الملف هنا أو انقر للاختيار</p>
        <p class="upload-subtext">${typesText} (الحد الأقصى 10MB)</p>
        <input id="${uploadId(index)}" name="documents[]" type="file" accept=".${acceptTypes.replace(/,/g, ',.')}" data-index="${index}" ${isRequired ? 'required' : ''}>
      </div>
      <div class="file-info" id="file-info-${index}">
        <div class="file-info-icon"><img src="${getDocumentIcon(docName)}" alt="${docName}" class="doc-icon"></div>
        <div class="file-info-details">
          <div class="file-info-name" id="file-name-${index}"></div>
          <div class="file-info-size" id="file-size-${index}"></div>
        </div>
        <button class="file-info-remove" type="button" data-index="${index}" aria-label="حذف الملف">✕</button>
      </div>
    </div>
  `;
  }).join("");

  $("#requiredUploads").innerHTML = uploadsHtml;

  // Initialize drag and drop for each upload zone
  docs.forEach((_, index) => {
    initDragAndDrop(index);
  });
}

function initDragAndDrop(index) {
  const zone = document.getElementById(`upload-zone-${index}`);
  const input = document.getElementById(uploadId(index));
  const fileInfo = document.getElementById(`file-info-${index}`);
  const removeBtn = document.querySelector(`.file-info-remove[data-index="${index}"]`);

  if (!zone || !input) return;

  // Drag events
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('dragover');
  });

  zone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    zone.classList.remove('dragover');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      input.files = files;
      handleFileSelect(index, files[0]);
    }
  });

  // File input change
  input.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(index, e.target.files[0]);
    }
  });

  // Remove button
  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      input.value = '';
      zone.classList.remove('has-file');
      fileInfo.classList.remove('show');
    });
  }
}

function handleFileSelect(index, file) {
  const zone = document.getElementById(`upload-zone-${index}`);
  const fileInfo = document.getElementById(`file-info-${index}`);
  const fileName = document.getElementById(`file-name-${index}`);
  const fileSize = document.getElementById(`file-size-${index}`);

  if (!zone || !fileInfo || !fileName || !fileSize) return;

  zone.classList.add('has-file');
  fileName.textContent = file.name;
  fileSize.textContent = formatFileSize(file.size);
  fileInfo.classList.add('show');
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function fillServiceDetails() {
  $("#detailTitle").textContent = selectedService.name;
  $("#detailDesc").textContent = selectedService.description;
  $("#selectedServiceInput").value = selectedService.name;

  // Handle WhatsApp-only services
  if (selectedService.pricingType === "whatsapp") {
    const whatsappMessage = selectedService.whatsappMessage || `السلام عليكم، أرغب في التقديم على خدمة ${selectedService.name} وإرسال المستندات المطلوبة.`;
    $("#manualRequestAction").href = whatsappUrl(whatsappMessage);
    $("#renewalWhatsApp").href = whatsappUrl(whatsappMessage);

    // Hide electronic request option for WhatsApp-only services
    if ($("#electronicRequestAction")) {
      $("#electronicRequestAction").parentElement.style.display = "none";
    }
  } else {
    const manualMessage = `السلام عليكم، أرغب في التقديم على خدمة ${selectedService.name} وإرسال المستندات المطلوبة.`;
    $("#manualRequestAction").href = whatsappUrl(manualMessage);
    $("#renewalWhatsApp").href = whatsappUrl(manualMessage);

    // Show electronic request option for other services
    if ($("#electronicRequestAction")) {
      $("#electronicRequestAction").parentElement.style.display = "block";
      // Change electronic request to redirect to coming soon page
      $("#electronicRequestAction").setAttribute("data-route", "electronic-coming-soon");
    }
  }

  // Show/hide shop area field based on service
  if ($("#shopAreaField")) {
    const areaBasedServices = ["non-instant-technical-report", "engineering-drawing", "electrical-extension-certificate"];
    $("#shopAreaField").style.display = areaBasedServices.includes(selectedService.slug) ? "grid" : "none";
  }

  renderDocuments();
  updatePrice();
}

function route(id) {
  $$(".page").forEach((page) => page.classList.remove("active"));
  const next = $(`#${id}`) || $("#home");
  next.classList.add("active");
  $$(".navlinks a").forEach((link) => link.classList.toggle("active", link.dataset.route === id));
  $("#navlinks").classList.remove("open");
  if (id === "service-details" || id === "request") fillServiceDetails();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getServicePrefix(serviceSlug) {
  const prefixes = {
    "instant-technical-report": 100,
    "non-instant-technical-report": 200,
    "safety-equipment-certificate": 300,
    "civil-defense-license-renewal": 400,
    "maintenance-contract": 500,
    "engineering-drawing": 600,
    "completion-certificate": 700,
    "electrical-extension-certificate": 800,
  };
  return prefixes[serviceSlug] || 100;
}

function generateRequestNumber() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const dateKey = `${day}${month}${year}`;
  const prefix = getServicePrefix(selectedService.slug);

  // Get last sequence number for this service and date
  const storageKey = `emtithal-sequence-${selectedService.slug}-${dateKey}`;
  let lastSequence = parseInt(localStorage.getItem(storageKey) || "0");
  lastSequence++;
  localStorage.setItem(storageKey, lastSequence.toString());

  const sequence = String(lastSequence).padStart(2, "0");
  return `${prefix}${day}${month}${year}${sequence}`;
}

function handleSubmit(event) {
  event.preventDefault();

  // Validate phone number
  const phoneNumber = $("#phoneNumber")?.value?.trim() || "";
  const phoneRegex = /^5\d{8}$/;

  if (!phoneRegex.test(phoneNumber)) {
    alert("رقم الجوال غير صحيح. يجب أن يبدأ بـ 5 ويتكون من 9 أرقام.");
    return;
  }

  // Check if all required documents are uploaded
  const docs = selectedService.docs || [];
  const uploadInputs = $$('input[name="documents[]"]');
  const missingDocs = [];
  const uploadedFiles = [];

  docs.forEach((doc, index) => {
    const docName = typeof doc === 'string' ? doc : doc.name;
    const isRequired = typeof doc === 'string' ? true : doc.required;
    const input = document.getElementById(uploadId(index));

    if (isRequired) {
      if (!input || !input.files || input.files.length === 0) {
        missingDocs.push(docName);
      } else {
        uploadedFiles.push(docName);
      }
    } else {
      // Optional document
      if (input && input.files && input.files.length > 0) {
        uploadedFiles.push(docName);
      }
    }
  });

  if (missingDocs.length > 0) {
    alert(`يرجى إرفاق جميع المستندات المطلوبة:\n${missingDocs.map(doc => `• ${doc}`).join('\n')}`);
    return;
  }

  // Check VAT invoice request
  const requestVatInvoice = $("#vatInvoiceYes")?.checked;
  let vatInvoiceData = null;

  if (requestVatInvoice) {
    const companyName = $("#companyName")?.value?.trim() || "";
    const companyCr = $("#companyCr")?.value?.trim() || "";
    const companyVat = $("#companyVat")?.value?.trim() || "";
    const companyPhone = $("#companyPhone")?.value?.trim() || "";
    const companyPhoneRegex = /^5\d{8}$/;

    if (!companyName || !companyCr || !companyVat || !companyPhone) {
      alert("يرجى ملء جميع حقول معلومات الفاتورة الضريبية.");
      return;
    }

    if (!companyPhoneRegex.test(companyPhone)) {
      alert("رقم جوال الشركة غير صحيح. يجب أن يبدأ بـ 5 ويتكون من 9 أرقام.");
      return;
    }

    vatInvoiceData = {
      companyName,
      companyCr,
      companyVat,
      companyPhone: `+966${companyPhone}`
    };
  }

  // Show summary before submission
  const summary = `
الخدمة المطلوبة:
${selectedService.name}

المرفقات:
${uploadedFiles.map(doc => `• ${doc}`).join('\n')}

${requestVatInvoice ? `
طلب فاتورة ضريبية: نعم
اسم الشركة: ${vatInvoiceData.companyName}
رقم السجل التجاري: ${vatInvoiceData.companyCr}
الرقم الضريبي: ${vatInvoiceData.companyVat}
` : 'طلب فاتورة ضريبية: لا'}
  `;

  if (!confirm(`هل تريد إرسال الطلب؟\n\n${summary}`)) {
    return;
  }

  // Collect form data
  const formData = {
    phoneNumber: phoneNumber,
    shopArea: $("#shopArea")?.value || "",
  };

  // Calculate price
  const area = Number(formData.shopArea || 0);
  const quote = serviceQuote(selectedService, area);
  const total = quote.total;

  // Generate request number
  const number = generateRequestNumber();

  // Create request object
  const request = {
    id: number,
    service: selectedService.slug,
    serviceName: selectedService.name,
    phone: formData.phoneNumber,
    shopArea: formData.shopArea,
    documents: uploadedFiles,
    amount: total,
    priceBreakdown: quote,
    requestVatInvoice,
    vatInvoiceData,
    paymentStatus: "PENDING_PAYMENT",
    requestStatus: "NEW",
    createdAt: new Date().toISOString(),
  };

  // Save request to localStorage
  localStorage.setItem("emtithal-current-request", JSON.stringify(request));
  localStorage.setItem("emtithal-last-request", JSON.stringify({ number, service: selectedService.name, createdAt: new Date().toISOString() }));

  // Check if service requires payment
  if (selectedService.requiresPayment) {
    // Redirect to payment page
    fillPaymentDetails(request);
    route("payment");
  } else {
    // For services without payment (like Civil Defense renewal)
    $("#generatedNumber").textContent = number;
    $("#trackInput").value = number;
    route("request-success");
  }
}

function fillPaymentDetails(request) {
  $("#paymentRequestNumber").textContent = request.id;
  $("#paymentServiceName").textContent = request.serviceName;
  $("#paymentCustomerPhone").textContent = request.phone;
  $("#paymentAmount").textContent = formatSar(request.amount);

  // Display uploaded documents
  if (request.documents && request.documents.length > 0) {
    $("#paymentDocuments").textContent = request.documents.join(', ');
  } else {
    $("#paymentDocuments").textContent = 'لا يوجد مرفقات';
  }

  // Display VAT breakdown if available
  if (request.priceBreakdown) {
    if ($("#paymentPriceBase")) $("#paymentPriceBase").textContent = formatSar(request.priceBreakdown.base);
    if ($("#paymentPriceVat")) $("#paymentPriceVat").textContent = formatSar(request.priceBreakdown.vat);
  }

  // Display VAT invoice information if requested
  if (request.requestVatInvoice && request.vatInvoiceData) {
    $("#paymentVatInfo").style.display = 'block';
    $("#paymentCompanyName").textContent = request.vatInvoiceData.companyName;
    $("#paymentCompanyCr").textContent = request.vatInvoiceData.companyCr;
    $("#paymentCompanyVat").textContent = request.vatInvoiceData.companyVat;
  } else {
    $("#paymentVatInfo").style.display = 'none';
  }
}

function handlePayment(event) {
  event.preventDefault();

  const request = JSON.parse(localStorage.getItem("emtithal-current-request") || "{}");
  if (!request.id) {
    alert("لم يتم العثور على الطلب. يرجى تقديم طلب جديد.");
    route("home");
    return;
  }

  // Simulate payment processing
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "card";

  // Simulate payment success (80% success rate for demo)
  const paymentSuccess = Math.random() > 0.2;

  if (paymentSuccess) {
    // Update request status
    request.paymentStatus = "PAID";
    request.requestStatus = "UNDER_REVIEW";
    request.paidAt = new Date().toISOString();
    request.paymentMethod = paymentMethod;

    // Generate VAT invoice if requested
    if (request.requestVatInvoice && request.vatInvoiceData) {
      const invoiceNumber = generateInvoiceNumber();
      request.invoiceNumber = invoiceNumber;
      request.invoiceGeneratedAt = new Date().toISOString();

      // Save invoice data
      const invoice = {
        invoiceNumber,
        requestId: request.id,
        serviceName: request.serviceName,
        amount: request.amount,
        customerData: request.vatInvoiceData,
        createdAt: new Date().toISOString()
      };

      // Save invoice to localStorage
      const existingInvoices = JSON.parse(localStorage.getItem("emtithal-invoices") || "[]");
      existingInvoices.push(invoice);
      localStorage.setItem("emtithal-invoices", JSON.stringify(existingInvoices));
    }

    // Save updated request
    localStorage.setItem("emtithal-current-request", JSON.stringify(request));

    // Update success page
    $("#successRequestNumber").textContent = request.id;
    $("#successServiceName").textContent = request.serviceName;
    $("#successAmount").textContent = formatSar(request.amount);

    // Show invoice download button if invoice was generated
    if (request.invoiceNumber) {
      const invoiceButton = document.createElement('button');
      invoiceButton.className = 'btn primary';
      invoiceButton.style.marginTop = '20px';
      invoiceButton.style.width = '100%';
      invoiceButton.textContent = `تحميل فاتورة ضريبية (${request.invoiceNumber})`;
      invoiceButton.onclick = () => generateVatInvoicePDF(request);
      $("#payment-success .card").appendChild(invoiceButton);
    }

    route("payment-success");
  } else {
    // Update request status
    request.paymentStatus = "FAILED";
    request.failedAt = new Date().toISOString();
    request.paymentMethod = paymentMethod;

    // Save updated request
    localStorage.setItem("emtithal-current-request", JSON.stringify(request));

    route("payment-failed");
  }
}

// Generate invoice number
function generateInvoiceNumber() {
  const year = new Date().getFullYear();
  const existingInvoices = JSON.parse(localStorage.getItem("emtithal-invoices") || "[]");
  const sequence = existingInvoices.length + 1;
  const paddedSequence = String(sequence).padStart(5, '0');
  return `INV-${year}-${paddedSequence}`;
}

// Generate VAT invoice PDF
function generateVatInvoicePDF(request) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Supplier information
  const supplierName = "شركة بناء وإعمار الشام العقارية";
  const supplierCr = "7051651839";
  const supplierVat = "314228399600003";

  // Customer information
  const customerData = request.vatInvoiceData;

  // Calculate amounts
  const basePrice = request.amount / (1 + VAT_RATE);
  const vatAmount = request.amount - basePrice;

  // Set font for Arabic (using default font for now)
  doc.setFont('helvetica');

  // Add title
  doc.setFontSize(24);
  doc.setTextColor(54, 185, 140); // Brand green
  doc.text('فاتورة ضريبية', 105, 20, { align: 'center' });
  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text('VAT Invoice', 105, 28, { align: 'center' });

  // Invoice number and date
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text(`رقم الفاتورة: ${request.invoiceNumber}`, 20, 45);
  doc.text(`التاريخ: ${new Date().toLocaleDateString('ar-SA')}`, 20, 52);

  // Supplier section
  doc.setFontSize(12);
  doc.setTextColor(54, 185, 140);
  doc.text('معلومات المورد', 20, 70);
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text(`اسم الشركة: ${supplierName}`, 20, 80);
  doc.text(`رقم السجل التجاري: ${supplierCr}`, 20, 87);
  doc.text(`الرقم الضريبي: ${supplierVat}`, 20, 94);

  // Customer section
  doc.setFontSize(12);
  doc.setTextColor(54, 185, 140);
  doc.text('معلومات العميل', 20, 115);
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text(`اسم الشركة: ${customerData.companyName}`, 20, 125);
  doc.text(`رقم السجل التجاري: ${customerData.companyCr}`, 20, 132);
  doc.text(`الرقم الضريبي: ${customerData.companyVat}`, 20, 139);
  doc.text(`رقم الجوال: ${customerData.companyPhone}`, 20, 146);

  // Items table header
  doc.setFontSize(12);
  doc.setTextColor(54, 185, 140);
  doc.text('تفاصيل الخدمة', 20, 170);

  // Table headers
  doc.setFontSize(9);
  doc.setTextColor(0);
  doc.setFillColor(240, 240, 240);
  doc.rect(20, 180, 170, 8, 'F');
  doc.text('المنتج', 22, 186);
  doc.text('الوصف', 70, 186);
  doc.text('الكمية', 110, 186);
  doc.text('السعر', 130, 186);
  doc.text('الضريبة', 150, 186);
  doc.text('المجموع', 170, 186);

  // Service item
  doc.text(request.serviceName, 22, 200);
  doc.text('خدمة هندسية', 70, 200);
  doc.text('1', 110, 200);
  doc.text(formatSar(basePrice), 130, 200);
  doc.text(formatSar(vatAmount), 150, 200);
  doc.text(formatSar(request.amount), 170, 200);

  // Totals
  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text(`مجموع الفرعي: ${formatSar(basePrice)}`, 120, 230);
  doc.text(`إجمالي ضريبة القيمة المضافة (${VAT_RATE * 100}%): ${formatSar(vatAmount)}`, 120, 240);
  doc.setFontSize(12);
  doc.setTextColor(54, 185, 140);
  doc.text(`الإجمالي: ${formatSar(request.amount)}`, 120, 255);

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text('شكراً لاختياركم مكتب امتثال الهندسية', 105, 280, { align: 'center' });
  doc.text('Thank you for choosing Emtithal Engineering Office', 105, 287, { align: 'center' });
  doc.text('Email: info.emtithal@gmail.com', 105, 294, { align: 'center' });

  // Save PDF
  doc.save(`${request.invoiceNumber}.pdf`);
}

function handleTrack(event) {
  event.preventDefault();
  const value = $("#trackInput").value.trim() || "EMT-2026-250184";

  // Try to find the request in localStorage
  const currentRequest = JSON.parse(localStorage.getItem("emtithal-current-request") || "{}");

  if (currentRequest.id === value) {
    // Display actual request data
    $("#trackNumber").textContent = currentRequest.id;
    $("#trackResult").querySelector(".status").textContent = getPaymentStatusText(currentRequest.paymentStatus);
    $("#trackResult").querySelector(".status").className = `status ${getPaymentStatusClass(currentRequest.paymentStatus)}`;

    // Update timeline based on request status
    updateTrackTimeline(currentRequest);
  } else {
    // Display demo data for unknown requests
    $("#trackNumber").textContent = value;
    $("#trackResult").querySelector(".status").textContent = "قيد المراجعة الهندسية";
    $("#trackResult").querySelector(".status").className = "status";
  }

  $("#trackResult").hidden = false;
}

function getPaymentStatusText(status) {
  const statusMap = {
    "PENDING_PAYMENT": "قيد انتظار الدفع",
    "PAID": "مدفوع",
    "FAILED": "فشل الدفع",
  };
  return statusMap[status] || "غير معروف";
}

function getPaymentStatusClass(status) {
  const classMap = {
    "PENDING_PAYMENT": "pending",
    "PAID": "paid",
    "FAILED": "failed",
  };
  return classMap[status] || "";
}

function updateTrackTimeline(request) {
  const steps = $$("#trackResult .step");

  // Reset all steps
  steps.forEach((step, index) => {
    step.classList.remove("muted");
    step.classList.remove("completed");
  });

  // Update based on request status
  if (request.paymentStatus === "PAID") {
    steps[0].classList.add("completed");
    steps[1].classList.add("completed");
    steps[2].classList.remove("muted");
  } else if (request.paymentStatus === "PENDING_PAYMENT") {
    steps[0].classList.add("completed");
    steps[1].classList.add("muted");
    steps[2].classList.add("muted");
  } else if (request.paymentStatus === "FAILED") {
    steps[0].classList.add("completed");
    steps[1].classList.add("muted");
    steps[2].classList.add("muted");
  }
}

function animateCounters() {
  $$('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const tick = () => {
      current = Math.min(target, current + step);
      el.textContent = `${current.toLocaleString("en-US")}+`;
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const serviceButton = event.target.closest("[data-service]");
    if (serviceButton) selectedService = services.find((service) => service.slug === serviceButton.dataset.service) || selectedService;
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) { event.preventDefault(); route(routeButton.dataset.route); }
  });
  $("#menuBtn").addEventListener("click", () => $("#navlinks").classList.toggle("open"));
  $("#shopArea").addEventListener("input", updatePrice);
  $("#requestForm").addEventListener("submit", handleSubmit);
  $("#trackForm").addEventListener("submit", handleTrack);
  $("#payNowBtn").addEventListener("click", handlePayment);
}

renderServices();
configureSite();
bindEvents();
fillServiceDetails();
animateCounters();

const saved = localStorage.getItem("emtithal-last-request");
if (saved) {
  try { $("#trackInput").value = JSON.parse(saved).number || ""; } catch { /* ignore corrupted local state */ }
}

// Initialize offers carousel animation
function initOffersCarousel() {
  const offerCards = $$('.offer-card');
  let currentIndex = 0;

  // Add hover pause functionality
  offerCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      card.style.animationPlayState = 'paused';
    });
    card.addEventListener('mouseleave', () => {
      card.style.animationPlayState = 'running';
    });
  });

  // Auto-highlight cards in sequence
  function highlightNextCard() {
    offerCards.forEach((card, index) => {
      if (index === currentIndex) {
        card.style.borderColor = 'var(--brand)';
        card.style.boxShadow = '0 20px 40px rgba(54, 185, 140, 0.3)';
        card.style.transform = 'translateY(-15px) scale(1.02)';
      } else {
        card.style.borderColor = '';
        card.style.boxShadow = '';
        card.style.transform = '';
      }
    });

    currentIndex = (currentIndex + 1) % offerCards.length;
  }

  // Start auto-highlighting
  setInterval(highlightNextCard, 3000);
}

// Initialize offers carousel on page load
document.addEventListener('DOMContentLoaded', () => {
  initOffersCarousel();
  initPromoSlider();
  initVatInvoiceToggle();
});

// Initialize VAT invoice toggle
function initVatInvoiceToggle() {
  const vatInvoiceYes = document.getElementById('vatInvoiceYes');
  const vatInvoiceNo = document.getElementById('vatInvoiceNo');
  const vatInvoiceFields = document.getElementById('vatInvoiceFields');

  if (vatInvoiceYes && vatInvoiceNo && vatInvoiceFields) {
    vatInvoiceYes.addEventListener('change', () => {
      vatInvoiceFields.style.display = 'block';
      document.getElementById('companyName').required = true;
      document.getElementById('companyCr').required = true;
      document.getElementById('companyVat').required = true;
      document.getElementById('companyPhone').required = true;
    });

    vatInvoiceNo.addEventListener('change', () => {
      vatInvoiceFields.style.display = 'none';
      document.getElementById('companyName').required = false;
      document.getElementById('companyCr').required = false;
      document.getElementById('companyVat').required = false;
      document.getElementById('companyPhone').required = false;
    });
  }
}

// Initialize promotional slider
function initPromoSlider() {
  const slider = document.getElementById('promoSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.promo-slide');
  const dotsContainer = slider.querySelector('.promo-dots');
  const prevBtn = slider.querySelector('.promo-prev');
  const nextBtn = slider.querySelector('.promo-next');
  let currentIndex = 0;
  let autoplayInterval;
  const autoplayDelay = 5000; // 5 seconds

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'promo-dot' + (index === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `الشريحة ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.promo-dot');

  function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Event listeners
  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Click on slide to navigate to service
  slides.forEach((slide) => {
    slide.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') {
        const serviceSlug = slide.dataset.service;
        if (serviceSlug) {
          const service = services.find(s => s.slug === serviceSlug);
          if (service) {
            selectedService = service;
            route('service-details');
          }
        }
      }
    });
  });

  // Start autoplay
  startAutoplay();
}
