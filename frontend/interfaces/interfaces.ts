import { ImageSourcePropType } from "react-native";
import { Source } from "react-native-fast-image";

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
  img?: Source;
}

export interface IBobaInfo {
  bobaId: number;
  origin: string;
  ingredients: string[];
}
