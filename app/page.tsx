import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductList } from "@/components/ProductList";
import { Cart } from "@/components/Cart";
import { StorySection } from "@/components/StorySection";
import { FAQ } from "@/components/FAQ";
import { products } from "@/data/products";

export default function Home() {
  "@context": "https://schema.org",
    "@type": "Restaurant",
      "name": "Empanadas Gourmet",
        "image": "https://empanadas-web.vercel.app/og-image.jpg", // URL de ejemplo, se debe actualizar cuando se tenga dominio real
          "description": "Las mejores empanadas artesanales a domicilio en Bogotá. Masa crujiente y relleno abundante.",
            "address": {
    "@type": "PostalAddress",
      "addressLocality": "Bogotá",
        "addressRegion": "Bogotá D.C.",
          "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
      "latitude": 4.6097,
        "longitude": -74.0817
  },
  "url": "https://empanadas-web.vercel.app",
    "telephone": "+573000000000",
      "menu": "https://empanadas-web.vercel.app/#menu",
        "servesCuisine": "Empanadas, Colombiana",
          "priceRange": "$$"
};

return (
  <CartProvider>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        <StorySection />

        <div id="menu" className="bg-orange-50/50">
          <div className="container mx-auto px-4 py-8 text-center">
            <h2 className="text-3xl font-black text-foreground mb-4">Nuestro Menú</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selecciona tus sabores favoritos. Recuerda que hacemos todo en el momento para garantizar la frescura.
            </p>
          </div>
          <ProductList products={products} />
        </div>

        <FAQ />
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 text-sm text-secondary-foreground/70">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          <p className="opacity-80">© 2024 Empanadas Gourmet. Todos los derechos reservados.</p>
        </div>
      </footer>

      <Cart />
    </div>
  </CartProvider>
);
}
