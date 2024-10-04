export const laptopBrands = [
  {
    id: 1,
    brand_name: "Apple",
    country: "United States",
    founded_year: 1976,
    website: "https://www.apple.com",
    popular_models: ["MacBook Air", "MacBook Pro"],
    description:
      "Apple Inc. is a multinational technology company that designs and sells consumer electronics, software, and services.",
  },
  {
    id: 2,
    brand_name: "Samsung",
    country: "South Korea",
    founded_year: 1938,
    website: "https://www.samsung.com",
    popular_models: ["Galaxy Book Pro", "Galaxy Book Flex"],
    description:
      "Samsung is a global leader in electronics and specializes in laptops, smartphones, and home appliances.",
  },
  {
    id: 3,
    brand_name: "Dell",
    country: "United States",
    founded_year: 1984,
    website: "https://www.dell.com",
    popular_models: ["XPS 13", "Inspiron", "Alienware"],
    description:
      "Dell Technologies is known for its high-quality laptops and PCs, focusing on performance and durability.",
  },
  {
    id: 4,
    brand_name: "HP",
    country: "United States",
    founded_year: 1939,
    website: "https://www.hp.com",
    popular_models: ["Spectre x360", "Envy", "Pavilion"],
    description:
      "HP Inc. produces laptops and other computing devices with a focus on both consumer and business markets.",
  },
  {
    id: 5,
    brand_name: "Lenovo",
    country: "China",
    founded_year: 1984,
    website: "https://www.lenovo.com",
    popular_models: ["ThinkPad", "IdeaPad", "Yoga"],
    description:
      "Lenovo is a leading technology company offering laptops, tablets, and other computing devices globally.",
  },
  {
    id: 6,
    brand_name: "Asus",
    country: "Taiwan",
    founded_year: 1989,
    website: "https://www.asus.com",
    popular_models: ["ROG Zephyrus", "ZenBook", "VivoBook"],
    description:
      "Asus is a Taiwanese multinational specializing in computer hardware, known for gaming laptops and innovative designs.",
  },
  {
    id: 7,
    brand_name: "Microsoft",
    country: "United States",
    founded_year: 1975,
    website: "https://www.microsoft.com",
    popular_models: ["Surface Laptop", "Surface Book"],
    description:
      "Microsoft is a leading technology company, offering the Surface line of laptops and tablets focused on productivity.",
  },
  {
    id: 8,
    brand_name: "Acer",
    country: "Taiwan",
    founded_year: 1976,
    website: "https://www.acer.com",
    popular_models: ["Aspire", "Swift", "Predator"],
    description:
      "Acer is a Taiwanese multinational specializing in laptops, desktops, and gaming systems, known for affordability and performance.",
  },
  {
    id: 9,
    brand_name: "Razer",
    country: "United States",
    founded_year: 2005,
    website: "https://www.razer.com",
    popular_models: ["Razer Blade", "Razer Blade Stealth"],
    description:
      "Razer is a global gaming hardware company known for producing high-performance laptops, peripherals, and accessories for gamers.",
  },
  {
    id: 10,
    brand_name: "MSI",
    country: "Taiwan",
    founded_year: 1986,
    website: "https://www.msi.com",
    popular_models: ["Prestige", "GS66 Stealth", "GE Raider"],
    description:
      "MSI is known for producing high-performance gaming laptops and professional-grade hardware for content creators.",
  },
];

export const categories = [
  {
    id: 1,
    category_name: "Gaming Laptops",
    description:
      "High-performance laptops built for gaming with powerful GPUs, fast processors, and high refresh-rate displays.",
    example_models: ["Razer Blade", "MSI GE Raider", "Asus ROG Zephyrus"],
  },
  {
    id: 2,
    category_name: "Ultrabooks",
    description:
      "Lightweight and ultra-portable laptops designed for efficiency and long battery life, ideal for travel and productivity.",
    example_models: ["Dell XPS 13", "HP Spectre x360", "MacBook Air"],
  },
  {
    id: 3,
    category_name: "2-in-1 Laptops",
    description:
      "Convertible laptops that can function as both a tablet and a traditional laptop, featuring touchscreens and flexible hinges.",
    example_models: ["Microsoft Surface Pro", "Lenovo Yoga", "HP Envy x360"],
  },
  {
    id: 4,
    category_name: "Workstation Laptops",
    description:
      "Powerful laptops designed for professionals who need to run demanding software like CAD, 3D rendering, and video editing tools.",
    example_models: ["Dell Precision", "HP ZBook", "Lenovo ThinkPad P Series"],
  },
  {
    id: 5,
    category_name: "Business Laptops",
    description:
      "Laptops focused on durability, security, and performance for professionals, with features like fingerprint readers and encrypted storage.",
    example_models: ["Lenovo ThinkPad", "HP EliteBook", "Dell Latitude"],
  },
  {
    id: 6,
    category_name: "Student Laptops",
    description:
      "Affordable and efficient laptops designed for students, providing essential features like web browsing, document editing, and lightweight portability.",
    example_models: ["Acer Aspire", "HP Pavilion", "Asus VivoBook"],
  },
  {
    id: 7,
    category_name: "Chromebooks",
    description:
      "Budget-friendly laptops running on Chrome OS, built for web-based applications, lightweight use, and cloud storage integration.",
    example_models: [
      "Google Pixelbook",
      "Samsung Galaxy Chromebook",
      "Acer Chromebook",
    ],
  },
  {
    id: 8,
    category_name: "MacBooks",
    description:
      "Apple’s premium line of laptops with macOS, known for sleek design, high performance, and seamless integration with other Apple devices.",
    example_models: ["MacBook Air", "MacBook Pro"],
  },
];

export const laptop = [
  {
    id: 1,
    product_name: 'MacBook Air 13" M2 Chip (2023)',
    brand: "Apple",
    category: "Laptop",
    price: 999.0,
    color: ["Silver", "Space Gray"],
    size: '13.3"',
    inventory: 50,
    description:
      "Apple's lightweight laptop with the powerful M2 chip, Retina display, and up to 18 hours of battery life.",
  },
  {
    id: 2,
    product_name: 'MacBook Pro 14" M2 Pro Chip (2023)',
    brand: "Apple",
    category: "Laptop",
    price: 1999.0,
    color: ["Silver", "Space Gray"],
    size: '14"',
    inventory: 30,
    description:
      "High-performance MacBook Pro with M2 Pro chip, featuring a Liquid Retina XDR display and advanced thermal system.",
  },
  {
    id: 3,
    product_name: 'Samsung Galaxy Book Pro 360 15"',
    brand: "Samsung",
    category: "Laptop",
    price: 1299.0,
    color: ["Mystic Navy"],
    size: '15.6"',
    inventory: 40,
    description:
      "Ultra-thin and 2-in-1 design, 11th Gen Intel Core processor, AMOLED screen, and S Pen compatibility.",
  },
  {
    id: 4,
    product_name: "Dell XPS 13 Plus OLED (2023)",
    brand: "Dell",
    category: "Laptop",
    price: 1399.0,
    color: ["Platinum Silver"],
    size: '13.4"',
    inventory: 25,
    description:
      'Sleek, modern design with Intel 12th Gen i7, 16GB RAM, and stunning 13.4" OLED touch display.',
  },
  {
    id: 5,
    product_name: "HP Spectre x360 14 (2023)",
    brand: "HP",
    category: "Laptop",
    price: 1499.0,
    color: ["Nightfall Black"],
    size: '13.5"',
    inventory: 35,
    description:
      "Powerful 2-in-1 laptop with Intel Evo, 11th Gen i7, 16GB RAM, and stunning 3K OLED display with long battery life.",
  },
  {
    id: 6,
    product_name: 'Microsoft Surface Laptop 5 13"',
    brand: "Microsoft",
    category: "Laptop",
    price: 1299.0,
    color: ["Platinum", "Black"],
    size: '13.5"',
    inventory: 45,
    description:
      "Slim, stylish laptop with 12th Gen Intel Core, up to 18 hours of battery life, and PixelSense touch display.",
  },
  {
    id: 7,
    product_name: "Lenovo ThinkPad X1 Carbon Gen 10",
    brand: "Lenovo",
    category: "Laptop",
    price: 1699.0,
    color: ["Black"],
    size: '14"',
    inventory: 20,
    description:
      "Business-class laptop with Intel 12th Gen i7, 32GB RAM, 1TB SSD, and 4K UHD display.",
  },
  {
    id: 8,
    product_name: "Asus ROG Zephyrus G14 Gaming Laptop",
    brand: "Asus",
    category: "Gaming Laptop",
    price: 1599.0,
    color: ["Moonlight White"],
    size: '14"',
    inventory: 18,
    description:
      "Powerful gaming laptop with AMD Ryzen 9, NVIDIA RTX 3060, and 144Hz display.",
  },
  {
    id: 9,
    product_name: 'Acer Swift 3 Intel Evo 14"',
    brand: "Acer",
    category: "Laptop",
    price: 999.0,
    color: ["Pure Silver"],
    size: '14"',
    inventory: 60,
    description:
      "Lightweight laptop with Intel Evo, 11th Gen i5, 512GB SSD, and long battery life.",
  },
  {
    id: 10,
    product_name: 'Samsung Galaxy Book 2 13"',
    brand: "Samsung",
    category: "Laptop",
    price: 1099.0,
    color: ["Silver"],
    size: '13.3"',
    inventory: 50,
    description:
      "Intel 12th Gen i5, ultra-lightweight, great for productivity and entertainment, with up to 21 hours of battery life.",
  },
  {
    id: 11,
    product_name: "Razer Blade 15 Advanced Gaming",
    brand: "Razer",
    category: "Gaming Laptop",
    price: 2199.0,
    color: ["Black"],
    size: '15.6"',
    inventory: 10,
    description:
      "Premium gaming laptop with Intel 12th Gen i7, NVIDIA RTX 3070 Ti, 240Hz QHD display, and 32GB RAM.",
  },
  {
    id: 12,
    product_name: "MSI Prestige 14 Evo (2023)",
    brand: "MSI",
    category: "Laptop",
    price: 1199.0,
    color: ["Carbon Gray"],
    size: '14"',
    inventory: 28,
    description:
      "Thin, powerful laptop with Intel 12th Gen i7, 16GB RAM, and high color accuracy display for creative professionals.",
  },
  {
    id: 13,
    product_name: "Asus ZenBook Flip 13 OLED",
    brand: "Asus",
    category: "Laptop",
    price: 1099.0,
    color: ["Pine Grey"],
    size: '13.3"',
    inventory: 40,
    description:
      "2-in-1 convertible laptop with Intel 11th Gen i7, OLED display, and 360-degree hinge for versatility.",
  },
  {
    id: 14,
    product_name: 'Lenovo IdeaPad 5 Pro 16"',
    brand: "Lenovo",
    category: "Laptop",
    price: 999.0,
    color: ["Cloud Gray"],
    size: '16"',
    inventory: 32,
    description:
      'High-performance laptop with AMD Ryzen 7, 16GB RAM, and stunning 16" 120Hz display.',
  },
  {
    id: 15,
    product_name: 'HP Envy x360 15"',
    brand: "HP",
    category: "Laptop",
    price: 1199.0,
    color: ["Natural Silver"],
    size: '15.6"',
    inventory: 50,
    description:
      "2-in-1 laptop with AMD Ryzen 7, 16GB RAM, and FHD touchscreen.",
  },
];

export const laptopSizes = [
  {
    id: 1,
    size: "11-inch",
    description:
      "Compact and highly portable laptops, ideal for basic tasks like browsing and document editing.",
  },
  {
    id: 2,
    size: "13-inch",
    description:
      "Small, lightweight laptops perfect for users who need portability without sacrificing too much screen space.",
  },
  {
    id: 3,
    size: "14-inch",
    description:
      "A balance between portability and screen real estate, suitable for most daily tasks, including media consumption and light work.",
  },
  {
    id: 4,
    size: "15-inch",
    description:
      "Standard laptop size offering a good amount of screen space for productivity, media, and casual gaming.",
  },
  {
    id: 5,
    size: "16-inch",
    description:
      "Larger laptops providing more screen space, better for multitasking and heavier work like editing or gaming.",
  },
  {
    id: 6,
    size: "17-inch",
    description:
      "Large-screen laptops primarily used as desktop replacements, often found in high-end gaming and workstation laptops.",
  },
];

export const phoneBrands = [
  {
    id: 1,
    name: "Apple",
    country: "USA",
    description:
      "Apple is known for its premium iPhones and user-friendly iOS ecosystem.",
  },
  {
    id: 2,
    name: "Samsung",
    country: "South Korea",
    description:
      "Samsung offers a wide range of smartphones, from budget to high-end flagship models.",
  },
  {
    id: 3,
    name: "Xiaomi",
    country: "China",
    description:
      "Xiaomi provides budget-friendly smartphones with high-end features.",
  },
  {
    id: 4,
    name: "OnePlus",
    country: "China",
    description:
      "OnePlus is known for its premium hardware at competitive prices.",
  },
  {
    id: 5,
    name: "Google",
    country: "USA",
    description:
      "Google offers the Pixel line of smartphones, known for their pure Android experience and excellent camera quality.",
  },
];

export const phoneCategories = [
  {
    id: 1,
    name: "Flagship",
    description:
      "High-end smartphones featuring the latest technology and top-tier specifications.",
  },
  {
    id: 2,
    name: "Mid-Range",
    description:
      "Smartphones offering a balance of features and price, targeting a wide range of consumers.",
  },
  {
    id: 3,
    name: "Budget",
    description:
      "Affordable smartphones with essential features for everyday use.",
  },
  {
    id: 4,
    name: "Gaming",
    description:
      "Phones optimized for high-performance gaming with advanced cooling systems and fast refresh rate screens.",
  },
  {
    id: 5,
    name: "Foldable",
    description:
      "Phones with foldable screens offering a mix of portability and extended screen space.",
  },
];

export const phones = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    brand_id: 1,
    category_id: 1,
    release_year: 2023,
    price: 1199.99,
    description:
      "Apple's flagship iPhone model with A16 Bionic chip, 120Hz display, and a pro camera system.",
    screen_size: "6.7-inch",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    brand_id: 2,
    category_id: 1,
    release_year: 2023,
    price: 1099.99,
    description:
      "Samsung's top-tier Galaxy device with 200MP camera, S-Pen, and Snapdragon 8 Gen 2 chipset.",
    screen_size: "6.8-inch",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 12",
    brand_id: 3,
    category_id: 2,
    release_year: 2023,
    price: 299.99,
    description:
      "A feature-packed mid-range device with a 120Hz display, Snapdragon processor, and 108MP camera.",
    screen_size: "6.5-inch",
  },
  {
    id: 4,
    name: "OnePlus 11",
    brand_id: 4,
    category_id: 1,
    release_year: 2023,
    price: 899.99,
    description:
      "OnePlus flagship device with Hasselblad-tuned cameras, Snapdragon 8 Gen 2, and a 120Hz AMOLED display.",
    screen_size: "6.7-inch",
  },
  {
    id: 5,
    name: "Google Pixel 7 Pro",
    brand_id: 5,
    category_id: 1,
    release_year: 2023,
    price: 999.99,
    description:
      "Google's top smartphone offering with Tensor G2 chip, pure Android experience, and top-tier camera performance.",
    screen_size: "6.7-inch",
  },
];

export const phoneSizes = [
  {
    id: 1,
    size: "5.8-inch",
    description:
      "Compact screen size for those who prefer smaller, more pocket-friendly devices.",
  },
  {
    id: 2,
    size: "6.1-inch",
    description:
      "A balanced screen size, offering both portability and enough screen space for media and browsing.",
  },
  {
    id: 3,
    size: "6.5-inch",
    description:
      "Ideal for those who want more screen real estate for gaming and video consumption without compromising too much on portability.",
  },
  {
    id: 4,
    size: "6.7-inch",
    description:
      "Large screen size perfect for productivity, media consumption, and gaming.",
  },
  {
    id: 5,
    size: "6.9-inch",
    description:
      "Extra-large display for maximum immersion, often used in high-end gaming phones or foldables.",
  },
];
