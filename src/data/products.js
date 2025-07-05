const products = [
	{
		id: 1,
		name: "Jamcan Original Hot Pepper Sauce",
		image:
			"/images/PhotoRoom_20230326_091702_ed703e27-6546-448c-ba10-a3397d00929e.JPG",
		description:
			"Bold, fiery, and packed with Caribbean flavour. Made with all-natural ingredients to bring a real 'taste of the islands' to your table.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 5,
		featured: true,
	},
	{
		id: 2,
		name: "Apple Inferno Fusion",
		image: "/images/Photoroom_20240818_224058.JPG",
		description:
			"A fiery blend of crisp apples and bold Caribbean heat. Sweet, sharp, and perfect for spicing up your meals.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 4,
		featured: true,
	},
	{
		id: 3,
		name: "Asian Pear Radiance",
		image: "/images/Photoroom_20240818_223817.JPG",
		description:
			"Bright, juicy Asian pear meets smooth Caribbean heat. A fresh twist for your favourite dishes.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 3,
	},
	{
		id: 4,
		name: "Bourbon Blaze Fusion",
		image: "/images/Photoroom_20240818_224339.JPG",
		description:
			"Smooth bourbon with a bold Caribbean kick. Sweet, smoky heat for any dish.",
		sizes: ["12oz"],
		price: { "12oz": "22.99" },
		spiceLevel: 4,
		featured: true,
	},
	{
		id: 5,
		name: "Island Blaze Caribbean Heat",
		image: "/images/Photoroom_20240818_224012.JPG",
		description:
			"A bold blend of island peppers and vibrant Caribbean fire. Brings the perfect heat to any dish.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 5,
	},
	{
		id: 6,
		name: "Lemon Lime Citrus Crush",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Bright citrus and bold Caribbean heat come together in this zesty, fiery blend. A perfect splash of flavour for any dish.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 4,
	},
	{
		id: 7,
		name: "Mango Burst Delight",
		image: "/images/Photoroom_20240818_224012.JPG",
		description:
			"Ripe mango and fiery Caribbean peppers in every drop. Sweet, vibrant heat that lifts any dish.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 4,
		featured: true,
	},
	{
		id: 8,
		name: "Pearlicious Smoldering",
		image: "/images/Photoroom_20240818_223817.JPG",
		description:
			"Juicy pear with a slow-building Caribbean heat. A smooth, fiery finish for your favourite dishes.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 3,
	},
	{
		id: 9,
		name: "Pineapple Paradise Heat",
		image: "/images/Photoroom_20240818_224012.JPG",
		description:
			"Tropical pineapple with a bold Caribbean bite. Sweet, vibrant heat that wakes up every dish.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 4,
	},
	{
		id: 10,
		name: "Red Hot Chili Sauce",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Classic red chilies with bold Caribbean fire. Smooth, vibrant heat that lights up any dish.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 5,
	},
	{
		id: 11,
		name: "Scorpion Velvet Heat",
		image: "/images/Photoroom_20240818_223925.JPG",
		description:
			"Velvety smooth – with serious scorpion pepper fire. Bold, lingering heat for true spice lovers.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 5,
	},
	{
		id: 12,
		name: "Zombie Ghost",
		image: "/images/Photoroom_20240818_223925.JPG",
		description:
			"Ghost pepper heat with a haunting Caribbean bite. Intense, smoky fire for the brave.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 5,
	},
	{
		id: 13,
		name: "Blueberry Heatwave",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"A sweet-heat blend of ripe blueberries and fiery Caribbean peppers. Perfect for adding a fruity kick to any dish.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 4,
	},
	{
		id: 14,
		name: "Sizzling Honey Garlic",
		image: "/images/Photoroom_20240818_223852.JPG",
		description:
			"Sweet honey and bold garlic with a smooth Caribbean heat. A perfect balance of sweet, savoury, and spice.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 3,
	},
	{
		id: 15,
		name: "Island Vibes Jerk",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Classic island jerk spices with bold Caribbean heat. Rich, smoky flavour that brings dishes to life.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 4,
	},
	{
		id: 16,
		name: "Sweet Strawberry Heat Storm",
		image: "/images/Photoroom_20240818_223734.JPG",
		description:
			"Juicy strawberries with a bold Caribbean kick. Sweet, fruity heat that takes dishes to the next level.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 4,
	},
	{
		id: 17,
		name: "Green Seasoning",
		image: "/images/Photoroom_20240818_224339.JPG",
		description:
			"Fresh herbs and bold Caribbean flavour. A vibrant blend to spice up your cooking.",
		sizes: ["12oz"],
		price: { "12oz": "16.99" },
		spiceLevel: 2,
	},
	{
		id: 18,
		name: "Zesty Habanero Inferno",
		image: "/images/Photoroom_20240818_224315.JPG",
		description:
			"Fiery habaneros with a bold citrus twist. Bright, zesty heat that wakes up any dish.",
		sizes: ["5oz", "12oz"],
		price: { "5oz": "7.99", "12oz": "12.99" },
		spiceLevel: 5,
		featured: true,
	},
];

export default products;
