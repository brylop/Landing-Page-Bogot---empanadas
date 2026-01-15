import { HelpCircle } from "lucide-react";

export function FAQ() {
    const faqs = [
        {
            question: "¿Cuál es la zona de cobertura?",
            answer: "Cubrimos principalmente las zonas de Chapinero, Usaquén y Teusaquillo en Bogotá. Si estás un poco más lejos, escríbenos por WhatsApp y validamos si podemos llegar a ti."
        },
        {
            question: "¿Cuánto tardan en llegar?",
            answer: "Nuestras empanadas se hornean o fríen al momento del pedido. El tiempo promedio de entrega es de 45 a 60 minutos, dependiendo de la demanda y el tráfico."
        },
        {
            question: "¿Cómo puedo pagar?",
            answer: "Aceptamos pagos digitales a través de Nequi y Daviplata, así como efectivo contra entrega y tarjetas de crédito/débito en nuestra plataforma online."
        },
        {
            question: "¿Tienen opciones vegetarianas?",
            answer: "¡Claro que sí! Tenemos deliciosas opciones como Espinaca y Queso, Caprese (Tomate y Albahaca) y Champiñones al Ajillo."
        }
    ];

    return (
        <section className="py-16 bg-gray-50 border-t">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
                        <HelpCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-black text-foreground">Preguntas Frecuentes</h2>
                    <p className="text-muted-foreground mt-2">Todo lo que necesitas saber antes de pedir</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
                            <h3 className="font-bold text-lg mb-2 text-foreground">{faq.question}</h3>
                            <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
