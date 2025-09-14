import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de origen y destino
const sourceDir = path.join(__dirname, 'dist');
const targetDir = path.join(__dirname, '.vercel', 'output', 'static');
const configDir = path.join(__dirname, '.vercel', 'output');

// Asegurarse de que los directorios existan
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directorio creado: ${dir}`);
  }
}

// Copiar archivos recursivamente
function copyFiles(source, target) {
  ensureDirectoryExists(target);
  
  const files = fs.readdirSync(source);
  
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    
    const stats = fs.statSync(sourcePath);
    
    if (stats.isDirectory()) {
      copyFiles(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Archivo copiado: ${targetPath}`);
    }
  }
}

// Crear config.json para Vercel
function createConfigJson() {
  const configJson = {
    "version": 3,
    "routes": [
      { "handle": "filesystem" },
      { "src": "/.*", "dest": "/index.html" }
    ]
  };
  
  const configPath = path.join(configDir, 'config.json');
  fs.writeFileSync(configPath, JSON.stringify(configJson, null, 2));
  console.log(`Archivo de configuración creado: ${configPath}`);
}

// Ejecutar el proceso de despliegue
console.log('Iniciando preparación para despliegue en Vercel...');
ensureDirectoryExists(configDir);
ensureDirectoryExists(targetDir);
copyFiles(sourceDir, targetDir);
createConfigJson();
console.log('Preparación para despliegue completada con éxito.');