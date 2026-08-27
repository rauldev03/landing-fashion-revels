import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';

/**
 * Layout estructural para Landing Pages de Sora Store.
 * Envuelve el contenido en el Navbar y Footer estándar.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Secciones de la landing
 * @param {Object} props.navbar - Configuración de navegación
 * @param {Object} props.footer - Configuración del pie de página
 */
export default function LandingLayout({ children, navbar, footer }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950 antialiased">
      {/* Barra de navegación superior */}
      <Navbar
        brand={navbar?.brand}
        links={navbar?.links}
        action={navbar?.action}
      />

      {/* Contenido principal de la landing */}
      <main className="flex-grow">{children}</main>

      {/* Pie de página */}
      <Footer
        brand={footer?.brand}
        columns={footer?.columns}
        copyright={footer?.copyright}
        socialLinks={footer?.socialLinks}
      />
    </div>
  );
}

