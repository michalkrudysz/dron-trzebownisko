import classes from "./Location.module.scss";

export default function Location() {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.left}>
          <div className={classes.title}>Jasionka</div>
        </div>
        <div className={classes.right}>
          <div className={classes.description}>
            Jasionka to niewielka miejscowość położona w południowo-wschodniej
            Polsce, w województwie podkarpackim, niedaleko Rzeszowa. Jest znana
            przede wszystkim dzięki swojemu rozwijającemu się portowi lotniczemu
            Rzeszów-Jasionka, który stanowi ważny punkt komunikacyjny dla
            regionu, oferując połączenia krajowe i międzynarodowe. Oprócz roli
            transportowej, Jasionka przyciąga uwagę dzięki nowoczesnemu Centrum
            Wystawienniczo-Kongresowemu, które jest miejscem wielu znaczących
            wydarzeń, targów, konferencji i spotkań biznesowych.
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.header}>Dostępne materiały</div>
        <div className={classes.materials}></div>
      </div>
    </div>
  );
}
