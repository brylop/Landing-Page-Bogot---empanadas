import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductList } from "@/components/ProductList";
import { Cart } from "@/components/Cart";
import { products } from "@/data/products";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Empanadas Gourmet",
    "image": "https://example.com/logo.jpg",
    "description": "Las mejores empanadas artesanales a domicilio.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Siempreviva 123",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "postalCode": "1000",
      "addressCountry": "AR"
    },
    "menu": "https://example.com/menu",
    "servesCuisine": "Empanadas Argentinas",
    "priceRange": "$"
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

          <div id="menu" className="bg-orange-50/50">
            <div className="container mx-auto px-4 py-8 text-center">
              <h2 className="text-3xl font-black text-foreground mb-4">Nuestro Menú</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Selecciona tus sabores favoritos. Recuerda que hacemos todo en el momento para garantizar la frescura.
              </p>
            </div>
            <ProductList products={products} />
          </div>
        </main>

        <footer className="bg-secondary text-secondary-foreground py-8 text-center">
          <div className="container mx-auto px-4">
            <p className="opacity-80">© 2024 Empanadas Gourmet. Todos los derechos reservados.</p>
          </div>
        </footer>

        <Cart />
      </div>
    </CartProvider>
  );
}
