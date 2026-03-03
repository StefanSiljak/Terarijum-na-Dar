const benefits = [
  { icon: "✋", title: "100% Ručni Rad", desc: "Svaki terarijum je pažljivo ručno napravljen sa ljubavlju i posvećenošću." },
  { icon: "🌿", title: "Kvalitetne Biljke", desc: "Koristimo samo zdrave i pažljivo odabrane biljke za dugovečnost." },
  { icon: "👨‍👩‍👧", title: "Porodične Vrednosti", desc: "Porodični biznis zasnovan na strasti prema prirodi i zanatstvu." },
  { icon: "🎨", title: "Porudžbine po Meri", desc: "Pravimo terarijume po vašim željama — veličina, biljke, stil, sve po meri." },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div data-animate="fade-up" className="text-center mb-10 sm:mb-16" style={{ opacity: 0 }}>
          <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Prednosti</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Zašto Mi?</h2>
        </div>
        <div data-animate="stagger" data-stagger="0.1" className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{b.icon}</div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-primary mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
