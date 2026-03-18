'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
       localStorage.setItem('esAdmin', 'true');
       router.push('/admin');
    } else {
       setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 p-4">
      <div className="bg-white dark:bg-black p-8 md:p-12 rounded shadow-2xl w-full max-w-md border-t-4 border-gray-200" style={{ borderTopColor: 'var(--color-accent)' }}>
        <h1 className="text-3xl text-center mb-2 font-serif font-medium text-black dark:text-white">JHDibs Admin</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Por favor ingresa tus credenciales</p>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded text-sm mb-6 border border-red-100">
            Credenciales incorrectas (tip: admin / 1234)
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
             <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Usuario</label>
             <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 rounded outline-none focus:border-black dark:focus:border-white transition-colors" placeholder="ej. admin" required />
          </div>
          <div>
             <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Contraseña</label>
             <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 rounded outline-none focus:border-black dark:focus:border-white transition-colors" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn-primary mt-2 w-full py-4 uppercase tracking-widest text-sm bg-black text-white dark:bg-white dark:text-black font-semibold rounded hover:opacity-90 transition-opacity">
            Ingresar
          </button>
        </form>
        <div className="mt-8 text-center">
           <a href="/" className="text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white pb-1">Volver a la Tienda Pública</a>
        </div>
      </div>
    </div>
  );
}
