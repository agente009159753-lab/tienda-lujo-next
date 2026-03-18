"use client";

import Link from 'next/link';
import { useCart } from '@/lib/cartContext';
import Header from '@/components/Header';

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert(`Redirigiendo a pasarela de pago segura...\nTotal a pagar: $${cartTotal.toLocaleString('en-US')}`);
  };

  return (
    <>
      <Header />
      
      <main className="container py-12 min-h-screen">
        <h1 className="text-4xl font-serif mb-8 border-b pb-4">Tu Bolsa de Compras</h1>
        
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mb-6"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <h2 className="text-2xl font-serif text-gray-500 mb-4">No hay artículos en tu bolsa</h2>
            <Link href="/catalog" className="btn btn-outline px-8 py-3">Explorar Colecciones</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 border border-gray-100 p-4 bg-white items-center">
                  <div className="w-32 h-32 bg-gray-50 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain p-2" />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between h-full py-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.brand}</span>
                      <h3 className="text-xl font-serif truncate mt-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">Cantidad: {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 underline w-fit hover:text-red-700 transition"
                    >
                      Remover
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xl font-light">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 h-fit border border-gray-200">
              <h3 className="text-xl font-serif mb-6 uppercase tracking-wider">Resumen de Orden</h3>
              
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toLocaleString('en-US')}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-gray-600">Envío Asegurado</span>
                <span className="text-accent uppercase text-sm font-bold tracking-wider">Gratis</span>
              </div>
              
              <div className="flex justify-between items-center py-6 text-xl">
                <span className="font-serif">Total</span>
                <span className="font-serif">${cartTotal.toLocaleString('en-US')}</span>
              </div>
              
              <button 
                onClick={handleCheckout} 
                className="w-full btn btn-primary text-lg py-4 transition-transform active:scale-95"
              >
                Proceder al Pago
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-6 flex flex-col gap-1 inline-block">
                <span>Transacción encriptada y segura.</span>
                <span>Los impuestos se calculan en el checkout.</span>
              </p>
            </div>
            
          </div>
        )}
      </main>

      <footer className="footer mt-auto">
        <div className="container text-center text-sm text-gray-500">
          <p>&copy; 2026 JHDibs.com, Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
