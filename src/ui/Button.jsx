import React from 'react';

/**
 * Componente Button reutilizable y polimórfico.
 * Renderiza un enlace <a> si recibe `href`, o un <button> si no.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido interno del botón
 * @param {'primary'|'secondary'|'outline'|'ghost'} [props.variant='primary'] - Estilo visual
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Tamaño del botón
 * @param {string} [props.href] - URL de destino opcional
 * @param {string} [props.className] - Clases Tailwind adicionales
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  // Clases base compartidas por todas las variantes
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  // Variantes de color y bordes adaptadas a la paleta celeste
  const variants = {
    primary:
      'bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 active:scale-[0.98]',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-slate-600 shadow-sm active:scale-[0.98]',
    outline:
      'border border-sky-500/40 text-sky-400 hover:bg-sky-950/40 hover:border-sky-400 active:scale-[0.98]',
    ghost:
      'text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-[0.98]',
  };

  // Tamaños de espaciado y tipografía
  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-semibold',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`.trim();

  // Si tiene href, renderizamos un elemento <a> semántico
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

