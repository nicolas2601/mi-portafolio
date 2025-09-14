# Mi Portafolio

Portafolio personal desarrollado con Astro, Tailwind CSS y funcionalidad de contacto con Resend.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 📧 Formulario de contacto funcional con Resend
- 🎨 Estilizado con Tailwind CSS
- ⚡ Optimizado para rendimiento
- 🌐 Desplegado en Vercel

## 🛠️ Tecnologías

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/) para emails
- [Vercel](https://vercel.com/) para deployment

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nicolas2601/mi-portafolio.git

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
RESEND_API_KEY=tu_api_key_de_resend
CONTACT_EMAIL=tu_email@ejemplo.com
```

### Configuración en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel:
   - `RESEND_API_KEY`: Tu API key de Resend
   - `CONTACT_EMAIL`: Email que recibirá los mensajes de contacto
3. Asegúrate de que el adaptador de Vercel esté configurado como `serverless` en `astro.config.mjs`:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind(), react()]
});
```

4. Verifica que tu archivo `vercel.json` tenga la configuración correcta:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "astro",
  "installCommand": "pnpm install --no-frozen-lockfile",
  "env": {
    "RESEND_API_KEY": "$RESEND_API_KEY",
    "CONTACT_EMAIL": "$CONTACT_EMAIL"
  },
  "functions": {
    "api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

5. El deployment se realizará automáticamente

## 🔧 Solución de problemas comunes

### Error: Config file was not found at "/vercel/path0/.vercel/output/config.json"

Este error ocurre cuando hay una discrepancia entre la configuración de Astro y Vercel. Para solucionarlo:

1. Asegúrate de usar el adaptador correcto en `astro.config.mjs`:
   - Si tienes APIs o rutas dinámicas: usa `@astrojs/vercel/serverless` y `output: 'server'`
   - Si solo tienes contenido estático: usa `@astrojs/vercel/static` y `output: 'static'`

2. Verifica que la carpeta `api` esté correctamente estructurada si estás usando funciones serverless.

3. Limpia la caché de Vercel antes de volver a desplegar:
   - Ve a la configuración del proyecto en Vercel
   - Busca la opción "Clear Cache and Redeploy"

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

## 📧 Formulario de Contacto

El formulario de contacto utiliza:
- Validación del lado del cliente y servidor
- Envío de emails a través de Resend
- Manejo de errores y mensajes de éxito
- Sanitización de datos de entrada

## 🌐 Deployment

El proyecto está configurado para deployment automático en Vercel:

1. Push a la rama `main`
2. Vercel detecta automáticamente Astro
3. Configura las variables de entorno necesarias
4. El sitio se despliega automáticamente

## 📝 Estructura del Proyecto

```
/
├── public/
│   └── assets estáticos
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── api/
│   │   │   └── contact.ts
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   └── contact.astro
│   └── styles/
├── astro.config.mjs
├── vercel.json
└── package.json
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
