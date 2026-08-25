# Arquitectura del Proyecto (Landing Base)

Esta base está diseñada siguiendo principios de **desarrollo frontend modular**, priorizando componentes reutilizables, bajo acoplamiento y separación estricta entre **datos (contenido)** y **presentación (UI)**.

---

## 1. Stack Tecnológico

* **React 18**: Biblioteca base para construcción de interfaces declarativas basadas en componentes.
* **Vite 6**: Empaquetador y entorno de desarrollo de alta velocidad con HMR (Hot Module Replacement) instantáneo.
* **Tailwind CSS 3**: Motor de estilos utility-first para diseño responsivo, tokens consistentes y cero sobrecarga en runtime.
* **JavaScript (ESModules)**: Sintaxis moderna, limpia y estándar sin la fricción inicial de tipos.
* **Vercel**: Configuración lista para despliegue continuo con cero configuración adicional.

---

## 2. Estructura de Directorios

```text
landing-jdia/
├── docs/                      # Documentación arquitectónica y de componentes
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   └── DECISIONS.md
├── public/                    # Assets estáticos servidos directamente
│   └── favicon.svg
├── src/
│   ├── components/            # Secciones principales de la Landing Page
│   │   ├── navigation/        # Navbar y menús
│   │   ├── hero/              # Hero y propuestas de valor
│   │   ├── features/          # Grids de características y beneficios
│   │   ├── cta/               # Secciones de llamada a la acción
│   │   └── footer/            # Pie de página y enlaces
│   ├── ui/                    # Componentes atómicos base reutilizables
│   │   ├── Button.jsx         # Botones y enlaces polimórficos
│   │   ├── Container.jsx      # Delimitador de ancho y padding uniforme
│   │   └── SectionTitle.jsx   # Encabezados de sección consistentes
│   ├── layouts/               # Estructuras de página (Shells)
│   │   └── LandingLayout.jsx  # Envuelve Navbar + Contenido + Footer
│   ├── pages/                 # Páginas completas compuestas
│   │   └── Home.jsx           # Landing demo conectada a datos
│   ├── data/                  # Fuente de verdad de contenido y textos
│   │   └── landingData.js
│   ├── styles/                # Estilos globales y directivas Tailwind
│   │   └── index.css
│   ├── App.jsx                # Componente raíz
│   └── main.jsx               # Entrypoint de React
├── index.html                 # Plantilla HTML con SEO y tipografía
├── package.json               # Dependencias y scripts
├── tailwind.config.js         # Configuración del tema y tokens
└── vite.config.js             # Configuración del bundler
```

---

## 3. Composición de la Landing Page

La aplicación sigue el patrón de **Composición de Componentes**:

```text
App
 └── Home
      └── LandingLayout (Navbar + Footer)
           ├── Hero (recibe props de hero)
           ├── Features (recibe props de features)
           └── CTA (recibe props de cta)
```

Cada sección es agnóstica al negocio específico y delega sus estilos a los componentes atómicos en `src/ui/` (`Container`, `Button`, `SectionTitle`).

---

## 4. Separación de Datos y Presentación

Para cambiar por completo el contenido de una Landing Page (por ejemplo, adaptarla para una SaaS de finanzas, una app móvil o un servicio B2B):

1. **No tocas el JSX de los componentes**: Los componentes solo se encargan de *cómo se ve y cómo responde* la interfaz.
2. **Modificas `src/data/landingData.js`**: Allí se definen títulos, subtítulos, enlaces, botones y listas.
3. Los datos fluyen de forma unidireccional (*Props Down*): `landingData` ➔ `Home.jsx` ➔ `[Componentes de Sección]`.
