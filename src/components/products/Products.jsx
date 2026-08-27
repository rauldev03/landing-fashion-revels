import React, { useState } from 'react';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import ProductCard from './ProductCard';

/**
 * Componente Products para presentar el catálogo interactivo de productos destacados.
 * Permite filtrar por categorías y consultar disponibilidad por WhatsApp.
 *
 * @param {Object} props
 * @param {string} [props.eyebrow] - Etiqueta superior
 * @param {string|React.ReactNode} props.title - Título de la sección
 * @param {string} [props.description] - Descripción del catálogo
 * @param {Array<Object>} [props.items=[]] - Lista de productos
 * @param {Array<string>} [props.filterCategories=[]] - Lista de categorías para el filtro
 * @param {string} [props.whatsappPhone] - Número de teléfono para consultas
 */
export default function Products({
  eyebrow,
  title,
  description,
  items = [],
  filterCategories = ['Todos', 'Figuras', 'Mangas', 'Merchandising', 'Coleccionables'],
  whatsappPhone,
}) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Filtrado reactivo de productos
  const filteredProducts =
    selectedCategory === 'Todos'
      ? items
      : items.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 sm:py-28 relative bg-slate-50">
      <Container>
        {/* Encabezado de la Sección */}
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          alignment="center"
          className="mb-10 sm:mb-12"
        />

        {/* Pestañas de Filtro por Categoría */}
        {filterCategories.length > 0 && (
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12 sm:mb-16">
            {filterCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-400/25 scale-105'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-400 hover:text-sky-600'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Grilla de Tarjetas de Productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id || product.name}
                product={product}
                whatsappPhone={whatsappPhone}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-white border border-slate-200">
            <p className="text-slate-500 text-sm">
              No hay productos disponibles en esta categoría en este momento.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('Todos')}
              className="mt-3 text-xs text-sky-500 font-semibold hover:underline cursor-pointer">
              Ver todos los productos
            </button>
          </div>
        )}

        {/* Nota informativa de compra */}
          <div className="mt-14 p-4 sm:p-5 rounded-2xl bg-sky-50 border border-sky-200 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 text-sky-600 font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ¿Buscas una pieza específica que no ves aquí?
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Escríbenos y gestionamos tu pedido especial</span>
        </div>
      </Container>
    </section>
  );
}
