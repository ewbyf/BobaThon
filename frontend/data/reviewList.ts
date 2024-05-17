import { IReview } from "@/interfaces/interfaces";
import { Images } from "@/lib/images";
import { ImageSourcePropType } from "react-native";

interface ReviewListType {
    name: string;
    author: string;
    content: string;
    stars: number;
    img: ImageSourcePropType;
}

export const reviewList: ReviewListType[] = [
    {
        name: 'Taro with Milk',
        author: 'Eric Wong',
        content: 'Very delicious boba! Easily my favorite!',
        stars: 5,
        img: Images.TarowithMilk
    },
    {
        name: 'Taro with Milk',
        author: 'Eric Wong',
        content: 'Very delicious boba! Easily my favorite!',
        stars: 5,
        img: Images.TarowithMilk
    },
    {
        name: 'Taro with Milk',
        author: 'Eric Wong',
        content: 'Very delicious boba! Easily my favorite!',
        stars: 5,
        img: Images.TarowithMilk
    },
]