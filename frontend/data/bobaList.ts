import { IBoba } from '@/interfaces/interfaces';
import { Images } from '../lib/images';

export const bobaList: IBoba[] = [
	{
		id: 0,
		name: 'Yifang Fruit Tea',
		description:
			'Our classic Yifang Fruit Tea is made with authentic Taiwanese pineapple jam, passion fruit jam, fresh and organic apple and orange slices, and refreshing Mountain Tea. The original drink that sparked the creation of Yifang Taiwanese Fruit Tea!',
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.YifangFruitTea,
		tags: ['Refreshing', 'Fruity', 'Lactose-free', 'Hot', 'Cold'],
		cost: '$6.50',
		stars: 5,
		popularToppings: ['Tapioca', 'Popping Boba', 'Lychee Jelly', 'Aloe', 'Aiyu Jelly'],
		reviews: [
			{
				name: 'Yifang Fruit Tea',
				author: 'Chaewon L.',
				content:
					'I got the YiFang Fruit tea with aiyu jelly with 30% sugar and regular ice. The fruit tea consists of passion fruit, slices of apple, oranges, pineapple and green tea. I thought the drink was really refreshing! I love the texture of the aiyu jelly. It went well with the drink. I thought the green tea taste was really subtle as well, compared to other boba tea places.',
				stars: 5,
			},
			{
				name: 'Yifang Fruit Tea',
				author: 'Kyle Z.',
				content:
					"Some of the best fruit teas I've had in a while! Unlike other bubble tea shops, they don't have a lot of toppings like lychee jelly and popping boba.",
				stars: 5,
			},
		],
	},
	{
		id: 1,
		name: 'Mango Pomelo Sago',
		description:
			'A classic mango smoothie made with fresh mango, mango jam, coconut, and topped with grapefruit pulp and chewy sago. Ice levels cannot be adjusted. This drink is caffeine-free.',
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.MangoPomeloSago,
		tags: ['Cold', 'Fruity', 'Creamy', 'Caffeine-free'],
		cost: '$7.50',
		stars: 5,
		popularToppings: ['Sago', 'Pearls', 'Lychee Jelly', 'Coconut Jelly'],
		reviews: [
			{
				name: 'Mango Pomelo Sago',
				author: 'Sarah M.',
				content:
					'I really enjoyed the Mango Pomelo Sago Bubble Tea. The mango flavor was strong, but not too sweet. The pomelo was a nice surprise, and the sago pearls were a great addition. The only thing I would say is that the bubbles were a little bit tough for my liking',
				stars: 4,
			},
			{
				name: 'Mango Pomelo Sago',
				author: 'Mia A.',
				content:
					'This Mango Pomelo Sago Bubble Tea is incredible! The mango flavor is so fresh and perfectly balanced by the tartness of the pomelo. The sago pearls add a fun and chewy texture, and the bubbles are nice and juicy. Absolutely delicious!',
				stars: 5,
			},
		],
	},
	{
		id: 2,
		name: 'Brown Sugar Pearl Oolong Tea Latte',
		description:
			'Made with a mix of brown sugar and Taiwanese light brown sugar (二砂糖), this drink has beautiful marbling and tastes amazing. The Brown Sugar Pearl series also includes Brown Sugar Pearl Black Tea Latte and Brown Sugar Pearl with Milk, a caffeine-free version. The ice and sugar levels cannot be adjusted for all drinks in this series.',
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.BrownSugarPearlOolongTeaLatte,
		tags: ['Cold', 'Hot', 'Creamy', 'Caffeine-free'],
		cost: '$6.50',
		stars: 5,
		popularToppings: ['Tapioca', 'Nutmeg', 'Cinnamon', 'Soy Milk'],
		reviews: [
			{
				name: 'Brown Sugar Pearl Oolong Tea Latte',
				author: 'Lee C.',
				content:
					'This drink is a ! The oolong tea has a delicate floral aroma that perfectly complements the rich brown sugar flavor. The pearls are chewy and bursting with sweetness, and the creamy latte base ties everything together beautifully. A new favorite!"',
				stars: 5,
			},
			{
				name: 'Brown Sugar Pearl Oolong Tea Latte',
				author: 'Karen M.',
				content:
					'The Brown Sugar Pearl Oolong Tea Latte was good, but a bit too sweet for me. The oolong tea flavor was a bit muted by the brown sugar. The pearls were a fun addition, but a little bland on their own. Maybe with a bit less sugar, this could be a perfect drink',
				stars: 3,
			},
		],
	},
	{
		id: 3,
		name: 'Grapefruit Lemon Fruit Tea',
		description:
			"This invigorating fruit tea blends the tangy sweetness of grapefruit with the zesty brightness of lemon. It's a refreshing and vitamin-packed drink perfect for a hot day or a healthy pick-me-up.",
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.GrapefruitLemonFruitTea,
		tags: ['Refreshing', 'Fruity', 'Lactose-free', 'Hot', 'Cold'],
		cost: '$6.50',
		stars: 5,
		popularToppings: ['Lychee Jelly', 'Popping Boba', 'Aloe', 'Aiyu Jelly'],
		reviews: [
			{
				name: 'Grapefruit Lemon Fruit Tea',
				author: 'Juan P.',
				content:
					"Their aiyu jelly was delicate and flavorful, and the tea was so refreshing--the more I drank, the more complex the flavors became. I'm usually more of a milk tea fan, but this was kind of like drinking sunshine.",
				stars: 5,
			},
			{
				name: 'Grapefruit Lemon Fruit Tea',
				author: 'David L.',
				content:
					"A wake-up call in a cup! This Grapefruit Lemon Fruit Tea is a fantastic morning pick-me-up. The citrusy blast is energizing, and the tea leaves a clean, refreshing taste on the palate. It's become my go-to for a healthy and delicious start to the day.",
				stars: 5,
			},
		],
	},
	{
		id: 4,
		name: 'Pineapple Green Tea',
		description:
			'This bright and flavorful tea combines the sunny taste of pineapple with the refreshing earthiness of green tea. The sweetness of the pineapple perfectly complements the grassy notes of the green tea, creating a balanced and enjoyable drink. ',
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.PineappleGreenTea,
		tags: ['Cold', 'Hot', 'Fruity', 'Refreshing', 'Lactose-free'],
		cost: '$6.50',
		stars: 5,
		popularToppings: ['Popping Boba', 'Mint Leaves', 'Pineapple Chunks'],
		reviews: [
			{
				name: 'Pineapple Green Tea',
				author: 'Chris L.',
				content:
					'This is a delightful blend of tropical pineapple and refreshing green tea. The sweetness of the pineapple perfectly complements the grassy notes of the green tea, making for a well-balanced and flavorful drink.  Highly recommend!',
				stars: 5,
			},
			{
				name: 'Pineapple Green Tea',
				author: 'Olivia B',
				content:
					"I love green tea, but sometimes it can be a bit too bitter for me.  This pineapple green tea is the perfect solution! The pineapple adds just the right amount of sweetness to make it enjoyable without being overpowering.  It's become my new go-to iced tea!",
				stars: 4,
			},
		],
	},
	{
		id: 5,
		name: 'Yakult with Passion Fruit Green Tea',
		description:
			'Your favorite childhood Yakult drinks taste amazing in our Yakult series! Yakult is a sweet, probiotic beverage. Yakult with Passion Fruit Green Tea comes with passion fruit jam and green tea, but the series also includes a version with pineapple jam and green tea as well as just Yakult and mountain tea. Ice levels cannot be adjusted for the Yakult series.',
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.YakultwithPassionFruitGreenTea,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Sweet'],
		cost: '$6.25',
		stars: 4,
		popularToppings: ['Popping Boba', 'Lychee Jelly', 'Grass Jelly'],
		reviews: [
			{
				name: 'Yakult with Passion Fruit Green Tea',
				author: 'Azula L.',
				content:
					"This unique combination is a total winner! The creamy sweetness of Yakult blends surprisingly well with the tangy passion fruit and the subtle earthiness of green tea. It's a delightful explosion of flavors and textures that's both refreshing and satisfying. Definitely recommend giving it a try!",
				stars: 5,
			},
			{
				name: 'Yakult with Passion Fruit Green Tea',
				author: 'Emily R.',
				content:
					'Intriguing idea, but not quite there for me. The Yakult overpowers the passion fruit and green tea flavors a bit.  I would have preferred a more balanced taste profile.  An interesting concept though, with some potential for tweaking!',
				stars: 3,
			},
		],
	},
	{
		id: 6,
		name: 'Sweet Taro Sago Latte',
		description:
			'Taro is a root vegetable similar in texture to that of a potato, common in many sweet desserts across Asia. The Sweet Taro Sago Latte uses real mashed taro, organic milk and cream, and comes with chewy sago as a topping. This drink is caffeine-free.',
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.SweetTaroSagoLatte,
		tags: ['Cold', 'Creamy', 'Caffeine-Free'],
		cost: '$7.50',
		stars: 5,
		popularToppings: ['Chewy Sago', 'Grass Jelly', 'Tapioca'],
		reviews: [
			{
				name: 'Sweet Taro Sago Latte',
				author: 'Mei L.',
				content:
					"This taro sago latte is like a warm hug in a cup! The creamy milk is infused with the sweet and nutty flavor of taro, and the chewy sago pearls add a fun textural element. It's incredibly comforting and delicious, especially on a chilly day.  Highly recommend!",
				stars: 5,
			},
			{
				name: 'Sweet Taro Sago Latte',
				author: 'Olivia D.',
				content:
					'I always struggle to find drinks that are flavorful but not overly sweet. This taro sago latte hits the perfect spot! The taro flavor is prominent but not artificial-tasting, and the sweetness level is just right. The sago pearls are a delightful addition, adding a fun chewiness.  New favorite for sure!',
				stars: 5,
			},
		],
	},
	{
		id: 7,
		name: 'Taro with Milk',
		description:
			'Taro with Milk is made with real, mashed taro, cream and organic milk. The Taro series also includes a version of this drink with green tea.',
		store: 'Yifang Taiwan Fruit Tea',
		img: Images.SweetTaroSagoLatte,
		tags: ['Cold', 'Hot', 'Creamy'],
		cost: '$7.00',
		stars: 5,
		popularToppings: ['Coconut Jelly', 'Tapioca', 'Popping Boba', 'Green Tea'],
		reviews: [
			{
				name: 'Taro with Milk',
				author: 'Sarah C',
				content:
					"This simple drink is a classic for a reason! The creamy milk perfectly complements the earthy sweetness of taro. It's a delicious and versatile beverage you can enjoy hot or cold.  Great on its own or perfect for adding a splash of flavor to coffee or tea.",
				stars: 5,
			},
			{
				name: 'Taro with Milk',
				author: 'Linda M.',
				content:
					'Good, but a bit too milky for me. I prefer a stronger taro flavor.  Maybe a stronger taro base or the option to adjust the milk-to-taro ratio would be nice.  Still a good drink overall, just a touch unbalanced for my taste.',
				stars: 4,
			},
		],
	},
	// SECOND BUBBLE TEA SHOP
	{
		id: 8,
		name: 'Abloh',
		description:
			'Abloh bursts with mango & passion fruit, balanced by green tea. Chewy mango bits add a playful twist. A refreshing tropical escape in every sip.',
		store: 'Drip Tea',
		img: Images.Abloh,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Lactose-free'],
		cost: '$7.25',
		stars: 5,
		popularToppings: ['Boba', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Mango Bits'],
		reviews: [
			{
				name: 'Abloh',
				author: 'Matthew G.',
				content:
					"The passion fruit and mango flavors are perfectly balanced against the green tea, creating a refreshing and vibrant drink. The chewy mango bits add a delightful textural surprise. It's like a mini vacation in every sip!  Absolutely love it!",
				stars: 5,
			},
			{
				name: 'Abloh',
				author: 'William B',
				content:
					"I wasn't expecting much from Abloh, but I was pleasantly surprised! The flavors are so well-balanced, and the mango bits add a nice textural contrast.  It's refreshing and delicious, perfect for a hot day.  A new favorite!",
				stars: 4,
			},
		],
	},
	//next
	{
		id: 9,
		name: 'Nigo',
		description:
			'This refreshing tea bursts with juicy mango and sweet peach, balanced by calming notes. Chewy mango bits add a fun texture for a delightful summer drink.',
		store: 'Drip Tea',
		img: Images.Nigo,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Lactose-free'],
		cost: '$7.25',
		stars: 5,
		popularToppings: ['Boba', 'Crystal Boba', 'Crema', 'Ice-Cream', 'Mango Bits'],
		reviews: [
			{
				name: 'Nigo',
				author: 'Karina M',
				content:
					"Nigo is a summer dream come true! The mango and peach flavors are perfectly balanced and juicy, and the green tea adds a lovely calming earthiness. The chewy mango bits are a delightful surprise in every sip. It's refreshing, delicious, and perfect for a hot day.  Highly recommend!",
				stars: 5,
			},
			{
				name: 'Nigo',
				author: 'Alex P.',
				content:
					'I enjoyed Nigo, but the peach flavor was a bit more subtle than I would have liked. I prefer a more balanced taste between the mango and peach.  The green tea was a nice touch, and the chewy mango bits were fun.  Overall, a good drink, but could be a bit more impactful.',
				stars: 4,
			},
		],
	},

	//next

	{
		id: 10,
		name: 'Takahashi',
		description:
			'Takahashi is a vibrant and refreshing beverage that combines the sweetness of strawberries and peaches with the robust character of black tea. The result is a delightful explosion of flavor, perfect for those who enjoy a touch of complexity in their drink.',
		store: 'Drip Tea',
		img: Images.Takahashi,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Lactose-free'],
		cost: '$7.25',
		stars: 4,
		popularToppings: ['Boba', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Mango Jelly'],
		reviews: [],
	},

	// nez
	{
		id: 11,
		name: 'Monogram',
		description:
			'Monogram elevates bubble tea with its rich brown sugar tiger milk tea. Creamy and decadent, it boasts deep caramel notes and chewy boba pearls for a luxurious treat in every sip.',
		store: 'Drip Tea',
		img: Images.Monogram,
		tags: ['Cold', 'Creamy', 'Lactose-free'],
		cost: '$7.25',
		stars: 5,
		popularToppings: ['Boba', 'Oat Milk', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Crema'],
		reviews: [
			{
				name: 'Monogram',
				author: 'Kristina P.',
				content:
					"Monogram is the ultimate brown sugar boba indulgence! The rich tiger milk tea is perfectly complemented by the deep, caramelized flavor of the premium brown sugar. It's like a dessert in a cup, and the two chewy boba pearls add the perfect textural contrast.  Absolutely obsessed!",
				stars: 5,
			},
			{
				name: 'Monogram',
				author: 'Ren M.',
				content:
					'Monogram is a delicious treat, but the boba pearls were a bit hard for my taste. I prefer them softer and chewier.  The brown sugar flavor was fantastic, and the tiger milk tea was creamy and smooth.  Overall, a good drink, but the boba could be improved.',
				stars: 4,
			},
		],
	},

	//

	{
		id: 12,
		name: 'Heart Eyes',
		description:
			'This dreamy drink combines the earthy elegance of matcha with the sweet and playful taste of strawberry milk. Bursting with strawberry bits, Heart Eyes is a delightful and refreshing twist on bubble tea, perfect for those who crave a unique and delicious flavor combination.',
		store: 'Drip Tea',
		img: Images.Heart,
		tags: ['Cold', 'Fruity', 'Herbal', 'Lactose-free'],
		cost: '$7.25',
		stars: 3,
		popularToppings: ['Boba', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Crema'],
		reviews: [
			{
				name: 'Heart Eyes',
				author: 'Mike B.',
				content:
					"Heart Eyes is an interesting idea, but the execution wasn't quite there for me. The matcha flavor was a bit lost in the sweetness of the strawberry milk. The strawberry bits were a nice touch, but overall the drink felt a bit one-dimensional.  Maybe a stronger matcha or a less sweet strawberry milk base would work better.",
				stars: 3.5,
			},
			{
				name: 'Heart Eyes',
				author: 'Sasha B.',
				content:
					"Heart Eyes is a delicious and refreshing treat! The matcha isn't too strong, but it's definitely noticeable and pairs well with the sweet strawberry milk. The strawberry bits add a fun textural element and a pop of fresh flavor.  A great choice for anyone who enjoys a unique and balanced bubble tea experience.",
				stars: 4,
			},
		],
	},

	//
	{
		id: 13,
		name: 'Yellow Heart',
		description: '',
		store: 'Drip Tea',
		img: Images.Abloh,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Lactose-free'],
		cost: '$7.25',
		stars: 5,
		popularToppings: ['Boba', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Mango Bits'],
		reviews: [],
	},
	//
	{
		id: 14,
		name: '',
		description: '',
		store: 'Drip Tea',
		img: Images.Abloh,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Lactose-free'],
		cost: '$7.25',
		stars: 5,
		popularToppings: ['Boba', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Mango Bits'],
		reviews: [],
	},
	//
	{
		id: 15,
		name: '',
		description: '',
		store: 'Drip Tea',
		img: Images.Abloh,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Lactose-Free'],
		cost: '$7.25',
		stars: 5,
		popularToppings: ['Boba', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Mango Bits'],
		reviews: [],
	},

	{
		id: 16,
		name: '',
		description: '',
		store: 'Drip Tea',
		img: Images.Abloh,
		tags: ['Cold', 'Fruity', 'Refreshing', 'Lactose-free'],
		cost: '$7.25',
		stars: 5,
		popularToppings: ['Boba', 'Crystal Boba', 'Pudding', 'Ice-Cream', 'Mango Bits'],
		reviews: [],
	},
];
