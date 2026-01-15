"use client";

import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';
import { ShoppingCart, MessageCircle, X, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Cart() {
    const { items, total, itemCount, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    if (itemCount === 0) return null;

    const generateWhatsAppMessage = () => {
        const header = "Hola, me gustaría pedir:";
        const itemList = items
            .map(item => `• ${item.quantity}x ${item.name} ($${item.price * item.quantity})`)
            .join('\n');
        const footer = `\n*Total: ${formatPrice(total)}*`;
        const message = encodeURIComponent(`${header}\n${itemList}\n${footer}`);
        // Replace with actual number
        window.open(`https://wa.me/5491112345678?text=${message}`, '_blank');
    };

    return (
        <>
            {/* Mobile/Desktop Floating Button */}
            <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative bg-primary text-white p-4 rounded-full shadow-xl hover:bg-orange-700 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
                    aria-label="Ver carrito"
                >
                    <ShoppingCart className="w-6 h-6" />
                    <span className="bg-white text-primary text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center absolute -top-2 -right-2 border-2 border-primary shadow-sm">
                        {itemCount}
                    </span>
                    <span className="hidden md:block font-bold ml-1">
                        {formatPrice(total)}
                    </span>
                </button>
            </div>

            {/* Cart Panel */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end pointer-events-none">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Panel */}
                    <div className="w-full md:w-96 bg-white shadow-2xl rounded-t-2xl md:rounded-2xl md:mr-4 pointer-events-auto max-h-[85vh] flex flex-col md:mb-20 animate-in slide-in-from-bottom-10 fade-in zoom-in-95 duration-300">
                        <div className="p-4 bg-primary text-white rounded-t-2xl flex justify-between items-center shadow-md">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                Tu Pedido
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-4 overflow-y-auto flex-1 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center border-b border-orange-50 pb-2 last:border-0">
                                    <div>
                                        <p className="font-medium text-foreground">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {item.quantity} x {formatPrice(item.price)}
                                        </p>
                                    </div>
                                    <div className="font-bold text-primary">
                                        {formatPrice(item.price * item.quantity)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-orange-100 bg-orange-50/50 rounded-b-2xl">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-lg text-foreground">Total</span>
                                <span className="font-bold text-2xl text-primary">{formatPrice(total)}</span>
                            </div>

                            <button
                                onClick={generateWhatsAppMessage}
                                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95 mb-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Pedir por WhatsApp
                            </button>

                            <p className="text-xs text-center text-muted-foreground mt-2">
                                Te enviaremos a WhatsApp para coordinar el envío.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
