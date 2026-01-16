"use client";

import { useState, useEffect } from "react";
import s from "./Footer.module.css";
import Modal from "./Modal";
import { useForm, ValidationError } from "@formspree/react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit] = useForm("mlgggdjl");

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);
    }
  }, [state.succeeded]);

  return (
    <>
      <footer className={s.footer}>
        <div className={s.content}>
          <h1 className={s.titleRevelation}>UMBRAL</h1>
          <div>
            <p className={s.closing}>No es un destino.</p>
            <p className={s.closing}>Es un cruce.</p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className={s.cta}
            aria-label="Solicitar información"
          >
            Solicitar información
          </button>

          <p className={s.revelation}>
            - animarse a no saber tambien es una forma de avanzar -
          </p>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {state.succeeded ? (
          <div className={s.successMessage}>
            <h2>Gracias por tu interés</h2>
            <p>Te contactaremos pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={s.form}>
            <h2 className={s.formTitle}>Solicitar Información</h2>
            <p className={s.formSubtitle}>
              Dejanos tus datos y te contactaremos
            </p>

            <div className={s.formGroup}>
              <label htmlFor="name" className={s.label}>
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className={s.input}
                required
              />
              <ValidationError
                prefix="Nombre"
                field="name"
                errors={state.errors}
                className={s.error}
              />
            </div>

            <div className={s.formGroup}>
              <label htmlFor="email" className={s.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={s.input}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className={s.error}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className={s.submitButton}
            >
              {state.submitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
