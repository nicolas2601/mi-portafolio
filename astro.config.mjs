// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Configuración actualizada para Vercel Analytics
    // La configuración webAnalytics está obsoleta para @vercel/analytics@1.4.0+
    // Ahora se debe usar el componente Analytics directamente en el código
  }),
  integrations: [tailwind(), react()]
});