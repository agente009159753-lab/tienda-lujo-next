import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cartContext";

export const metadata: Metadata = {
  title: "JHDibs | Muebles, Arte & Joyería de Lujo",
  description: "Descubre muebles vintage, arte contemporáneo y joyería fina de los mejores vendedores del mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
