'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem('esAdmin') === 'true';
    if (!isAdmin) {
      router.push('/login');
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuth(true);
    }
  }, [router]);

  if (!isAuth) return <div className="min-h-screen flex items-center justify-center">Verificando acceso...</div>;

  return (
    <div className="admin-layout flex min-h-screen bg-gray-50 dark:bg-zinc-900 border-t-4" style={{ borderColor: 'var(--color-accent)' }}>
      <aside className="w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-zinc-800 p-6 flex flex-col justify-between hidden md:flex">
        <div>
           <h2 className="text-2xl font-serif font-bold mb-8 text-black dark:text-white">JHDibs Admin</h2>
           <nav className="flex flex-col gap-4">
             <Link href="/admin" className="text-sm font-medium hover:text-accent transition-colors">Dashboard</Link>
             <Link href="/admin" className="text-sm font-medium hover:text-accent transition-colors">Productos</Link>
             <Link href="/admin" className="text-sm font-medium hover:text-accent transition-colors">Órdenes</Link>
             <Link href="/" className="text-sm font-medium text-gray-400 mt-8 hover:text-black dark:hover:text-white transition-colors">&larr; Volver a Tienda Pública</Link>
           </nav>
        </div>
        <button onClick={() => { localStorage.removeItem('esAdmin'); router.push('/'); }} className="text-sm font-medium text-red-500 hover:text-red-700 text-left transition-colors">
           Cerrar Sesión
        </button>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
