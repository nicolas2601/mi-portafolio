document.addEventListener("DOMContentLoaded",()=>{const l=document.getElementById("contactForm");if(l){const r=document.getElementById("name"),n=document.getElementById("email"),o=document.getElementById("subject"),s=document.getElementById("message"),c=l.querySelector('button[type="submit"]'),a=e=>{const t=document.createElement("div");return t.className="text-red-500 text-sm mt-1 error-message",t.textContent=e,t},i=e=>{e.parentElement.parentElement.querySelectorAll(".error-message").forEach(m=>m.remove())},u=()=>{if(i(r),r.value.trim()===""){const e=a("Por favor, ingresa tu nombre");return r.parentElement.parentElement.appendChild(e),r.classList.add("border-red-500"),!1}if(r.value.trim().length<3){const e=a("El nombre debe tener al menos 3 caracteres");return r.parentElement.parentElement.appendChild(e),r.classList.add("border-red-500"),!1}return r.classList.remove("border-red-500"),!0},p=()=>{i(n);const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(n.value.trim()===""){const t=a("Por favor, ingresa tu correo electrónico");return n.parentElement.parentElement.appendChild(t),n.classList.add("border-red-500"),!1}if(!e.test(n.value.trim())){const t=a("Por favor, ingresa un correo electrónico válido");return n.parentElement.parentElement.appendChild(t),n.classList.add("border-red-500"),!1}return n.classList.remove("border-red-500"),!0},v=()=>{if(i(o),o.value===""){const e=a("Por favor, selecciona un asunto");return o.parentElement.parentElement.appendChild(e),o.classList.add("border-red-500"),!1}return o.classList.remove("border-red-500"),!0},b=()=>{if(i(s),s.value.trim()===""){const e=a("Por favor, escribe tu mensaje");return s.parentElement.parentElement.appendChild(e),s.classList.add("border-red-500"),!1}if(s.value.trim().length<10){const e=a("El mensaje debe tener al menos 10 caracteres");return s.parentElement.parentElement.appendChild(e),s.classList.add("border-red-500"),!1}return s.classList.remove("border-red-500"),!0},f=()=>{const e=u(),t=p(),d=v(),m=b();return e&&t&&d&&m};r.addEventListener("blur",u),n.addEventListener("blur",p),o.addEventListener("change",v),s.addEventListener("blur",b),l.addEventListener("submit",e=>{if(!f())return e.preventDefault(),!1;c.disabled=!0,c.innerHTML,c.innerHTML=`
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Enviando...
      `;const t=l.closest(".contact-form-container");if(t){t.innerHTML,t.innerHTML=`
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
        `;const d=document.createElement("style");d.textContent=`
          @keyframes loading {
            0% { width: 0% }
            50% { width: 70% }
            90% { width: 90% }
            100% { width: 100% }
          }
        `,document.head.appendChild(d),setTimeout(()=>!0,800)}return!0}),l.reset()}});
