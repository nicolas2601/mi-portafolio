// Script para preparar el despliegue en Vercel
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Asegurarse de que existen los directorios necesarios
const outputDir = path.join(__dirname, '.vercel', 'output');
const staticDir = path.join(outputDir, 'static');
const configPath = path.join(outputDir, 'config.json');

// Crear directorios si no existen
if (!fs.existsSync(path.join(__dirname, '.vercel'))) {
  fs.mkdirSync(path.join(__dirname, '.vercel'));
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir);
}

// Crear config.json
const config = {
  "version": 3,
  "routes": [
    {
      "src": "^/(.*)$",
      "dest": "/$1"
    }
  ],
  "overrides": {
    "index.html": {
      "path": "index.html"
    }
  }
};

fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

// Copiar archivos de dist a .vercel/output/static
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to);
  }

  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

// Copiar contenido de dist a .vercel/output/static
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  copyFolderSync(distDir, staticDir);
  console.log('✅ Archivos copiados correctamente de dist a .vercel/output/static');
} else {
  console.error('❌ La carpeta dist no existe. Ejecuta primero "pnpm build"');
}

console.log('✅ Configuración para Vercel preparada correctamente');
console.log('🚀 Ahora puedes desplegar tu sitio en Vercel');