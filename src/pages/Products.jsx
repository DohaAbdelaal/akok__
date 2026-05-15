import products from "../data/AkokData";
import ProductCard from "../components/ProductCard";
import useLang from "../context/useLang";

export default function Products() {
  const { t } = useLang();
  return (
    <div  className="max-w-6xl mx-auto px-6 py-16">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">{t.productsSection.title}</h1>
        <p className="text-gray-500">
         {t.productsSection.subtitle}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
       {products && products.length > 0 ? (
         products.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))) : (<p>لا توجد منتجات</p>)
        }
      </div>
    </div>
  );
}
