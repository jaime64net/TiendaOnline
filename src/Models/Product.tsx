interface ICategory {
    id: number;
    name: string;
}
interface IProduct {
    id: number;
    title: string;
    price: number;
    category: ICategory[];
    images: string[];
}

export type { ICategory, IProduct }