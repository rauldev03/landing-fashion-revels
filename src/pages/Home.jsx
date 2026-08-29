import React from 'react';
import LandingLayout from '../layouts/LandingLayout';
import Hero from '../components/hero/Hero';
import HeroShowcase from '../components/hero/HeroShowcase';
import About from '../components/about/About';
import Categories from '../components/categories/Categories';
import Benefits from '../components/benefits/Benefits';
import CTA from '../components/cta/CTA';
import { landingData } from '../data/landingData';

/**
 * Página principal (Home) para Fashion Revels.
 * Conecta los datos de `landingData.js` con las secciones mediante composición de componentes.
 * Mantiene la separación de datos y presentación (Single Source of Truth).
 */
export default function Home() {
  const {
    navigation,
    brand,
    hero,
    about,
    categories,
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
      {/* 1. Sección Hero (Propuesta de valor e impacto con 3D Lensflare) */}
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

      {/* 2. Sección Sobre Nosotros (Historia, autenticidad y pilares) */}
      {about && (
        <About
          eyebrow={about.eyebrow}
          title={about.title}
          titleHighlight={about.titleHighlight}
          description={about.description}
          story={about.story}
          features={about.features}
          image={about.image}
          action={about.action}
        />
      )}

      {/* 3. Sección Categorías: Encuentra lo que buscas (Figuras, Mangas, Merch, Coleccionables) */}
      <Categories
        eyebrow={categories.eyebrow}
        title={categories.title}
        titleHighlight={categories.titleHighlight}
        description={categories.description}
        categories={categories.items}
      />

      {/* 4. Sección Beneficios (Por qué comprar en Fashion Revels) */}
      <Benefits
        eyebrow={benefits.eyebrow}
        title={benefits.title}
        titleHighlight={benefits.titleHighlight}
        description={benefits.description}
        items={benefits.items}
      />

      {/* 5. Sección Call to Action Final (Contacto directo por WhatsApp) */}
      <CTA
        title={cta.title}
        titleHighlight={cta.titleHighlight}
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
