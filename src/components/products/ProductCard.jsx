import React from 'react';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

/**
 * Componente ProductCard para exhibir cada artículo del catálogo.
 *
 * @param {Object} props
 * @param {Object} props.product - Datos del producto
 * @param {string} props.product.name - Nombre del producto
 * @param {string} props.product.category - Categoría a la que pertenece
 * @param {string} props.product.price - Precio o rango de precio
 * @param {string} [props.product.badge] - Etiqueta destacada (ej: Popular, Nuevo)
 * @param {string} [props.product.description] - Breve descripción
 * @param {string} [props.product.image] - URL de imagen opcional
 * @param {string} [props.whatsappPhone] - Número de teléfono configurado
 * @param {Function} [props.onConsult] - Callback alternativo de consulta
 */
export default function ProductCard({
  product,
  whatsappPhone = '5491100000000',
  onConsult,
}) {
  const { name, category, price, badge, description, image } = product;

  // Generamos el enlace de WhatsApp preformateado para este producto específico
  const message = `¡Hola Sora Store! Me interesa consultar por el producto: "${name}" (${category} - ${price}). ¿Tienen disponibilidad?`;
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="flex flex-col justify-between p-5 sm:p-6 group relative overflow-hidden h-full">
      {/* Contenedor Superior: Imagen / Preview Visual + Badges */}
      <div>
        <div className="relative mb-5 rounded-xl bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center overflow-hidden group-hover:border-sky-300 transition-all duration-300">
          {/* Badge superior si existe */}
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant="sky" size="sm">
                {badge}
              </Badge>
            </div>
          )}

          {/* Categoría superior derecha */}
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[11px] font-mono font-medium text-slate-500 bg-white/90 px-2 py-0.5 rounded-md border border-slate-200">
              {category}
            </span>
          </div>

          {/* Imagen real o Ilustración moderna estilizada */}
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-sky-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Item Coleccionable
              </span>
            </div>
          )}

          {/* Resplandor sutil de fondo en hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-30 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Información del Producto */}
        <div className="space-y-2 mb-4">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
            {name}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Contenedor Inferior: Precio + Botón de Consulta a WhatsApp */}
      <div className="pt-4 mt-2 border-t border-slate-200 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
            Precio
          </span>
          <span className="text-xl font-bold text-sky-600 font-mono">
            {price}
          </span>
        </div>

        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="sm"
          className="gap-1.5 whitespace-nowrap"
          onClick={(e) => {
            if (onConsult) {
              e.preventDefault();
              onConsult(product);
            }
          }}
        >
          {/* Icono de WhatsApp / Mensaje */}
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          <span>Consultar</span>
        </Button>
      </div>
    </Card>
  );
}
