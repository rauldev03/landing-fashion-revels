import React from 'react';
import Container from '../../ui/Container';

/**
 * Componente Footer configurable y modular para Sora Store.
 *
 * @param {Object} props
 * @param {Object} props.brand - Datos de la marca { name, description, logoText }
 * @param {Array<{title: string, links: Array<{label: string, href: string}>}>} [props.columns=[]] - Columnas de enlaces
 * @param {string} [props.copyright] - Texto de derechos reservados
 * @param {Array<{name: string, href: string}>} [props.socialLinks=[]] - Enlaces a redes
 */
export default function Footer({
  brand = { name: 'Sora Store', description: 'Figuras, mangas y coleccionables para fans del anime.' },
  columns = [],
  copyright = `© ${new Date().getFullYear()} Sora Store. Todos los derechos reservados.`,
  socialLinks = [],
}) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-500 py-14 sm:py-18">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Columna de Marca */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-lg font-bold text-slate-900 group"
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
              <span className="group-hover:text-sky-600 transition-colors">
                {brand.name}
              </span>
            </a>
            {brand.description && (
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                {brand.description}
              </p>
            )}
          </div>

          {/* Columnas de Enlaces de Navegación */}
          {columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label + link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-sky-500 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Línea divisoria y Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{copyright}</p>

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 transition-colors"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}

