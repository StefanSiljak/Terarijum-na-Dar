export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-animate="fade-left" style={{ opacity: 0 }}>
            <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Naša Priča</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">Strast Pretvorena u Zanat</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              Mi smo mala porodična radionica posvećena stvaranju jedinstvenih terarijuma. Naša priča je započela iz ljubavi prema biljkama i želje da prirodu učinimo dostupnom svima — čak i u najurbanijim prostorima.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              Svaki terarijum koji napravimo je jedinstven — ručno slojen, pažljivo dizajniran i napravljen sa istom pažnjom kao da je poklon za nekoga koga volimo.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Verujemo da mali zeleni ekosistem može da unese mir, lepotu i radost u svaki dom ili kancelariju. Pridružite nam se na ovom putovanju!
            </p>
          </div>
          <div data-animate="fade-right" data-delay="0.2" className="relative" style={{ opacity: 0 }}>
            <img src="/images/terrarium-7.png" alt="Naš terarijum" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
