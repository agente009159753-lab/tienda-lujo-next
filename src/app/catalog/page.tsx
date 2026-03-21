"use client"
import { useState, useEffect } from 'react';
import { getProducts, Product } from '@/lib/data';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts(getProducts());
  }, []);

  return (
    <>
      <Header />

      <main className="container py-12 min-h-screen">
        <h1 className="text-4xl font-serif mb-2">Catálogo</h1>
        <p className="text-gray-500 mb-8">Nuestra colección completa curada para ti.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="footer mt-auto">
        <div className="container text-center text-sm text-gray-500">
          <p>&copy; 2026 JHDibs.com, Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
