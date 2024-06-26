import { ImageSourcePropType } from "react-native";

export interface IBoba {
	id: number;
	name: string;
	img: any;
	store: string;
	tags: string[];
	cost: string;
	stars: number;
	reviews: IReview[];
	popularToppings: string[];
	description: string;
}

export interface IReview {
	name: string;
	content: string;
	stars: number;
	author: string;
	img?: ImageSourcePropType;
    id?: number;
}

export interface IBobaInfo {
	bobaId: number;
	origin: string;
	ingredients: string[];
}

export interface IPreferences {
	sweet: boolean;
	refreshing: boolean;
	creamy: boolean;
	herbal: boolean;
	nutty: boolean;
	fruity: boolean;
	hot: boolean;
	cold: boolean;
	nutAllergy: boolean;
	glutenFree: boolean;
	soyAllergy: boolean;
	lactose: boolean;
	sugarFree: boolean;
	caffeineFree: boolean;
	location: number;
}
