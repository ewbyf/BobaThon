import { IBoba } from '@/interfaces/interfaces';
import { Images } from '../lib/images';

export const bobaList: IBoba[] = [
	{
		name: 'Taro Bubble Tea',
        description: 'Delicious boba with milky flavor',
		store: 'Cube Tea',
		img: Images.boba1,
		tags: ['sweet'],
		cost: '$10',
		stars: 5,
        popularToppings: ['boba'],
		reviews: [
			{
				name: 'Bob',
				content: 'Very delicious! My favorite!',
				stars: 5
			}
		]
	},
];
