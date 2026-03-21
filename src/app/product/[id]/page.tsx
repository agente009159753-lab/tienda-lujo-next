"use client";

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { getProductById, Product } from '@/lib/data';
import { useCart } from '@/lib/cartContext';
import Header from '@/components/Header';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const { addToCart } = useCart();

  useEffect(() => {
    // We fetch from our client-side localStorage DB
    const foundProduct = getProductById(resolvedParams.id);
    if (foundProduct) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProduct(foundProduct);
      setSelectedImage(foundProduct.img);
    }
    setLoading(false);
  }, [resolvedParams.id]);

  const handleAddToCart = async () => {
    if (product) {
      addToCart(product);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      
      // Notificar al bot local de WhatsApp
      try {
        await fetch('http://localhost:3001/notify-cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ producto: product.name, precio: product.price })
        });
      } catch (e) {
        console.error('Bot no disponible, ignorando alerta.');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Cargando detalles...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-serif">Producto no encontrado</h1>
        <Link href="/catalog" className="text-accent underline">Regresar al catálogo</Link>
      </div>
    );
  }

  const allImages = [product.img, ...(product.gallery || [])];

  return (
    <>
      <Header />
      
      {showToast && (
        <div className="fixed top-24 right-4 md:right-8 bg-black text-white px-6 py-4 rounded shadow-2xl z-50 animate-fade-in flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span className="font-medium">Has añadido: {product.name}</span>
        </div>
      )}

      <main className="container py-12 lg:py-24 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="flex flex-col gap-4">
            {/* Imagen Principal */}
            <div className="w-full bg-gray-100 flex items-center justify-center p-8 aspect-square overflow-hidden border">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain hover:scale-105 transition-all duration-700 ease-in-out"
                style={{
                  opacity: 1, 
                  animation: 'luxuryFadeIn 0.4s ease-out'
                }}
                key={selectedImage} // React re-renders and re-triggers the CSS animation by changing the key
              />
            </div>
            
            {/* Miniaturas de Galería */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`shrink-0 w-24 h-24 bg-gray-50 flex items-center justify-center border-2 transition-all p-2
                      ${selectedImage === img ? 'border-accent opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="max-w-full max-h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">{product.brand}</span>
              <h1 className="text-4xl md:text-5xl font-macha mt-2 mb-4">{product.name}</h1>
              <span className="text-2xl font-light">{product.price}</span>
            </div>
            
            <hr className="border-gray-200" />
            
            <div className="prose prose-lg text-gray-600">
              <p>{product.description}</p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={handleAddToCart} className="btn btn-primary flex-1 text-lg py-4 transition-transform active:scale-95">Añadir al Carrito</button>
              <button onClick={handleAddToCart} className="btn btn-outline flex-1 text-lg py-4">Comprar Ahora</button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400 space-y-2">
              <p>✓ Envío asegurado gratuito a nivel mundial.</p>
              <p>✓ Certificado de Autenticidad incluido.</p>
              <p>✓ Categoría: <span className="capitalize">{product.category}</span></p>
            </div>
          </div>
          
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
