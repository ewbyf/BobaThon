export interface IBoba {
    name: string;
    img: any;
    store: string;
    tags: string[];
    cost: string;
    stars: number;
    reviews: IReview[];
}

export interface IReview {
    name: string;
    content: string;
    stars: number;
}