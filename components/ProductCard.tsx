"use client";

import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';
import { Plus, Minus, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { items, addItem, updateQuantity } = useCart();

    const cartItem = items.find(item => item.id === product.id);
    const quantity = cartItem?.quantity || 0;

    const handleIncrement = () => {
        addItem(product, 1);
    };

    const handleDecrement = () => {
        if (cartItem) {
            updateQuantity(product.id, quantity - 1);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-primary/10 flex flex-col h-full group">
            <div className="relative h-48 w-full overflow-hidden bg-orange-100">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.popular && (
                    <span className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        Popular
                    </span>
                )}
            </div>

            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-foreground line-clamp-1">{product.name}</h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap">
                        {formatPrice(product.price)}
                    </span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {product.description}
                </p>

                <div className="mt-auto pt-4 border-t border-orange-100">
                    {quantity === 0 ? (
                        <button
                            onClick={handleIncrement}
                            className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 active:scale-95"
                            aria-label={`Agregar ${product.name} al carrito`}
                        >
                            <ShoppingBag className="w-4 h-4" />
                            Agregar
                        </button>
                    ) : (
                        <div className="flex items-center justify-between bg-orange-50 rounded-lg p-1 border border-orange-100">
                            <button
                                onClick={handleDecrement}
                                className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-primary hover:bg-orange-100 transition-colors shadow-sm"
                                aria-label="Disminuir cantidad"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-foreground min-w-[1.5rem] text-center">
                                {quantity}
                            </span>
                            <button
                                onClick={handleIncrement}
                                className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-white hover:bg-orange-700 transition-colors shadow-sm"
                                aria-label="Aumentar cantidad"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
