import { IBoba } from '@/interfaces/interfaces';
import { Images } from '../lib/images';

export const bobaList: IBoba[] = [
	{
		name: 'Taro Bubble Tea',
		store: 'Cube Tea',
		img: Images.boba1,
		tags: ['sweet'],
		cost: '$10',
		stars: 5,
		reviews: [
			{
				name: 'Bob',
				content: 'Very delicious! My favorite!',
				stars: 5
			}
		]
	},
	{
		name: 'aaaa Bubble Tea',
		store: 'Cube Tea',
		img: Images.boba1,
		tags: ['sweet'],
		cost: '$10',
		stars: 5,
		reviews: [
			{
				name: 'Bob',
				content: 'Very delicious! My favorite!',
				stars: 5
			}
		]
	},
	{
		name: 'bbbb Bubble Tea',
		store: 'Cube Tea',
		img: Images.boba1,
		tags: ['sweet'],
		cost: '$10',
		stars: 5,
		reviews: [
			{
				name: 'Bob',
				content: 'Very delicious! My favorite!',
				stars: 5
			}
		]
	},
];
