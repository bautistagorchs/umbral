import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/umbral-hero2.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>UMBRAL</h1>
        <p className={styles.subtitle}>
          Un espacio para cruzar del ruido a la presencia.
        </p>
      </div>
    </section>
  );
}
