import { useRef, useState } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { personalInfo } from "../data/info";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honey?: string;
};

interface ContactProps {
  nextUrl: string;
}

function FieldError({ id, error }: { id: string; error?: FieldError }) {
  if (!error) return null;

  return (
    <p className="contact-field-error" id={id} role="alert">
      {error.message}
    </p>
  );
}

export default function Contact({ nextUrl }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitError, setSubmitError] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ mode: "onBlur" });

  const onSubmit = () => {
    setSubmitError("");
    setIsRedirecting(true);
    if (!formRef.current) {
      setIsRedirecting(false);
      setSubmitError("The form could not be sent. Please try again.");
      return;
    }
    formRef.current.submit();
  };

  const onInvalid = () => {
    setSubmitError("Review the highlighted fields before sending your message.");
  };

  const isLoading = isSubmitting || isRedirecting;

  return (
    <form
      ref={formRef}
      className="contact-form"
      action={`https://formsubmit.co/${personalInfo.email}`}
      method="POST"
      noValidate
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      aria-busy={isLoading}
    >
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_template" value="table" />

      <div className="contact-form-heading">
        <p className="contact-kicker">02 / TRANSMISSION</p>
        <h2 id="contact-form-title">Send a message</h2>
        <p>Responderé lo antes posible.</p>
      </div>

      {submitError && (
        <p className="contact-form-status contact-form-status-error" role="alert" aria-live="assertive">
          {submitError}
        </p>
      )}

      <div className="contact-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          autoComplete="name"
          placeholder="Tu nombre"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name", {
            required: "Por favor, ingresa tu nombre",
            minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
          })}
        />
        <FieldError id="name-error" error={errors.name} />
      </div>

      <div className="contact-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          inputMode="email"
          placeholder="tu@email.com"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: "Por favor, ingresa tu correo electrónico",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Por favor, ingresa un correo electrónico válido",
            },
          })}
        />
        <FieldError id="email-error" error={errors.email} />
      </div>

      <div className="contact-field">
        <label htmlFor="subject">Subject</label>
        <select
          id="subject"
          defaultValue=""
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject", { required: "Por favor, selecciona un asunto" })}
        >
          <option value="" disabled>Select a subject</option>
          <option value="Desarrollo web">Desarrollo web</option>
          <option value="Backend y APIs">Backend y APIs</option>
          <option value="Automatización">Automatización</option>
          <option value="Oportunidad laboral">Oportunidad laboral</option>
        </select>
        <FieldError id="subject-error" error={errors.subject} />
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Cuéntame sobre tu proyecto…"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            required: "Por favor, escribe tu mensaje",
            minLength: { value: 10, message: "El mensaje debe tener al menos 10 caracteres" },
          })}
        />
        <FieldError id="message-error" error={errors.message} />
      </div>

      <div className="contact-honeypot" hidden>
        <label htmlFor="_honey">Leave this field empty</label>
        <input id="_honey" tabIndex={-1} autoComplete="off" {...register("_honey")} />
      </div>

      <button className="contact-submit" type="submit" disabled={isLoading}>
        {isLoading ? "Sending…" : "Send message"}
      </button>
      <p className="contact-form-status" role="status" aria-live="polite">
        {isLoading ? "Your message is being sent…" : ""}
      </p>
    </form>
  );
}
