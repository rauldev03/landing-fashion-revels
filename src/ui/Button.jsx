import React from 'react';

/**
 * Componente Button reutilizable y polimórfico adaptado a tema oscuro.
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
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  // Variantes adaptadas al tema oscuro
  const variants = {
    primary:
      'bg-sky-500 hover:bg-sky-400 text-white font-bold shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 active:scale-[0.98]',
    secondary:
      'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-sm active:scale-[0.98]',
    outline:
      'border border-sky-400/60 text-sky-300 hover:bg-sky-950/60 hover:border-sky-400 active:scale-[0.98] backdrop-blur-sm',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/10 active:scale-[0.98]',
  };

  // Tamaños de espaciado y tipografía
  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-bold',
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
