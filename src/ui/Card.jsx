import React from 'react';

/**
 * Componente Card atómico reutilizable.
 * Proporciona un contenedor con fondo oscuro, borde sutil y estados hover suaves.
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
    'rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300';

  const hoverStyles = hoverEffect
    ? 'hover:border-sky-500/30 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-sky-500/5'
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
