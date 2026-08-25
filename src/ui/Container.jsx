import React from 'react';

/**
 * Componente Container para delimitar el ancho y mantener espaciado lateral uniforme.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elementos hijos contenidos
 * @param {string} [props.className] - Clases adicionales de Tailwind
 * @param {keyof JSX.IntrinsicElements} [props.as='div'] - Elemento HTML semántico a renderizar
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
