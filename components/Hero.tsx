import Image from "next/image";

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 py-20 lg:py-32">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
                        El verdadero sabor <br />
                        <span className="text-primary block mt-2">Artesanal & Gourmet</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        Empanadas hechas a mano con ingredientes premium. La receta de la abuela, con un toque moderno. Calientes en tu puerta.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-transform hover:scale-105 shadow-lg shadow-orange-500/20">
                            Ver Menú
                        </button>
                        <button className="bg-white text-foreground border-2 border-orange-100 px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-colors">
                            Nuestra Historia
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative blob or pattern could go here */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10 bg-[url('/pattern.svg')] bg-repeat" />
        </div>
    );
}
