import s from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={s.experience}>
      <div className={s.grid}>
        <div className={s.block}>
          <h3 className={s.title} id={s.one}>
            Tiempo
          </h3>
          <p className={s.description}>
            El día no se mide en horas, sino en momentos.
          </p>
        </div>

        <div className={s.block}>
          <h3 className={s.title} id={s.two}>
            Espacio
          </h3>
          <p className={s.description}>
            Arquitectura simple, naturaleza presente.
          </p>
        </div>

        <div className={s.block}>
          <h3 className={s.title} id={s.three}>
            Presencia
          </h3>
          <p className={s.description}>Menos estímulo, y mucha más atención.</p>
        </div>
      </div>

      <div className={s.hiddenPhraseContainer} id={s.time}>
        <p className={s.time}>No pasa nada, hasta que pasa</p>
      </div>

      <div className={s.hiddenPhraseContainer} id={s.space}>
        <p className={s.space}>Un lugar puede ordenar sin decir nada</p>
      </div>

      <div className={s.hiddenPhraseContainer} id={s.presence}>
        <p className={s.presence}>Cuando bajan los estímulos, sube lo real</p>
      </div>
    </section>
  );
}
