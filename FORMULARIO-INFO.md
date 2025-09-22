# Sistema de Formulario de Contacto

## Implementación con FormSubmit

Este proyecto utiliza [FormSubmit](https://formsubmit.co/) como servicio para el procesamiento de formularios. FormSubmit es una solución gratuita y sin registro que permite enviar formularios directamente a tu correo electrónico.

## Características implementadas

### 1. Configuración básica
- Formulario configurado para enviar mensajes a: `nm5571762@gmail.com`
- Asunto personalizado: "Nuevo mensaje desde el portafolio"
- Formato de correo en tabla para mejor legibilidad
- Redirección a página de agradecimiento después del envío

### 2. Seguridad
- Protección CAPTCHA activada para prevenir spam
- Campo honeypot implementado como capa adicional anti-spam
- Validación de datos en el lado del cliente

### 3. Experiencia de usuario
- Validación en tiempo real de los campos
- Mensajes de error específicos para cada campo
- Animación de carga durante el envío
- Página de confirmación personalizada

## Archivos modificados/creados

1. `src/pages/contact.astro` - Formulario principal con configuración de FormSubmit
2. `src/components/ContactFormValidation.js` - Script de validación del formulario
3. `src/pages/gracias.astro` - Página de agradecimiento tras envío exitoso

## Cómo funciona

1. El usuario completa el formulario en la página de contacto
2. La validación en JavaScript verifica que todos los campos sean correctos
3. Al enviar, se muestra una animación de carga
4. FormSubmit procesa el formulario y envía el correo electrónico
5. El usuario es redirigido a la página de agradecimiento

## Personalización

Puedes personalizar varios aspectos del formulario:

### Cambiar el correo de destino
Modifica el atributo `action` en el formulario:
```html
<form action="https://formsubmit.co/tu-nuevo-email@ejemplo.com" method="POST">
```

### Desactivar CAPTCHA
Cambia el valor del campo oculto `_captcha` a `false`:
```html
<input type="hidden" name="_captcha" value="false">
```

### Cambiar la URL de redirección
Modifica el valor del campo oculto `_next`:
```html
<input type="hidden" name="_next" value="/tu-nueva-pagina">
```

## Solución de problemas

### El formulario no envía correos
1. Verifica que la dirección de correo esté correcta en el atributo `action`
2. Asegúrate de que el formulario tenga el método `POST`
3. La primera vez que se usa FormSubmit con una dirección de correo nueva, se envía un correo de confirmación que debes aceptar

### Aparecen errores de validación incorrectos
Revisa el archivo `ContactFormValidation.js` y ajusta las reglas de validación según tus necesidades.

### La redirección no funciona
Asegúrate de que la ruta en el campo `_next` sea correcta y que la página de destino exista.

---

**Nota:** FormSubmit tiene un límite de 50 envíos por día en su plan gratuito. Si necesitas más capacidad, considera actualizar a un plan de pago o migrar a otro servicio como Formspree o Netlify Forms.