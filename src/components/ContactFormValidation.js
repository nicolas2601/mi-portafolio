// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    // Elementos del formulario
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // Mensajes de error
    const createErrorMessage = (message) => {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'text-red-500 text-sm mt-1 error-message';
      errorDiv.textContent = message;
      return errorDiv;
    };
    
    // Eliminar mensajes de error existentes
    const removeErrorMessages = (element) => {
      const parent = element.parentElement.parentElement;
      const existingErrors = parent.querySelectorAll('.error-message');
      existingErrors.forEach(error => error.remove());
    };
    
    // Validar campo de nombre
    const validateName = () => {
      removeErrorMessages(nameInput);
      
      if (nameInput.value.trim() === '') {
        const error = createErrorMessage('Por favor, ingresa tu nombre');
        nameInput.parentElement.parentElement.appendChild(error);
        nameInput.classList.add('border-red-500');
        return false;
      }
      
      if (nameInput.value.trim().length < 3) {
        const error = createErrorMessage('El nombre debe tener al menos 3 caracteres');
        nameInput.parentElement.parentElement.appendChild(error);
        nameInput.classList.add('border-red-500');
        return false;
      }
      
      nameInput.classList.remove('border-red-500');
      return true;
    };
    
    // Validar campo de email
    const validateEmail = () => {
      removeErrorMessages(emailInput);
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (emailInput.value.trim() === '') {
        const error = createErrorMessage('Por favor, ingresa tu correo electrónico');
        emailInput.parentElement.parentElement.appendChild(error);
        emailInput.classList.add('border-red-500');
        return false;
      }
      
      if (!emailRegex.test(emailInput.value.trim())) {
        const error = createErrorMessage('Por favor, ingresa un correo electrónico válido');
        emailInput.parentElement.parentElement.appendChild(error);
        emailInput.classList.add('border-red-500');
        return false;
      }
      
      emailInput.classList.remove('border-red-500');
      return true;
    };
    
    // Validar campo de asunto
    const validateSubject = () => {
      removeErrorMessages(subjectSelect);
      
      if (subjectSelect.value === '') {
        const error = createErrorMessage('Por favor, selecciona un asunto');
        subjectSelect.parentElement.parentElement.appendChild(error);
        subjectSelect.classList.add('border-red-500');
        return false;
      }
      
      subjectSelect.classList.remove('border-red-500');
      return true;
    };
    
    // Validar campo de mensaje
    const validateMessage = () => {
      removeErrorMessages(messageTextarea);
      
      if (messageTextarea.value.trim() === '') {
        const error = createErrorMessage('Por favor, escribe tu mensaje');
        messageTextarea.parentElement.parentElement.appendChild(error);
        messageTextarea.classList.add('border-red-500');
        return false;
      }
      
      if (messageTextarea.value.trim().length < 10) {
        const error = createErrorMessage('El mensaje debe tener al menos 10 caracteres');
        messageTextarea.parentElement.parentElement.appendChild(error);
        messageTextarea.classList.add('border-red-500');
        return false;
      }
      
      messageTextarea.classList.remove('border-red-500');
      return true;
    };
    
    // Validar formulario completo
    const validateForm = () => {
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();
      
      return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
    };
    
    // Eventos de validación en tiempo real
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectSelect.addEventListener('change', validateSubject);
    messageTextarea.addEventListener('blur', validateMessage);
    
    // Evento de envío del formulario
    contactForm.addEventListener('submit', (e) => {
      if (!validateForm()) {
        e.preventDefault();
        return false;
      }
      
      // Mostrar indicador de carga
      submitButton.disabled = true;
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Enviando...
      `;
      
      // Mostrar mensaje de confirmación antes de enviar
      const formContainer = contactForm.closest('.contact-form-container');
      if (formContainer) {
        // Guardar el estado original del formulario
        const originalContent = formContainer.innerHTML;
        
        // Mostrar mensaje de confirmación
        formContainer.innerHTML = `
          <div class="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 text-center">
            <div class="mb-6 inline-flex items-center justify-center">
              <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">¡Enviando mensaje!</h3>
            <p class="text-gray-300 mb-6">Tu mensaje está siendo procesado...</p>
            <div class="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div class="bg-primary-600 h-2.5 rounded-full animate-[loading_2s_ease-in-out_infinite]" style="width: 0%"></div>
            </div>
          </div>
        `;
        
        // Agregar animación de carga
        const style = document.createElement('style');
        style.textContent = `
          @keyframes loading {
            0% { width: 0% }
            50% { width: 70% }
            90% { width: 90% }
            100% { width: 100% }
          }
        `;
        document.head.appendChild(style);
        
        // Pequeño retraso para mostrar la animación antes de enviar
        setTimeout(() => {
          return true;
        }, 800);
      }
      
      // Permitir que el formulario se envíe
      return true;
    });
    
    // Restablecer formulario cuando se carga la página
    contactForm.reset();
  }
});