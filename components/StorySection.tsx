import { Wheat, CheckCircle2, Heart } from 'lucide-react';

export function StorySection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">

                {/* Nuestra Historia */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                        El Arte de la Masa
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        En <span className="font-semibold text-primary">Empanadas Gourmet</span>, no solo vendemos empanadas; compartimos una herencia.
                        Todo comenzó en la cocina de la abuela en Bogotá, donde aprendimos que el secreto no es solo el relleno,
                        sino una masa que cruje y se deshace en la boca. Llevamos más de 10 años perfeccionando nuestra receta,
                        horneando cada mañana para asegurar que cuando lleguen a tu mesa, sientas el calor de hogar.
                    </p>
                </div>

                {/* Proceso de Calidad */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-orange-50/50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                        <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <Wheat className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">100% Artesanal</h3>
                        <p className="text-muted-foreground">
                            Masas hechas a mano diariamente. Sin congelados industriales ni procesos automatizados.
                        </p>
                    </div>

                    <div className="bg-orange-50/50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                        <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Ingredientes Frescos</h3>
                        <p className="text-muted-foreground">
                            Vegetales de mercado local y carnes seleccionadas. Cortamos y cocinamos todo el mismo día.
                        </p>
                    </div>

                    <div className="bg-orange-50/50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                        <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <Heart className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Hecho con Amor</h3>
                        <p className="text-muted-foreground">
                            Cada repulgue se hace a mano, garantizando que el relleno generoso se mantenga en su lugar.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
