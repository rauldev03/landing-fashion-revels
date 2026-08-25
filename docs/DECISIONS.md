# Registro de Decisiones Técnicas (ADR)

Este documento registra las decisiones arquitectónicas y técnicas fundamentales adoptadas para este proyecto base.

---

## 1. React + Vite
* **Contexto**: Se requiere una base ágil y moderna para aprender y producir rápidamente.
* **Decisión**: Utilizar **Vite** en lugar de Create React App o frameworks más pesados como Next.js para esta etapa.
* **Motivo**: Vite compila usando ES Modules nativos en desarrollo, lo que otorga un tiempo de arranque instantáneo y Hot Module Replacement ultrarrápido, permitiendo iterar sin demoras en las interfaces.

---

## 2. JavaScript antes de TypeScript
* **Contexto**: El objetivo inicial es consolidar conceptos de React, composición de componentes, paso de props y diseño responsivo.
* **Decisión**: Mantener el proyecto en **JavaScript puro (.jsx)**.
* **Motivo**: Evita sobrecarga cognitiva inicial y fricción de tipado mientras se dominan los fundamentos del Frontend moderno.

---

## 3. Tailwind CSS para Estilizado
* **Contexto**: Se busca un diseño profesional, consistente y adaptable sin escribir cientos de líneas de CSS disperso.
* **Decisión**: Adoptar **Tailwind CSS**.
* **Motivo**: Proporciona un sistema de diseño con escala de espaciados, colores y tipografía predefinida. No agrega peso extra en producción (elimina clases no utilizadas) y agiliza la creación de componentes responsivos directamente en el marcado JSX.

---

## 4. Separación Estricta de Datos y Presentación
* **Contexto**: Las landing pages suelen cambiar frecuentemente de contenido, ofertas o enfoque de negocio.
* **Decisión**: Centralizar los textos e información en `src/data/landingData.js` en lugar de hardcodearlos en los componentes JSX.
* **Motivo**: Permite reutilizar la misma estructura de componentes para decenas de proyectos distintos simplemente reemplazando el archivo de datos o conectándolo a un CMS en el futuro.

---

## 5. Arquitectura Basada en Composición de Componentes
* **Contexto**: Evitar componentes monolíticos y duplicación de código.
* **Decisión**: Dividir la UI en dos capas:
  1. **UI Atómica (`src/ui/`)**: `Button`, `Container`, `SectionTitle`.
  2. **Secciones de Negocio (`src/components/`)**: `Navbar`, `Hero`, `Features`, `CTA`, `Footer`.
* **Motivo**: Favorece el principio de responsabilidad única (Single Responsibility Principle) y el patrón de composición sobre herencia propio del ecosistema React.
