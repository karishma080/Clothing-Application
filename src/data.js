export const products = [
  {
    id: 1,
    name: "Aurelia Silk Slip Dress",
    category: "Dresses",
    gender: "Women",
    price: 245,
    rating: 4.8,
    reviewsCount: 34,
    description: "Crafted from 100% heavy-weight mulberry silk, this bias-cut slip dress drapes beautifully against the body. Featuring an elegant cowl neckline and adjustable criss-cross back straps, it offers a seamless blend of daytime minimalism and evening glamour.",
    details: {
      material: "100% Mulberry Silk (19 momme sandwashed)",
      fit: "Fits true to size. Bias-cut allows comfortable stretch. Model is 5'9\" wearing size S.",
      sustainability: "OEKO-TEX Certified, dyed with non-toxic organic dyes, manufactured in a solar-powered boutique atelier."
    },
    colors: [
      { name: "Champagne", hex: "#F3E5D8" },
      { name: "Obsidian", hex: "#1C1C1E" },
      { name: "Sage", hex: "#A8B4A2" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609357518652-6cf0416f0cbe?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: true,
    isNew: false
  },
  {
    id: 2,
    name: "Classic Wool Oversized Blazer",
    category: "Outerwear",
    gender: "Women",
    price: 380,
    rating: 4.9,
    reviewsCount: 56,
    description: "An essential tailoring piece for any modern wardrobe. Crafted from premium Italian virgin wool, this oversized blazer features defined structured shoulders, classic notched lapels, and double-welt pockets. Designed for an effortlessly polished silhouette.",
    details: {
      material: "85% Virgin Wool, 15% Cashmere; Lining: 100% Viscose",
      fit: "Intentionally oversized. For a more tailored fit, we recommend ordering one size down.",
      sustainability: "Responsible Wool Standard (RWS) certified wool, mulesing-free, packaged in compostable garment bags."
    },
    colors: [
      { name: "Warm Taupe", hex: "#B8A99A" },
      { name: "Midnight Charcoal", hex: "#2C2C2E" },
      { name: "Cream Ivory", hex: "#EAE6DF" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: true,
    isNew: true
  },
  {
    id: 3,
    name: "Sianna Cashmere Mock-Neck Knit",
    category: "Knitwear",
    gender: "Women",
    price: 295,
    rating: 4.7,
    reviewsCount: 42,
    description: "Spun from exceptionally soft Grade-A Mongolian cashmere, this mid-weight mock-neck knitwear features a relaxed fit with wide ribbed trims on the cuffs and hem. Soft, breathable, and designed to last a lifetime.",
    details: {
      material: "100% Grade-A Mongolian Cashmere (2-ply)",
      fit: "Relaxed, slightly cropped fit. Model is 5'10\" wearing size S.",
      sustainability: "Sourced through animal welfare approved nomadic herder cooperatives. Undyed options use 60% less water."
    },
    colors: [
      { name: "Oatmeal", hex: "#E3DACE" },
      { name: "Dark Sand", hex: "#9D8F81" },
      { name: "Noir", hex: "#0E0E10" }
    ],
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: false,
    isNew: true
  },
  {
    id: 4,
    name: "Linen Pleated Wide-Leg Pants",
    category: "Pants",
    gender: "Women",
    price: 185,
    rating: 4.6,
    reviewsCount: 28,
    description: "Breathable and elegant, these trousers are tailored from Belgian linen with double front pleats and a flattering high-rise waistband. Featuring a floor-skimming wide-leg silhouette, they transition seamlessly from seaside to evening lounge.",
    details: {
      material: "100% Belgian Flax Linen",
      fit: "High rise, relaxed through the hip. Extra long inseam designed to drape beautifully with heels or flats.",
      sustainability: "100% natural, biodegradable fiber. Manufactured in a zero-waste water recycling facility."
    },
    colors: [
      { name: "Raw Linen", hex: "#D2C5B5" },
      { name: "Alabaster", hex: "#F5F5F7" },
      { name: "Olive", hex: "#5C6053" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: false,
    isNew: false
  },
  {
    id: 5,
    name: "Luxe Trench Coat",
    category: "Outerwear",
    gender: "Women",
    price: 450,
    rating: 4.9,
    reviewsCount: 78,
    description: "Our signature trench coat combines classic military styling with contemporary draping. Crafted from water-repellent organic cotton twill, it features raglan sleeves, storm flaps, and a removable waist belt to cinch the silhouette.",
    details: {
      material: "100% Organic Cotton Twill; Horn buttons; Bemberg lining",
      fit: "Relaxed silhouette designed for layering over chunky knitwear. Adjustable belts on wrists and waist.",
      sustainability: "GOTS Certified organic cotton, PFC-free water repellent finish."
    },
    colors: [
      { name: "Classic Honey", hex: "#CDBB9E" },
      { name: "Midnight Navy", hex: "#1D2330" },
      { name: "Stone", hex: "#D6D1C6" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: true,
    isNew: false
  },
  {
    id: 6,
    name: "Serene Minimalist Leather Tote",
    category: "Accessories",
    gender: "Women",
    price: 310,
    rating: 4.8,
    reviewsCount: 22,
    description: "An architectural tote bag designed to hold all your essentials with refined ease. Handmade from premium, butter-soft Italian calf leather with raw edges and an internal suede pocket. Completely structural, yet lightweight.",
    details: {
      material: "100% Italian Vegetable-Tanned Calf Leather, Suede interior lining",
      fit: "Measures 14\"H x 12\"W x 6\"D. Strap drop: 10.5\". Fits a 15\" MacBook Pro.",
      sustainability: "LWG Silver Certified tannery, vegetable tanning process free of harsh chromium chemicals."
    },
    colors: [
      { name: "Tan", hex: "#A87C53" },
      { name: "Nero", hex: "#121212" },
      { name: "Ivory", hex: "#EEE9E0" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609357518652-6cf0416f0cbe?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: false,
    isNew: true
  },
  {
    id: 7,
    name: "Solene Ribbed Silk Tank",
    category: "Knitwear",
    gender: "Women",
    price: 95,
    rating: 4.5,
    reviewsCount: 19,
    description: "The elevated base layer your wardrobe deserves. Made from a blend of premium silk and long-staple organic cotton, this rib-knit tank is ultra-soft and form-fitting, featuring a high scoop neck and delicate raw edge bindings.",
    details: {
      material: "70% Organic Cotton, 30% Mulberry Silk",
      fit: "Slim fit. Form-fitting with high stretch. If between sizes, size up.",
      sustainability: "Fair Trade certified production, organic cotton sourced from regenerative farms."
    },
    colors: [
      { name: "Chalk", hex: "#F7F5F0" },
      { name: "Pebble Gray", hex: "#CBC6BD" },
      { name: "Espresso", hex: "#32231A" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: false,
    isNew: false
  },
  {
    id: 8,
    name: "Satin Pleated Midi Skirt",
    category: "Dresses",
    gender: "Women",
    price: 160,
    rating: 4.7,
    reviewsCount: 15,
    description: "Flowing and romantic, this midi skirt is cut on the bias from high-lustre heavy satin. Designed with an elasticated waistband concealed inside, it offers slip-on ease while maintaining a sharp, structured silhouette.",
    details: {
      material: "95% Polyester Satin, 5% Elastane",
      fit: "Midi length. Relaxed waist, flowing skirt. Model is 5'8\" wearing size S.",
      sustainability: "Made using 40% recycled ocean-bound plastics."
    },
    colors: [
      { name: "Sage", hex: "#A8B4A2" },
      { name: "Sand Gold", hex: "#DCCBBA" },
      { name: "Obsidian", hex: "#1C1C1E" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609357518652-6cf0416f0cbe?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: true,
    isNew: false
  },
  {
    id: 9,
    name: "Floral Printed Shirt",
    category: "Knitwear",
    gender: "Men",
    price: 35,
    rating: 4.8,
    reviewsCount: 16,
    description: "Lightweight and breathable printed cotton shirt, featuring a soft spread collar, short sleeves, and a custom neutral floral motif. A casual summer essential designed for effortless styling.",
    details: {
      material: "100% Organic Cotton Twill",
      fit: "Regular fit. True to size. Model is 6'1\" wearing size M.",
      sustainability: "GOTS Certified organic cotton, produced under fair trade standards."
    },
    colors: [
      { name: "Cream Floral", hex: "#FAF9F6" },
      { name: "Navy Floral", hex: "#1D2330" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/floral-shirt.png",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: false,
    isNew: true
  },
  {
    id: 10,
    name: "Designer Silk Kurthi",
    category: "Dresses",
    gender: "Women",
    price: 80,
    rating: 4.7,
    reviewsCount: 22,
    description: "An elegant, flowy designer kurthi dress crafted from sandwashed silk crepe. Detailed with intricate neckline stitching and flared sleeves, it combines traditional silhouettes with modern minimal elements.",
    details: {
      material: "80% Silk, 20% Cotton blend",
      fit: "Relaxed fit. Model is 5'9\" wearing size S.",
      sustainability: "Handloomed silk sourced from regional artisan weavers."
    },
    colors: [
      { name: "Marigold Gold", hex: "#E5A93C" },
      { name: "Champagne", hex: "#F3E5D8" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/silk-kurthi.png",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: true,
    isNew: false
  },
  {
    id: 11,
    name: "Ice Blue Denim Jacket",
    category: "Outerwear",
    gender: "Men",
    price: 65,
    rating: 5.0,
    reviewsCount: 30,
    description: "The classic denim jacket, elevated. Tailored from mid-weight organic cotton denim, washed to a soft, worn-in ice blue shade. Features silver-tone button closures, chest flap pockets, and adjustable waist tabs.",
    details: {
      material: "100% Organic Denim Cotton",
      fit: "Relaxed, boxy fit. Fits true to size. Model is 5'11\" wearing size M.",
      sustainability: "Produced using waterless washing techniques, saving 80% water compared to standard denim wash cycles."
    },
    colors: [
      { name: "Ice Blue", hex: "#C5D0E6" },
      { name: "Indigo Blue", hex: "#1C2E4C" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/denim-jacket.png",
      "https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: false,
    isNew: true
  },
  {
    id: 12,
    name: "Kids Organic Cotton Knit Sweater",
    category: "Knitwear",
    gender: "Kids",
    price: 45,
    rating: 4.8,
    reviewsCount: 12,
    description: "A super soft, warm, and cozy knit sweater for children. Made from 100% GOTS certified organic cotton, it features a classic crew neck and comfortable ribbed trims. Gentle on sensitive skin and durable for all-day play.",
    details: {
      material: "100% Organic Cotton (GOTS Certified)",
      fit: "Relaxed fit for kids. Sizes run true to age.",
      sustainability: "Organic cotton dyed with safe, non-toxic dyes in a fair-trade certified factory."
    },
    colors: [
      { name: "Oatmeal", hex: "#E3DACE" },
      { name: "Sage", hex: "#A8B4A2" }
    ],
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: false,
    isNew: true
  },
  {
    id: 13,
    name: "Artisan Linen Loungewear Set",
    category: "Outerwear",
    gender: "Couples",
    price: 180,
    rating: 4.9,
    reviewsCount: 18,
    description: "His and hers matching luxurious loungewear sets crafted from breathable Belgian flax linen. Perfect for lazy Sundays or relaxed resort getaways, offering style, comfort, and sustainable quality.",
    details: {
      material: "100% Belgian Flax Linen",
      fit: "Relaxed resort fit. Set includes both shirts and trousers.",
      sustainability: "Hand-tailored in small batches, reducing waste and supporting local artisan families."
    },
    colors: [
      { name: "Raw Linen", hex: "#D2C5B5" },
      { name: "Midnight Navy", hex: "#1D2330" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    isTrending: true,
    isNew: false
  }
];

export const heroSlides = [
  {
    id: 1,
    title: "ESSENTIAL SIMPLICITY",
    subtitle: "COLLECTION 2026",
    tagline: "Uncompromising quality, refined tailoring, and sustainable luxury materials designed for a lifetime.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1600&auto=format&fit=crop&q=80",
    buttonText: "Shop the Collection"
  },
  {
    id: 2,
    title: "THE ART OF TAILORING",
    subtitle: "NEW FORMALS",
    tagline: "Structured lines meet fluid draping. Discover our collection of wool blazers and pleated linen trousers.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1600&auto=format&fit=crop&q=80",
    buttonText: "Explore Outerwear"
  },
  {
    id: 3,
    title: "UNDERSTATED ELEGANCE",
    subtitle: "SILK & CASHMERE",
    tagline: "Grade-A Mongolian Cashmere and heavy-weight Mulberry Silk. Soft, luxurious, and sustainably produced.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1600&auto=format&fit=crop&q=80",
    buttonText: "Shop Essentials"
  }
];
