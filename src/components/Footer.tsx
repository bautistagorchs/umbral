import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <h1 className={s.titleRevelation}>UMBRAL</h1>
        <div>
          <p className={s.closing}>No es un destino.</p>
          <p className={s.closing}>Es un cruce.</p>
        </div>

        <a
          href="mailto:info@umbral.com"
          className={s.cta}
          aria-label="Solicitar información por correo"
        >
          Solicitar información
        </a>

        <p className={s.revelation}>
          - animarse a no saber tambien es una forma de avanzar -
        </p>
      </div>
    </footer>
  );
}
