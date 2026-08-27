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
    sky: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700',
    outline: 'border border-sky-500/40 text-sky-300',
    success: 'bg-sky-500/20 text-sky-300 border border-sky-400/30',
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
