"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getProducts, Product } from '@/lib/data';
import Header from '@/components/Header';

export default function MueblesCatalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const all = getProducts();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts(all.filter(p => p.category === 'muebles'));
  }, []);

  return (
    <>
      <Header />

      <main className="container py-12 min-h-screen">
        <h1 className="text-4xl font-serif mb-2">Colección de Muebles</h1>
        <p className="text-gray-500 mb-8">Diseño contemporáneo y piezas clásicas del medio siglo.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-card__image-wrapper">
                <img src={product.img} alt={product.name} className="product-card__image" />
              </div>
              <div className="product-card__info">
                <span className="product-card__brand">{product.brand}</span>
                <h3 className="product-card__title">{product.name}</h3>
                <span className="product-card__price">{product.price}</span>
              </div>
            </Link>
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
