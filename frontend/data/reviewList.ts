import { IReview } from "@/interfaces/interfaces";
import { Images } from "@/lib/images";
import { ImageSourcePropType } from "react-native";


export const reviewList: IReview[] = [
    {
        name: 'Brown Sugar Pearl Oolong Tea Latte',
        author: 'Lee C.',
        content:
            'This drink is a must! The oolong tea has a delicate floral aroma that perfectly complements the rich brown sugar flavor. The pearls are chewy and bursting with sweetness, and the creamy latte base ties everything together beautifully. A new favorite!"',
        stars: 5,
        id: 2
    },
    {
        name: 'Grapefruit Lemon Fruit Tea',
        author: 'Juan P.',
        content:
            "Their aiyu jelly was delicate and flavorful, and the tea was so refreshing--the more I drank, the more complex the flavors became. I'm usually more of a milk tea fan, but this was kind of like drinking sunshine.",
        stars: 5,
        img: Images.GrapefruitLemonFruitTea,
        id: 3
    },
    {
        name: 'Pineapple Green Tea',
        author: 'Chris L.',
        content:
            'This is a delightful blend of tropical pineapple and refreshing green tea. The sweetness of the pineapple perfectly complements the grassy notes of the green tea, making for a well-balanced and flavorful drink.  Highly recommend!',
        stars: 5,
        img: Images.PineappleGreenTea,
        id: 4
    },
    {
        name: 'Yakult with Passion Fruit Green Tea',
        author: 'Azula L.',
        content:
            "This unique combination is a total winner! The creamy sweetness of Yakult blends surprisingly well with the tangy passion fruit and the subtle earthiness of green tea. It's a delightful explosion of flavors and textures that's both refreshing and satisfying. Definitely recommend giving it a try!",
        stars: 5,
        id: 5
    },
    {
        id: 14,
        name: 'Flower Boy',
        author: 'Miku H.',
        content:
            'Flower Boy is a beautiful drink and really pleasent. 9/10 I would have preferred a more balanced taste between the lavender and the lemonade. The lychee jelly was delicious, though! Overall, a unique and visually appealing boba, but maybe with a less prominent lavender presence.',
        stars: 4.5,
        img: Images.Flower
    },
]