import React from 'react';

/**
 * Componente Badge atómico para etiquetas, estados y categorías en tema oscuro.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Texto o contenido del badge
 * @param {'sky'|'slate'|'outline'|'success'|'pink'|'amber'} [props.variant='sky'] - Variante de color
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
    'inline-flex items-center gap-1.5 font-medium rounded-full tracking-wide transition-colors backdrop-blur-md';

  const variants = {
    sky: 'bg-sky-950/80 text-sky-300 border border-sky-500/30',
    pink: 'bg-pink-950/80 text-pink-300 border border-pink-500/30',
    amber: 'bg-amber-950/80 text-amber-300 border border-amber-500/30',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700',
    outline: 'border border-sky-400/50 text-sky-400 bg-transparent',
    success: 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30',
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

