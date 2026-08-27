import React from 'react';
import LandingLayout from '../layouts/LandingLayout';
import Hero from '../components/hero/Hero';
import HeroShowcase from '../components/hero/HeroShowcase';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import Benefits from '../components/benefits/Benefits';
import CTA from '../components/cta/CTA';
import { landingData } from '../data/landingData';

/**
 * Página principal (Home) para Sora Store.
 * Conecta los datos de `landingData.js` con las secciones mediante composición de componentes.
 * Mantiene la separación de datos y presentación (Single Source of Truth).
 */
export default function Home() {
  const {
    navigation,
    brand,
    hero,
    categories,
    products,
    benefits,
    contact,
    cta,
    footer,
  } = landingData;

  // Objeto de configuración de navegación
  const navbarConfig = {
    brand: { ...brand, href: '#hero' },
    links: navigation.links,
    action: navigation.action,
  };

  return (
    <LandingLayout navbar={navbarConfig} footer={footer}>
      {/* 1. Sección Hero (Propuesta de valor e impacto) */}
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleHighlight={hero.titleHighlight}
        description={hero.description}
        primaryAction={hero.primaryAction}
        secondaryAction={hero.secondaryAction}
        trustIndicators={hero.trustIndicators}
        image={<HeroShowcase showcaseData={hero.showcase} />}
      />

      {/* 2. Sección Categorías (Figuras, Mangas, Merch, Coleccionables) */}
      <Categories
        eyebrow={categories.eyebrow}
        title={categories.title}
        description={categories.description}
        categories={categories.items}
      />

      {/* 3. Sección Productos Destacados (Catálogo con WhatsApp) */}
      <Products
        eyebrow={products.eyebrow}
        title={products.title}
        description={products.description}
        items={products.items}
        filterCategories={products.filterCategories}
        whatsappPhone={contact.phone}
      />

      {/* 4. Sección Beneficios (Por qué comprar en Sora Store) */}
      <Benefits
        eyebrow={benefits.eyebrow}
        title={benefits.title}
        description={benefits.description}
        items={benefits.items}
      />

      {/* 5. Sección Call to Action Final (Contacto directo por WhatsApp) */}
      <CTA
        title={cta.title}
        description={cta.description}
        action={{
          label: cta.actionLabel,
          href: contact.getWhatsAppUrl(contact.defaultMessage),
        }}
        secondaryAction={cta.secondaryAction}
      />
    </LandingLayout>
  );
}
