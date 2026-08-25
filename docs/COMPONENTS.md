# Catálogo de Componentes

Guía de referencia rápida de los componentes disponibles en el proyecto, sus propósitos y sus propiedades (`props`).

---

## 1. Componentes Base de UI (`src/ui/`)

### `Button.jsx`
* **Propósito**: Botón interactivo polimórfico. Si recibe `href` se renderiza automáticamente como `<a>`; de lo contrario, como `<button>`.
* **Props**:
  * `children` (*ReactNode*, requerido): Contenido o texto del botón.
  * `variant` (*string*, opcional, default: `'primary'`): `'primary'`, `'secondary'`, `'outline'`, `'ghost'`.
  * `size` (*string*, opcional, default: `'md'`): `'sm'`, `'md'`, `'lg'`.
  * `href` (*string*, opcional): Enlace de redirección.
  * `className` (*string*, opcional): Clases Tailwind adicionales.

### `Container.jsx`
* **Propósito**: Delimitar el ancho máximo (`max-w-7xl`), centrar horizontalmente y aplicar un padding responsivo consistente en todas las pantallas.
* **Props**:
  * `children` (*ReactNode*, requerido): Elementos hijos.
  * `className` (*string*, opcional): Clases adicionales.
  * `as` (*string*, opcional, default: `'div'`): Etiqueta HTML semántica a renderizar (`'div'`, `'section'`, `'header'`, etc.).

### `SectionTitle.jsx`
* **Propósito**: Encabezado estandarizado para cualquier sección (eyebrow + h2 + descripción).
* **Props**:
  * `eyebrow` (*string*, opcional): Badge o texto corto introductorio sobre el título.
  * `title` (*string | ReactNode*, requerido): Título principal de la sección.
  * `description` (*string*, opcional): Párrafo descriptivo o subtítulo.
  * `alignment` (*string*, opcional, default: `'center'`): `'center'` o `'left'`.
  * `className` (*string*, opcional): Clases adicionales.

---

## 2. Secciones Principales (`src/components/`)

### `Navbar.jsx` (`src/components/navigation/`)
* **Propósito**: Barra de navegación superior fija con soporte de menú móvil tipo hamburguesa.
* **Props**:
  * `brand` (*object*): `{ name: string, href?: string, logo?: ReactNode }`.
  * `links` (*array*): Lista de enlaces `[{ label: string, href: string }]`.
  * `action` (*object*, opcional): Botón de llamada a la acción en la barra `{ label: string, href: string, variant?: string }`.

### `Hero.jsx` (`src/components/hero/`)
* **Propósito**: Sección de impacto inicial de la página con propuesta de valor y llamadas a la acción principales.
* **Props**:
  * `eyebrow` (*string*, opcional): Noticia o etiqueta destacada.
  * `title` (*string | ReactNode*, requerido): Título principal.
  * `description` (*string*, requerido): Descripción o propuesta de valor.
  * `primaryAction` (*object*, opcional): Botón principal `{ label: string, href: string }`.
  * `secondaryAction` (*object*, opcional): Botón secundario `{ label: string, href: string }`.
  * `image` (*object | ReactNode*, opcional): Componente o `{ src, alt }` para la vista previa gráfica.
  * `alignment` (*string*, opcional, default: `'center'`): `'center'` o `'left'`.

### `Features.jsx` (`src/components/features/`)
* **Propósito**: Cuadrícula responsiva para listar beneficios, capacidades o características del producto.
* **Props**:
  * `eyebrow` (*string*, opcional): Badge de sección.
  * `title` (*string | ReactNode*, requerido): Título de la sección.
  * `description` (*string*, opcional): Descripción.
  * `features` (*array*, requerido): Lista de items `[{ title: string, description: string, icon?: ReactNode }]`.

### `CTA.jsx` (`src/components/cta/`)
* **Propósito**: Sección final de llamada a la acción para maximizar conversiones y registros.
* **Props**:
  * `title` (*string | ReactNode*, requerido): Título persuasivo.
  * `description` (*string*, requerido): Párrafo de cierre.
  * `action` (*object*, requerido): Botón de acción principal `{ label: string, href: string }`.
  * `secondaryAction` (*object*, opcional): Botón alternativo `{ label: string, href: string }`.

### `Footer.jsx` (`src/components/footer/`)
* **Propósito**: Pie de página con información de marca, columnas de navegación agrupadas y copyright.
* **Props**:
  * `brand` (*object*): `{ name: string, description?: string, logo?: ReactNode }`.
  * `columns` (*array*): Columnas de enlaces `[{ title: string, links: [{ label: string, href: string }] }]`.
  * `copyright` (*string*, opcional): Texto de derechos reservados.
  * `socialLinks` (*array*, opcional): Enlaces de redes sociales `[{ name: string, href: string }]`.
