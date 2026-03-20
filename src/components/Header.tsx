"use client";

import Link from 'next/link';
import { useCart } from '@/lib/cartContext';
import { useState } from 'react';

export default function Header() {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="flex items-center gap-sm">
          <button 
            className="mobile-menu-btn block md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <Link href="/" className="header__logo">JHDibs</Link>
        </div>
        
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <Link href="/catalog" onClick={() => setIsMenuOpen(false)}>Todos los Productos</Link>
          <Link href="/catalog/muebles" onClick={() => setIsMenuOpen(false)}>Muebles</Link>
          <Link href="/catalog/arte" onClick={() => setIsMenuOpen(false)}>Arte</Link>
          <Link href="/catalog/joyeria" onClick={() => setIsMenuOpen(false)}>Joyería</Link>
          <Link href="/catalog/iluminacion" onClick={() => setIsMenuOpen(false)}>Iluminación</Link>
        </nav>
        
        <div className="header__actions">
          <Link href="/cart" className="cart-icon-wrapper block" aria-label="Carrito de compras">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
