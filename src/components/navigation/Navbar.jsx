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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-white/10 shadow-lg shadow-black/20 transition-all">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Marca */}
          <a
            href={brand.href || '#hero'}
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-white group"
          >
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-sky-400/40 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform bg-slate-900"
              />
            ) : (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 via-pink-400 to-amber-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-sky-400/25 group-hover:scale-105 transition-transform">
                <svg
                  className="w-4 h-4 text-slate-950"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors">
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
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-200"
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
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
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
          <div className="md:hidden py-4 border-t border-white/10 space-y-3 bg-slate-900/95 backdrop-blur-lg rounded-b-2xl px-2">
            <nav className="flex flex-col space-y-1">
              {links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
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

