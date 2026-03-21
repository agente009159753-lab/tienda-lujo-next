"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/data';

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [product.img, ...(product.gallery || [])];

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Link 
      href={`/product/${product.id}`} 
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0); // Reset on leave
      }}
    >
      <div className="product-card__image-wrapper relative">
        <img 
          src={images[currentImageIndex]} 
          alt={product.name} 
          className="product-card__image transition-opacity duration-300 object-cover w-full h-full absolute top-0 left-0" 
        />
        
        {isHovered && images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 shadow-md w-8 h-8 flex items-center justify-center rounded-full text-black hover:scale-110 transition-all z-10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
              aria-label="Imagen anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 shadow-md w-8 h-8 flex items-center justify-center rounded-full text-black hover:scale-110 transition-all z-10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
              aria-label="Siguiente imagen"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            
            <div className="absolute bottom-2 left-0 w-full flex justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 rounded-full transition-all ${idx === currentImageIndex ? 'w-4 bg-gray-800' : 'w-1.5 bg-gray-300'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="product-card__info mt-3">
        {product.brand && <span className="product-card__brand">{product.brand}</span>}
        <h3 className="product-card__title">{product.name}</h3>
        <span className="product-card__price">{product.price}</span>
      </div>
    </Link>
  );
}
