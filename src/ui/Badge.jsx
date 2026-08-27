import React from 'react';

/**
 * Componente Badge atómico para etiquetas, estados y categorías.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Texto o contenido del badge
 * @param {'sky'|'slate'|'outline'|'success'} [props.variant='sky'] - Variante de color
 * @param {'sm'|'md'} [props.size='sm'] - Tamaño del badge
 * @param {string} [props.className] - Clases Tailwind adicionales
 */
export default function Badge({
  children,
  variant = 'sky',
  size = 'sm',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-medium rounded-full tracking-wide transition-colors';

  const variants = {
    sky: 'bg-sky-100 text-sky-600 border border-sky-200',
    slate: 'bg-slate-100 text-slate-600 border border-slate-200',
    outline: 'border border-sky-400 text-sky-600',
    success: 'bg-green-100 text-green-700 border border-green-200',
    pink: 'bg-anime-100 text-anime-600 border border-anime-200',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1 text-xs font-semibold',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant] || variants.sky} ${sizes[size] || sizes.sm} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
