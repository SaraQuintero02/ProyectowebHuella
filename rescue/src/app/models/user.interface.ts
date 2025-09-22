// Interfaz para definir la estructura de datos del usuario
export interface User {
  nombre: string;
  correo: string;
  telefono: string;
  fecha_registro: string;
  tipo_usuario: 'Voluntario' | 'Donante' | 'Adoptante';
}

// Opciones disponibles para tipo de usuario
export const TIPOS_USUARIO = [
  { value: 'voluntario', label: 'Voluntario' },
  { value: 'donante', label: 'Donante' },
  { value: 'adoptante', label: 'Adoptante' }
] as const;