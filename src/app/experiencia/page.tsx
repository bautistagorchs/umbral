import Footer from "../../components/Footer";
import s from "./page.module.css";

export const metadata = {
  title: "Experiencia — UMBRAL",
  description: "Cómo se vive Umbral",
};

export default function ExperienciaPage() {
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <video
          className={s.video}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/experiencia-hero.mp4" type="video/mp4" />
        </video>
        <div className={s.overlay}></div>
        <div className={s.heroContent}>
          <p className={s.heroText}>
            No es lo que pasa.
            <br />
            Es cómo se siente pasar.
          </p>
        </div>
      </section>

      <section className={s.section} id={s.time}>
        <div className={s.container}>
          <h3 className={s.sectionTitle}>Tiempo</h3>
          <p className={s.sectionText}>Las horas no tienen nombre aquí.</p>
          <p className={s.sectionText}>
            El día se construye por capas, no por tareas.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <video
          className={s.video}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/experiencia-espacio.mp4" type="video/mp4" />
        </video>
        <div className={s.container}>
          <h3 className={s.sectionTitle}>Espacio</h3>
          <p className={s.sectionText}>Arquitectura que respira.</p>
          <p className={s.sectionText}>
            Paredes que no separan, que sostienen el silencio.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <video
          className={s.video}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/experiencia-presencia.mp4" type="video/mp4" />
        </video>
        <div className={s.container}>
          <h3 className={s.sectionTitle}>Presencia</h3>
          <p className={s.sectionText}>No hay agenda, hay atención.</p>
          <p className={s.sectionText}>Lo que importa es estar, no hacer.</p>
        </div>
      </section>
    </main>
  );
}
