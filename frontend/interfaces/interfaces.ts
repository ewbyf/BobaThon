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
}

export interface IBobaInfo {
  bobaId: number;
  origin: string;
  ingredients: string[];
}
