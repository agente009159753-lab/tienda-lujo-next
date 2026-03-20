"use client";

import { useState, useEffect } from 'react';
import { saveProduct, updateProduct, deleteProduct, getProducts, Product } from '@/lib/data';

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    name: '', brand: '', price: '', category: 'muebles', img: '', description: '', gallery: ['', '', '', '']
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const refreshProducts = () => {
    setProducts(getProducts());
  };

  // Load products on mount
  useEffect(() => {
    refreshProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGalleryChange = (index: number, value: string) => {
    const newGallery = [...formData.gallery];
    newGallery[index] = value;
    setFormData({ ...formData, gallery: newGallery });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.img || !formData.description) return;

    // Filter out empty gallery strings
    const validGallery = formData.gallery.filter(img => img.trim() !== '');

    const finalProductData = {
      ...formData,
      gallery: validGallery.length > 0 ? validGallery : undefined
    };

    if (editingId !== null) {
      updateProduct({ ...finalProductData, id: editingId } as Product);
      setSuccessMsg('¡Producto actualizado exitosamente!');
    } else {
      saveProduct({
          name: finalProductData.name,
          brand: finalProductData.brand,
          price: finalProductData.price,
          img: finalProductData.img,
          category: finalProductData.category,
          description: finalProductData.description,
          gallery: finalProductData.gallery
      });
      setSuccessMsg('¡Producto añadido exitosamente!');
    }

    setFormData({ name: '', brand: '', price: '', category: 'muebles', img: '', description: '', gallery: ['', '', '', ''] });
    setEditingId(null);
    refreshProducts();
    
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleEdit = (product: Product) => {
    // Populate gallery if exists, otherwise fill with empty strings up to 4
    const existingGallery = product.gallery || [];
    const editGallery = [
      existingGallery[0] || '',
      existingGallery[1] || '',
      existingGallery[2] || '',
      existingGallery[3] || ''
    ];

    setFormData({
      name: product.name,
      brand: product.brand,
      price: product.price,
      category: product.category,
      img: product.img,
      description: product.description || '',
      gallery: editGallery
    });
    setEditingId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: number) => {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      deleteProduct(id);
      setSuccessMsg('¡Producto eliminado!');
      refreshProducts();
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const cancelEdit = () => {
    setFormData({ name: '', brand: '', price: '', category: 'muebles', img: '', description: '', gallery: ['', '', '', ''] });
    setEditingId(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-serif mb-6">Dashboard Principal</h1>
      
      {/* Formulario */}
      <div className="bg-white p-8 border border-gray-200 shadow-sm mb-10">
        <h2 className="text-2xl font-serif mb-6">{editingId ? 'Editar Producto' : 'Añadir Nuevo Producto'}</h2>
        
        {successMsg && (
          <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Nombre del Producto *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border p-3 focus:outline-none focus:border-accent" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Marca</label>
              <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="border p-3 focus:outline-none focus:border-accent" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Precio (Ej: $1,200) *</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} required className="border p-3 focus:outline-none focus:border-accent" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Categoría</label>
              <select name="category" value={formData.category} onChange={handleChange} className="border p-3 focus:outline-none focus:border-accent bg-white">
                <option value="muebles">Muebles</option>
                <option value="iluminacion">Iluminación</option>
                <option value="arte">Arte</option>
                <option value="joyeria">Joyería</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium font-bold text-accent">Imagen Principal (URL) *</label>
            <div className="flex gap-4 items-center">
              {formData.img && (
                <div className="w-16 h-16 border rounded overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
                  <img src={formData.img} alt="Preview principal" className="max-w-full max-h-full object-contain" />
                </div>
              )}
              <input type="text" name="img" value={formData.img} onChange={handleChange} required className="border p-3 focus:outline-none focus:border-accent flex-1" placeholder="/img/p1.png" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-l-4 border-gray-200 pl-4 py-2 mt-2">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">Imagen Adicional {index + 1} (Opcional)</label>
                <div className="flex gap-3 items-center">
                  {formData.gallery[index] && (
                    <div className="w-12 h-12 border rounded overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
                      <img src={formData.gallery[index]} alt={`Preview opcional ${index + 1}`} className="max-w-full max-h-full object-contain" />
                    </div>
                  )}
                  <input type="text" value={formData.gallery[index] || ''} onChange={(e) => handleGalleryChange(index, e.target.value)} className="border p-2 focus:outline-none focus:border-accent text-sm flex-1" placeholder={`/img/gallery${index + 1}.png`} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium">Descripción Detallada *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows={3} className="border p-3 focus:outline-none focus:border-accent" />
          </div>

          <div className="flex flex-wrap gap-4 justify-end mt-4">
            {editingId && (
              <button type="button" onClick={cancelEdit} className="btn btn-outline px-8">Cancelar</button>
            )}
            <button type="submit" className="btn btn-primary px-8">
              {editingId ? 'Guardar Cambios' : 'Añadir Producto'}
            </button>
          </div>
        </form>
      </div>

      {/* Tabla de Productos */}
      <div className="bg-white p-8 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-serif mb-6">Todos los Productos en el Catálogo</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm tracking-wider uppercase text-gray-400">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Fotos</th>
                <th className="p-4 font-medium">Nombre</th>
                <th className="p-4 font-medium">Categoría</th>
                <th className="p-4 font-medium">Precio</th>
                <th className="p-4 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 py-3 text-sm text-gray-500">#{product.id.toString().slice(-4)}</td>
                  <td className="p-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-white flex items-center justify-center p-1 border">
                        <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      {product.gallery && product.gallery.length > 0 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">+{product.gallery.length}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 py-3 font-medium">{product.name}</td>
                  <td className="p-4 py-3 capitalize">{product.category}</td>
                  <td className="p-4 py-3">{product.price}</td>
                  <td className="p-4 py-3 text-right">
                    <button onClick={() => handleEdit(product)} className="text-accent hover:underline mr-4">Editar</button>
                    <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700 hover:underline">Eliminar</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400">No hay productos en la tienda.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
