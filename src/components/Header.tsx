"use client";

import Link from 'next/link';
import { useCart } from '@/lib/cartContext';

export default function Header() {
  const { cartCount } = useCart();
  
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo">JHDibs</Link>
        <nav className="header__nav">
          <Link href="/catalog">Todos los Productos</Link>
          <Link href="/catalog/muebles">Muebles</Link>
          <Link href="/catalog/arte">Arte</Link>
          <Link href="/catalog/joyeria">Joyería</Link>
          <Link href="/catalog/iluminacion">Iluminación</Link>
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
