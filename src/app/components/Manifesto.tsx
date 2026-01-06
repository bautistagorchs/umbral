import s from "./Manifesto.module.css";

export default function Manifesto() {
  return (
    <section className={s.manifesto}>
      <div className={s.content}>
        <p className={s.line}>No todo necesita ser explicado.</p>
        <p className={s.line}>Algunas cosas se sienten.</p>
        <p className={s.line}>Umbral es una pausa.</p>
        <p className={s.line}>Un lugar entre lo que dejás atrás</p>
        <p className={s.line}>y lo que todavía no empezó.</p>
      </div>
    </section>
  );
}
