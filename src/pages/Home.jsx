import { Button, Card } from "@heroui/react";
import { Link } from "react-router-dom";
import useLang from "../context/useLang";

import heroBg from '../assets/herobg.webp';
import products from "../data/AkokData";

// Hero Section
function HeroSection() {
  const { t } = useLang();

  return (
    <section
      className="
        relative
        min-h-[70vh] lg:min-h-[80vh]
        flex items-center justify-center text-center px-6
        overflow-hidden
      "
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="
            w-full h-full
            object-cover
            object-bottom
            lg:object-bottom
          "
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {t.home.hero.title}
        </h1>

        <p className="text-foreground/70 mb-8 md:text-lg">
          {t.home.hero.description}
        </p>

        <Button as={Link} className="rounded-4xl" to="/Products" color="primary" size="lg">
          {t.home.hero.button}
        </Button>
      </div>
    </section>
  );
}
function FeaturedProducts() {
  const { t, lang } = useLang();
  const featuredProduct = products.filter((product) => product.featured);

  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 text-gray-800">
        {t.home.featuredProducts}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {featuredProduct.map((product) => (
          <Link
            key={product.id}
            to={`/Products/${product.id}`}
            className="group bg-white border border-green-50 rounded-xl overflow-hidden
                       hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            {/* Image */}
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name[lang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-2 text-start">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-green-800">
                {product.name[lang]}
              </h3>

              <p className="text-sm font-semibold text-green-700 mt-1">
                {product.price}
                <span className="text-xs font-normal text-gray-500 ms-1">
                  {lang === "ar" ? "ج.م" : "EGP"}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
// Why AKOK Section (Circular Cards)
function WhyAkok() {
   const { t } = useLang();
  const points = [
    { title: t.home.whyChoose.natural, icon: "🌿" },
    { title: t.home.whyChoose.tested,icon: "🧪" },
    { title: t.home.whyChoose.effective, icon: "✨" },
  ];

  return (
    <section className="px-6 py-16 bg-green-50 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {t.home.whyChoose.title}
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((point, idx) => (
          <Card
            key={idx}
            className="flex flex-col items-center justify-center text-center gap-2 p-6 
                       hover:scale-105 hover:shadow-lg transition-transform duration-300 
                       w-48 h-48 rounded-full mx-auto"
          >
            <div className="text-5xl mb-2">{point.icon}</div>
            <h3 className="text-xl font-semibold">{point.title}</h3>
           
          </Card>
        ))}
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyAkok />
    </>
  );
}
