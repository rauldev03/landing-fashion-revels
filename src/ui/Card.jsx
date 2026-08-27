import React from 'react';

/**
 * Componente Card atómico reutilizable.
 * Proporciona un contenedor blanco con borde sutil y sombra suave.
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
    'rounded-2xl bg-white border border-slate-200 p-6 shadow-card transition-all duration-300';

  const hoverStyles = hoverEffect
    ? 'hover:border-sky-300 hover:shadow-card-hover'
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
