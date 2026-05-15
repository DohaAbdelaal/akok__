import grapeSeedMoisturizer from "../assets/Products_Images/grapeseed-moisturizer-cream.webp";
import hairBalm from "../assets/Products_Images/hair-balm.webp";
import olilyCleanser from "../assets/Products_Images/oily-skin-cleanser.webp";
import skinBooster from "../assets/Products_Images/multi-action-booster-serum.webp";
import lipBalm from "../assets/Products_Images/three-lip-balms.webp";
import shampoo from "../assets/Products_Images/Shampoo.webp";
import hairReapairMask from "../assets/Products_Images/hair-repairing-mask.webp";
import tint from "../assets/Products_Images/hyaluronic-acid-lip-cheek-tint.webp"; 
import mascara from "../assets/Products_Images/thickening-lash-brow-mascara.webp";
import nailSerum from "../assets/Products_Images/nail-growth-serum.webp";
import bodyMist from "../assets/Products_Images/hair-mist.webp";
import bodySplash from "../assets/Products_Images/body-splash.webp";
import bodyLotion from "../assets/Products_Images/body-lotion.webp";
import growthMix from "../assets/Products_Images/hair-growth-oil-mix.webp";
import makhmariya from "../assets/Products_Images/makhmariya-body.webp";
import maskScrub from "../assets/Products_Images/scrub-mask.webp";
import iceCreamScrub from "../assets/Products_Images/ice-cream-body-glow-scrub.webp";
import hairTonic from "../assets/Products_Images/Alovera.webp";//needs to be changed no photos not available
import sensitiveCleanser from "../assets/Products_Images/pure-balance-cleanser.webp";
import deodorant from "../assets/Products_Images/deodorant.webp";
/* AKOK Products Data - Localization Support (AR/EN) */

export const products = [
  {
    id: 1,
    name: { ar: "مرطب بذور العنب", en: "Grape Seed Moisturizer" },
    price: 165,
    image: grapeSeedMoisturizer,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "مرطب عميق ومرمم للبشرة، يقوي حاجز البشرة ويقلل الأكسدة وينظم إفراز الدهون.",
      en: "Deep moisturizer and skin repairer, strengthens the skin barrier and regulates sebum."
    },
    howToUse: {
      ar: "يوضع بعد غسل البشرة مباشرة، يستخدم صباحاً ومساءً.",
      en: "Apply immediately after washing the skin, use morning and evening."
    },
    ingredients: {
      ar: "زيت بذور العنب، فيتامين B5، فيتامين B3، فيتامين E، الانتوين",
      en: "Grape Seed Oil, Vitamin B5, Vitamin B3, Vitamin E, Allantoin"
    },
    capacity: { ar: "50 جم", en: "50 g" },
    featured: true
  },
  {
    id: 2,
    name: { ar: "هير بالم AKOK", en: "Hair Balm AKOK" },
    price: 200,
    image: hairBalm,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "كبسولة تغذية للشعر غنية بالمرطبات العالية، تعالج التقصف والهيشان وتفرد الكسرات.",
      en: "Highly nourishing hair balm, treats split ends and frizz while smoothing hair curls."
    },
    howToUse: {
      ar: "يوضع على شعر مندي، يستخدم كمية بسيطة يومياً عند التصفيف.",
      en: "Apply to damp hair, use a small amount daily during styling."
    },
    ingredients: {
      ar: "زبدة الشيا، زبدة الكاكاو، شمع النحل، زيت جوز الهند، زيت اللوز، زيت الأفوكادو، فيتامين E",
      en: "Shea Butter, Cocoa Butter, Beeswax, Coconut Oil, Almond Oil, Avocado Oil, Vitamin E"
    },
    capacity: { ar: "100 جم", en: "100 g" },
    featured: true
  },
  {
    id: 3,
    name: { ar: "غسول البشرة الدهنية والمختلطة", en: "Oily & Combined Skin Cleanser" },
    price: 180,
    image: olilyCleanser,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "يعالج الحبوب وينظم الدهون ويقلل الرؤوس السوداء مع تقشير خفيف للبشرة.",
      en: "Treats acne, regulates oils, and reduces blackheads with gentle exfoliation."
    },
    howToUse: {
      ar: "يدلك على بشرة مبللة بحركات دائرية لمدة دقيقة مع الاهتمام بأماكن الحبوب ثم يشطف.",
      en: "Massage on wet skin in circular motions for a minute, focusing on acne areas, then rinse."
    },
    ingredients: {
      ar: "سالسيلك اسيد، نياسيناميد، خلاصة شجرة الشاي، البانثينول",
      en: "Salicylic Acid, Niacinamide, Tea Tree Extract, Panthenol"
    },
    capacity: { ar: "120 جم", en: "120 g" },
    featured: false
  },
  {
    id: 4,
    name: { ar: "سيروم 4*1 الاسكين بوستر", en: "4*1 Skin Booster Serum" },
    // السعر الأساسي (بداية من)
    price: 200,
    image: skinBooster,
    hasVariants: true,
    isAvailable: true,
    variants: [
      { id: "v4-15", capacity: { ar: "15 مل", en: "15 ml" }, price: 200, isAvailable: true },
      { id: "v4-30", capacity: { ar: "30 مل", en: "30 ml" }, price: 375, isAvailable: true }
    ],
    details: {
      ar: "يعالج التصبغات وآثار الحبوب ويقلل الهالات والتجاعيد ويملأ الخطوط التعبيرية.",
      en: "Treats pigmentation and acne scars, reduces dark circles and fills expression lines."
    },
    howToUse: {
      ar: "3 نقط على بشرة مندية ويوزع على الوجه وتحت العين حتى يجف ثم نضع المرطب.",
      en: "Apply 3 drops on damp skin, massage face and under-eyes until dry, then apply moisturizer."
    },
    ingredients: {
      ar: "هيالورنيك اسيد، نياسيناميد، الفااربيوتين، فيتامين B5، فيتامين E، خلاصة العرقسوس",
      en: "Hyaluronic Acid, Niacinamide, Alpha Arbutin, Vitamin B5, Vitamin E, Licorice Extract"
    },
    featured: true
  },
  {
    id: 5,
    name: { ar: "ليب بالم AKOK", en: "Lip Balm AKOK" },
    price: 100,
    image: lipBalm,
    hasVariants: true,
    isAvailable: true,
    variants: [
      { 
        id: "v5-strawberry", 
        label: { ar: "أحمر (فراولة)", en: "Red (Strawberry)" }, 
        isAvailable: true 
      },
      { 
        id: "v5-caramel", 
        label: { ar: "هافان (كراميل)", en: "Havan (Caramel)" }, 
        isAvailable: true 
      },
      { 
        id: "v5-coconut", 
        label: { ar: "أبيض (جوز هند)", en: "White (Coconut)" }, 
        isAvailable: true 
      }
    ],
    details: {
      ar: "ترطب بعمق، تعالج تشققات الشفايف وتقلل الغمقان مع توريد طبيعي. متوفرة بـ 3 ألوان ونكهات مميزة: أحمر بالفراولة، هافان بالكراميل، وأبيض بجوز الهند.",
      en: "Deeply hydrates, treats chapped lips and reduces darkness with a natural tint. Available in 3 colors & flavors: Strawberry Red, Caramel Havan, and Coconut White."
    },
    howToUse: {
      ar: "تستخدم عند الحاجة، ويُفضل التجديد كل ساعتين.",
      en: "Use as needed, preferably reapply every two hours."
    },
    ingredients: {
      ar: "شمع النحل، زبدة الشيا والكاكاو، زيت جوز الهند، زيت الجوجوبا، فيتامين E",
      en: "Beeswax, Shea & Cocoa Butter, Coconut Oil, Jojoba Oil, Vitamin E"
    },
    capacity: { ar: "10 جم", en: "10 g" },
    featured: false
  },
  {
    id: 6,
    name: { ar: "شامبو AKOK", en: "Shampoo AKOK" },
    price: 220,
    image: shampoo,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "شامبو طبيعي غني بالخلاصات ينظف الشعر بدون تجفيفه، فري سلفيت.",
      en: "Natural shampoo rich in extracts, cleanses hair without drying, sulfate-free."
    },
    howToUse: {
      ar: "يوضع كمية مناسبة على شعر مدي، تدلك الفروة جيداً ثم يشطف.",
      en: "Apply appropriate amount to damp hair, massage scalp well, then rinse."
    },
    ingredients: {
      ar: "خلاصات طبيعية، فيتامينات، خالي من الكيماويات والسلفيت",
      en: "Natural extracts, vitamins, chemical-free and sulfate-free"
    },
    capacity: { ar: "300 مل", en: "300 ml" },
    featured: false
  },
  {
    id: 7,
    name: { ar: "ماسك الترميم", en: "Repairing Mask" },
    price: 220,
    image: hairReapairMask,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "يعالج التقصف والهيشان ويفك التشابك ويقوي الشعر ويغذي الشعر بعمق.",
      en: "Treats split ends, frizz, detangles and deeply nourishes the hair."
    },
    howToUse: {
      ar: "يوضع على الشعر بعيداً عن الفروة لمدة 20-30 دقيقة ثم يشطف بالماء فقط.",
      en: "Apply to hair away from scalp for 20-30 mins, then rinse with water only."
    },
    ingredients: {
      ar: "زيوت طبيعية، زبدة الشيا، بانثينول، كيراتين، بروتين الحرير",
      en: "Natural oils, Shea Butter, Panthenol, Keratin, Silk Protein"
    },
    capacity: { ar: "250 جم", en: "250 g" },
    featured: true
  },
  {
    id: 8,
    name: { ar: "تنت الخدود والشفاه", en: "Cheek & Lip Tint" },
    price: 100,
    image: tint,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "تنت طبيعي مدعم بالهيالورونيك اسيد يعطي لون وردي طبيعي للبشرة والشفاه.",
      en: "Natural tint with Hyaluronic acid, gives a natural rosy look to skin and lips."
    },
    howToUse: {
      ar: "يوضع بعد المرطب، وللشفاه يتبع بمرطب لنتائج أفضل.",
      en: "Apply after moisturizer; for lips, follow with balm for best results."
    },
    ingredients: {
      ar: "هيالورونيك اسيد، فيتامين B5، فيتامين E، جليسيرين",
      en: "Hyaluronic Acid, Vitamin B5, Vitamin E, Glycerin"
    },
    capacity: { ar: "10 مل", en: "10 ml" },
    featured: false
  },
  {
    id: 9,
    name: { ar: "ماسكرا تكثيف الرموش والحواجب", en: "Lash & Brow Thickening Mascara" },
    price: 200,
    image: mascara,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "تعمل على تقوية الرموش والحواجب وزيادة كثافتهم وإطالتهم في مدة قياسية.",
      en: "Strengthens lashes and brows, increasing density and length in record time."
    },
    howToUse: {
      ar: "توضع على رموش وحواجب نظيفة مرة صباحاً ومرة مساءً.",
      en: "Apply to clean lashes and brows morning and evening."
    },
    ingredients: {
      ar: "ريدنسيل، كافيين، بيوتين، ساوبالميتو، روز ماري، فيتامينات",
      en: "Redensyl, Caffeine, Biotin, Saw Palmetto, Rosemary, Vitamins"
    },
    capacity: { ar: "10 مل", en: "10 ml" },
    featured: true
  },
  {
    id: 10,
    name: { ar: "سيروم الأظافر", en: "Nail Serum" },
    price: 200,
    image: nailSerum,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "يقوي ويغذي الأظافر ويطولها ويحسن شكل الجلد حول الأظافر.",
      en: "Strengthens, nourishes and lengthens nails while improving cuticle appearance."
    },
    howToUse: {
      ar: "يوضع على أظافر نظيفة وحولها مرة صباحاً ومرة مساءً.",
      en: "Apply to clean nails and surrounding skin morning and evening."
    },
    ingredients: {
      ar: "زيت خروع، لوز حلو، جوجوبا، سمسم، فيتامين E",
      en: "Castor Oil, Sweet Almond Oil, Jojoba Oil, Sesame Oil, Vitamin E"
    },
    capacity: { ar: "5 مل", en: "5 ml" },
    featured: false
  },
  {
    id: 11,
    name: { ar: "هير اند بادي ميست", en: "Hair & Body Mist" },
    price: 120,
    image: bodyMist,
    hasVariants: true,
    isAvailable: true,
    variants: [
      { id: "v11-pink", label: { ar: "بينك", en: "Pink" }, isAvailable: true },
      { id: "v11-oriental", label: { ar: "ميكس شرقي", en: "Oriental Mix" }, isAvailable: true },
      { id: "v11-bubblegum", label: { ar: "بابل جام", en: "Bubble Gum" }, isAvailable: true }
    ],
    details: {
      ar: "معطر طبيعي للجسم والشعر خالي من الكحول يناسب الأطفال والكبار. متوفر بـ 3 روائح: بينك، ميكس شرقي، وبابل جام.",
      en: "Natural hair and body fragrance, alcohol-free, available in 3 scents: Pink, Oriental Mix, and Bubble Gum."
    },
    howToUse: {
      ar: "مناسب للشعر والجسم مباشرة.",
      en: "Suitable for direct use on hair and body."
    },
    ingredients: {
      ar: "خلاصات طبيعية، مستخلص جوز هند، خالي من الكيماويات",
      en: "Natural extracts, Coconut extract, Chemical-free"
    },
    capacity: { ar: "60 مل", en: "60 ml" },
    featured: false
  },
  {
    id: 12,
    name: { ar: "بادي اسبلاش AKOK", en: "Body Splash AKOK" },
    price: 120,
    image: bodySplash,
    hasVariants: true,
    isAvailable: true,
    variants: [
      { id: "v12-pink", label: { ar: "بينك", en: "Pink" }, isAvailable: true },
      { id: "v12-gold", label: { ar: "جولد", en: "Gold" }, isAvailable: true },
      { id: "v12-strawberry", label: { ar: "فراولة", en: "Strawberry" }, isAvailable: true },
    ],
    details: {
      ar: "معطر للجسم بعطور مميزة متوفر بـ عطر بينك وعطر جولد.",
      en: "Body splash with premium scents, available in Pink and Gold."
    },
    howToUse: {
      ar: "مناسب للجسم ومناسب للملابس.",
      en: "Suitable for body and clothes."
    },
    ingredients: {
      ar: "عطور فاخرة، ماء، مستخلص جوز هند، كحول",
      en: "Luxury perfumes, Water, Coconut extract, Alcohol"
    },
    capacity: { ar: "60 مل", en: "60 ml" },
    featured: false
  },
  {
    id: 13,
    name: { ar: "لوشن الجسم", en: "Body Lotion" },
    price: 200,
    image: bodyLotion,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "يرطب ترطيب عميق، يقلل جلد الوزة وينعم الجلد ويوحد اللون.",
      en: "Deep hydration, reduces strawberry skin, softens and unifies skin tone."
    },
    howToUse: {
      ar: "يوضع على جسم مندي يومياً لترطيب الجسم.",
      en: "Apply to damp skin daily for body hydration."
    },
    ingredients: {
      ar: "يوريا، نياسيناميد، زبدة شيا وكاكاو، زيت جوز هند، لوز حلو",
      en: "Urea, Niacinamide, Shea & Cocoa Butter, Coconut Oil, Sweet Almond Oil"
    },
    capacity: { ar: "130 مل", en: "130 ml" },
    featured: true
  },
  {
    id: 14,
    name: { ar: "ميكس الإنبات والإطالة", en: "Growth & Length Mix" },
    price: 400,
    image: growthMix,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "يعمل على إنبات الفراغات وتكثيف وتتقيل الشعر بداية من 45 يوم.",
      en: "Works on filling gaps, thickening and strengthening hair starting from 45 days."
    },
    howToUse: {
      ar: "حمام زيت لمدة ساعة ونصف لـ ساعتين مع تدليك الفروة 10 دقائق.",
      en: "Oil bath for 1.5-2 hours with a 10-minute scalp massage."
    },
    ingredients: {
      ar: "أكثر من 12 نوع زيت (خروع، روز ماري، نواة تمر، نعناع..)، فيتامين E",
      en: "Over 12 oil types (Castor, Rosemary, Date seed, Mint..), Vitamin E"
    },
    capacity: { ar: "125 مل", en: "125 ml" },
    featured: true
  },
  {
    id: 15,
    name: { ar: "زبدة المخمرية", en: "Makhmariya Butter" },
    price: 120,
    image: makhmariya,
    hasVariants: true,
    isAvailable: true,
    variants: [
      { id: "v15-pink", label: { ar: "بينك", en: "Pink" }, isAvailable: true },
      { id: "v15-gold", label: { ar: "جولد", en: "Gold" }, isAvailable: true },
      { id: "v15-caramella", label: { ar: "كراميلا", en: "Caramella" }, isAvailable: true }
    ],
    details: {
      ar: "زبد طبيعية لترطيب وتعطير الجسم والشعر، متوفرة بـ 3 عطور مميزة: بينك، جولد، وكراميلا.",
      en: "Natural butters for hydrating and scenting body and hair, available in 3 scents: Pink, Gold, and Caramella."
    },
    howToUse: {
      ar: "تستخدم نقط بسيطة لترطيب وتعطير الجسم وأماكن النبض والشعر.",
      en: "Use small dots to hydrate and scent the body, pulse points, and hair."
    },
    ingredients: {
      ar: "شمع النحل، زبد طبيعية، زيت جوز هند، لوز حلو، فيتامين E",
      en: "Beeswax, Natural butters, Coconut oil, Sweet Almond oil, Vitamin E"
    },
    capacity: { ar: "30 جم", en: "30 g" },
    featured: false
  },
  {
    id: 16,
    name: { ar: "ماسك واسكراب 2*1", en: "2*1 Mask & Scrub" },
    price: 175,
    image: maskScrub,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "يرطب ويفتح البشرة وينظف الدهون داخل البشرة ويوحد لونها.",
      en: "Hydrates, brightens, cleanses deep oils and unifies skin tone."
    },
    howToUse: {
      ar: "يوضع 15-20 دقيقة ويشطف بالماء فقط ثم يوضع بعده مرطب.",
      en: "Apply for 15-20 mins, rinse with water only, then follow with moisturizer."
    },
    ingredients: {
      ar: "فيتامينات، خلاصات طبيعية، حبيبات سيليكا، زنك",
      en: "Vitamins, Natural extracts, Silica beads, Zinc"
    },
    capacity: { ar: "250 مل", en: "250 ml" },
    featured: false
  },
  {
    id: 17,
    name: { ar: "اسكراب الآيس كريم", en: "Ice Cream Scrub" },
    price: 275,
    image: iceCreamScrub,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "تقشير طبيعي لإزالة الجلد الميت وتوحيد لون الجسم وترطيبه بعمق.",
      en: "Natural exfoliation to remove dead skin, unify tone and deeply hydrate."
    },
    howToUse: {
      ar: "يدلك على الجسم بحركات دائرية بعد شطفه بماء ساخن ثم يشطف بالماء فقط.",
      en: "Massage in circular motions after hot water rinse, then rinse with water only."
    },
    ingredients: {
      ar: "زبدة شيا وكاكاو، زيت جوز هند، جوجوبا، حبيبات تقشير، فيتامينات",
      en: "Shea & Cocoa Butter, Coconut Oil, Jojoba, Scrubbing beads, Vitamins"
    },
    capacity: { ar: "250 مل", en: "250 ml" },
    featured: false
  },
  {
    id: 18,
    name: { ar: "تونك الإنبات والتساقط", en: "Growth & Anti-hair loss Tonic" },
    price: 450,
    image: hairTonic,
    hasVariants: false,
    isAvailable: false,
    details: {
      ar: "يعمل على وقف التساقط وإنبات الفراغات وإطالة الشعر.",
      en: "Works on stopping hair loss, filling gaps and hair lengthening."
    },
    howToUse: {
      ar: "6 بخات على الفروة مع تدليك 10 دقائق، يترك بدون شطف.",
      en: "6 sprays on scalp with 10-min massage, leave-in without rinsing."
    },
    ingredients: {
      ar: "ريدنسيل، كافيين، بيوتين، ساوبالميتو، روز ماري، فيتامينات",
      en: "Redensyl, Caffeine, Biotin, Saw Palmetto, Rosemary, Vitamins"
    },
    capacity: { ar: "130 مل", en: "130 ml" },
    featured: false
  },
  {
    id: 19,
    name: { ar: "غسول البشرة الحساسة والجافة", en: "Sensitive & Dry Skin Cleanser" },
    price: 180,
    image: sensitiveCleanser,
    hasVariants: false,
    isAvailable: true,
    details: {
      ar: "غسول لطيف جداً غني بالمرطبات، فري سلفيت.",
      en: "Very gentle cleanser rich in moisturizers, sulfate-free."
    },
    howToUse: {
      ar: "يدلك على بشرة مبللة بحركات دائرية لمدة دقيقة ثم يشطف.",
      en: "Massage on wet skin in circular motions for a minute, then rinse."
    },
    ingredients: {
      ar: "فيتامين B5، فيتامين E، خلاصة الصبار، الانتوين",
      en: "Vitamin B5, Vitamin E, Aloe Vera extract, Allantoin"
    },
    capacity: { ar: "130 مل", en: "130 ml" },
    featured: false
  },
  {
  id: 20,
  name: { ar: "ديودرنت طبيعي مزيل لرائحة العرق", en: "Natural Deodorant" },
  price: 200, 
  image: deodorant,
  hasVariants: false,
  isAvailable: true,
  details: {
    ar: "مزيل عرق طبيعي بمكونات مرطبة وفعالة في التخلص من الروائح الكريهة.",
    en: "A natural deodorant with moisturizing ingredients effective in eliminating odors."
  },
  howToUse: {
    ar: "يغسل الإبط جيداً ويجفف، ثم توضع طبقة خفيفة. يجب الغسل قبل كل مرة تجديد.",
    en: "Wash underarms thoroughly and dry before applying a thin layer. Must wash before each reapplication."
  },
  ingredients: {
    ar: "زبدة الشيا، زبدة الكاكاو، شمع النحل، زيت جوز الهند، زيت اللوز الحلو، زيت الليمون، زيت شجرة الشاي، زيت الورد، زيت اللافندر",
    en: "Shea Butter, Cocoa Butter, Beeswax, Coconut Oil, Sweet Almond Oil, Lemon Oil, Tea Tree Oil, Rose Oil, Lavender Oil"
  },
  capacity: { ar: "30 جم", en: "30g" },
  featured: false
}
];
export default products;
