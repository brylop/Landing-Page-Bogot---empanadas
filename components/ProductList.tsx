"use client";

import { useState } from 'react';
import { Product, Category } from '@/types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    const [activeCategory, setActiveCategory] = useState<Category | 'Todas'>('Todas');

    const categories: (Category | 'Todas')[] = ['Todas', 'Saladas', 'Dulces', 'Bebidas'];

    const filteredProducts = activeCategory === 'Todas'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`
              px-6 py-2 rounded-full font-medium transition-all duration-300
              ${activeCategory === category
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-muted-foreground hover:bg-orange-50 hover:text-primary border border-transparent hover:border-orange-100'
                            }
            `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
