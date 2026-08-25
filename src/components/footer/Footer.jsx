import React from 'react';
import Container from '../../ui/Container';

/**
 * Componente Footer configurable y modular.
 *
 * @param {Object} props
 * @param {Object} props.brand - Datos de la marca { name, description, logo }
 * @param {Array<{title: string, links: Array<{label: string, href: string}>}>} [props.columns=[]] - Columnas de enlaces
 * @param {string} [props.copyright] - Texto de derechos reservados
 * @param {Array<{name: string, href: string}>} [props.socialLinks=[]] - Enlaces a redes
 */
export default function Footer({
  brand = { name: 'NexusTech', description: 'Plataforma para desarrollo ágil.' },
  columns = [],
  copyright = `© ${new Date().getFullYear()} NexusTech. Todos los derechos reservados.`,
  socialLinks = [],
}) {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 text-slate-400 py-14 sm:py-18">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Columna de Marca */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-black">
                {brand.logo || 'N'}
              </div>
              <span>{brand.name}</span>
            </div>
            {brand.description && (
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                {brand.description}
              </p>
            )}
          </div>

          {/* Columnas de Enlaces de Navegación */}
          {columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label + link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
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
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{copyright}</p>

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="hover:text-slate-300 transition-colors"
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
