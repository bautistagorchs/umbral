import styles from "./VisualSection.module.css";

export default function VisualSection() {
  return (
    <section className={styles.visual}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/umbral-visual.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
    </section>
  );
}
