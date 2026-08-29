import React from 'react';

/**
 * Componente Card atómico reutilizable para tema oscuro.
 * Contenedor oscuro translúcido con borde sutil, efecto glassmorphism y sombra suave.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido de la tarjeta
 * @param {string} [props.className] - Clases Tailwind adicionales
 * @param {boolean} [props.hoverEffect=true] - Activa elevación y borde celeste sutil en hover
 * @param {keyof JSX.IntrinsicElements} [props.as='div'] - Elemento HTML contenedor
 */
export default function Card({
  children,
  className = '',
  hoverEffect = true,
  as: Component = 'div',
  ...props
}) {
  const baseStyles =
    'rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md p-6 shadow-xl transition-all duration-300 text-slate-100';

  const hoverStyles = hoverEffect
    ? 'hover:border-sky-400/50 hover:bg-slate-800/80 hover:shadow-sky-500/10'
    : '';

  return (
    <Component
      className={`${baseStyles} ${hoverStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

