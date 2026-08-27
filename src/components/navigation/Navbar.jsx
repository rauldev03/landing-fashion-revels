import React, { useState } from 'react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

/**
 * Componente Navbar configurable y responsivo para Sora Store.
 *
 * @param {Object} props
 * @param {Object} props.brand - Información de la marca { name, href, logoText }
 * @param {Array<{label: string, href: string}>} [props.links=[]] - Enlaces de navegación
 * @param {Object} [props.action] - Botón de acción principal { label, href, variant }
 */
export default function Navbar({
  brand = { name: 'Sora Store', href: '#hero', logoText: 'S' },
  links = [],
  action,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm transition-all">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Marca */}
          <a
            href={brand.href || '#hero'}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-anime-400 flex items-center justify-center text-white font-black shadow-md shadow-sky-400/25 group-hover:scale-105 transition-transform">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                {brand.name}
              </span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-200"
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
            className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
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
          <div className="md:hidden py-4 border-t border-slate-100 space-y-3 bg-white/95 rounded-b-2xl px-2">
            <nav className="flex flex-col space-y-1">
              {links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
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

