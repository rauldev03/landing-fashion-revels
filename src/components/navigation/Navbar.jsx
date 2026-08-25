import React, { useState } from 'react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

/**
 * Componente Navbar configurable y responsivo.
 *
 * @param {Object} props
 * @param {Object} props.brand - Información de la marca { name, href, logo }
 * @param {Array<{label: string, href: string}>} [props.links=[]] - Enlaces de navegación
 * @param {Object} [props.action] - Botón de acción principal { label, href, variant }
 */
export default function Navbar({
  brand = { name: 'NexusTech', href: '#' },
  links = [],
  action,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-950/80 border-b border-slate-800/80 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Marca */}
          <a
            href={brand.href || '#'}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-black shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              {brand.logo || 'N'}
            </div>
            <span>{brand.name}</span>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Acción CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {action && (
              <Button
                href={action.href}
                variant={action.variant || 'primary'}
                size="sm"
              >
                {action.label}
              </Button>
            )}
          </div>

          {/* Botón menú móvil (Hamburguesa) */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isOpen}
            aria-label="Abrir menú de navegación"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {action && (
              <div className="pt-2">
                <Button
                  href={action.href}
                  variant={action.variant || 'primary'}
                  className="w-full"
                  onClick={closeMenu}
                >
                  {action.label}
                </Button>
              </div>
            )}
          </div>
        )}
      </Container>
    </header>
  );
}
