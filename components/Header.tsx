import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
                        <ShoppingBag className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl text-foreground tracking-tight">
                        Empanadas<span className="text-primary">Gourmet</span>
                    </span>
                </Link>

                <nav className="hidden md:flex gap-6 items-center">
                    {['Menú', 'Nosotros', 'Contacto'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-muted-foreground hover:text-primary font-medium transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
