'use client';

import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />

      {/* MAIN CONTENT */}
      <main>
        {/* HERO SECTION */}
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden">
          <img 
            src="/img/hero-bg.jpg" 
            alt="Diseño Extraordinario" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto animate-fade-in text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 md:mb-6 leading-tight drop-shadow-md">Diseño Extraordinario</h1>
            <p className="text-sm md:text-lg lg:text-xl font-light mb-8 max-w-2xl mx-auto drop-shadow-sm">Descubre muebles vintage, arte contemporáneo y joyería fina de los mejores vendedores del mundo.</p>
            <Link href="/catalog" className="inline-block bg-white text-black px-8 py-3 md:px-10 md:py-4 text-sm md:text-base uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors duration-300">
              Comprar Colección
            </Link>
          </div>
        </section>

        {/* FEATURED CATEGORIES */}
        <section className="section container">
          <h2 className="text-3xl text-center mb-lg">Categorías Destacadas</h2>
          <br /><br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <Link href="/catalog/muebles" className="group">
              <div style={{ aspectRatio: 1, overflow: 'hidden', marginBottom: '1rem', backgroundColor: 'var(--color-gray-100)' }}>
                <img src="/img/p1.png" alt="Muebles" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover:scale-105" />
              </div>
              <h3 className="text-xl text-center">Mobiliario</h3>
            </Link>
            <Link href="/catalog/iluminacion" className="group">
              <div style={{ aspectRatio: 1, overflow: 'hidden', marginBottom: '1rem', backgroundColor: 'var(--color-gray-100)' }}>
                <img src="/img/luxury_lamp.png" alt="Iluminación" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover:scale-105" />
              </div>
              <h3 className="text-xl text-center">Iluminación</h3>
            </Link>
            <Link href="/catalog/arte" className="group">
              <div style={{ aspectRatio: 1, overflow: 'hidden', marginBottom: '1rem', backgroundColor: 'var(--color-gray-100)' }}>
                <img src="/img/p3.png" alt="Arte" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover:scale-105" />
              </div>
              <h3 className="text-xl text-center">Arte Fino</h3>
            </Link>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="section container text-center">
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 0' }}>
            <h2 className="text-3xl mb-sm" style={{ marginBottom: '1rem' }}>Suscríbete a JHDibs</h2>
            <p className="text-muted mb-lg" style={{ marginBottom: '2rem' }}>Recibe acceso anticipado a nuevas colecciones y contenido editorial exclusivo.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por suscribirte!'); }} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <input type="email" placeholder="Tu correo electrónico" required style={{ padding: '0.75rem 1rem', border: '1px solid var(--color-gray-300)', width: '100%', maxWidth: '300px', fontFamily: 'inherit' }} />
              <button type="submit" className="btn btn-primary">Suscribir</button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <h4 className="footer__title">Comprar</h4>
              <div className="footer__links">
                <Link href="#">Muebles</Link>
                <Link href="#">Arte</Link>
                <Link href="#">Joyería & Relojes</Link>
              </div>
            </div>
            <div>
              <h4 className="footer__title">Vender</h4>
              <div className="footer__links">
                <Link href="#">Vende en JHDibs</Link>
                <Link href="#">Portal del Vendedor</Link>
              </div>
            </div>
            <div>
              <h4 className="footer__title">Acerca de</h4>
              <div className="footer__links">
                <Link href="#">Nuestra Historia</Link>
                <Link href="#">Prensa</Link>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span className="text-serif text-xl text-black">JHDibs</span>
            <p>&copy; 2026 JHDibs.com, Inc. Todos los derechos reservados.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#">Términos</Link>
              <Link href="#">Privacidad</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
