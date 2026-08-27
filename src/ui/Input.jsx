import React from 'react';

/**
 * Componente Input reutilizable para formularios y campos de texto.
 * Soporta inputs normales, textareas y selects.
 *
 * @param {Object} props
 * @param {string} [props.label] - Etiqueta superior del campo
 * @param {string} [props.error] - Mensaje de error de validación
 * @param {string} [props.helperText] - Texto de ayuda inferior
 * @param {string} [props.type='text'] - Tipo de input HTML
 * @param {boolean} [props.isTextArea=false] - Si renderiza un <textarea>
 * @param {string} [props.className=''] - Clases adicionales
 */
export default function Input({
  label,
  error,
  helperText,
  type = 'text',
  isTextArea = false,
  className = '',
  id,
  name,
  required,
  ...props
}) {
  const inputId = id || name || Math.random().toString(36).substring(7);

  const baseInputStyles =
    'w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20';

  const stateStyles = error
    ? 'border-rose-500/80 focus:border-rose-500'
    : 'border-slate-800 focus:border-sky-500';

  return (
    <div className={`space-y-1.5 text-left ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
        >
          {label}
          {required && <span className="text-sky-400 ml-1">*</span>}
        </label>
      )}

      {isTextArea ? (
        <textarea
          id={inputId}
          name={name}
          required={required}
          className={`${baseInputStyles} ${stateStyles} resize-none`}
          rows={props.rows || 3}
          {...props}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          required={required}
          className={`${baseInputStyles} ${stateStyles}`}
          {...props}
        />
      )}

      {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      )}
    </div>
  );
}

