import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const DefaultPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: 'var(--color-blue-50)',
      100: 'var(--color-blue-100)',
      400: 'var(--color-blue-400)',
      500: 'var(--color-blue-500)',
      600: 'var(--color-blue-600)',
      700: 'var(--color-blue-700)',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          400: 'var(--color-gray-400)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          800: 'var(--color-navy-800)',
          900: 'var(--color-navy-900)',
        },
      },
    },
  },
});
