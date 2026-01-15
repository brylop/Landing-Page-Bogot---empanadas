export type Category = 'Saladas' | 'Dulces' | 'Bebidas';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    imageUrl: string;
    popular?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Order {
    items: CartItem[];
    total: number;
    customerName?: string;
    customerAddress?: string;
}
