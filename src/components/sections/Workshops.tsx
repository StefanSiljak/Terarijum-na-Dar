import { Card } from "@/components/ui/card";

const workshops = [
  { emoji: "👨‍👩‍👧‍👦", title: "Za Koga Su?", desc: "Za sve uzraste i nivoe iskustva — parove, porodice, prijatelje i korporativne timove koji žele kreativno iskustvo." },
  { emoji: "🌱", title: "Šta Ćete Naučiti?", desc: "Kako odabrati biljke, slojevito aranžiranje supstrata, pravilno postavljanje i održavanje vašeg terarijuma." },
  { emoji: "🎁", title: "Šta Dobijate?", desc: "Sve materijale, stručno vođstvo i vaš gotov terarijum koji nosite kući — plus čaj i kolačiće!" },
];

export function Workshops() {
  return (
    <section id="workshops" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div data-animate="fade-up" className="text-center mb-10 sm:mb-16" style={{ opacity: 0 }}>
          <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Iskustvo</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Radionice</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">Naučite da pravite svoj terarijum u opuštenoj i kreativnoj atmosferi.</p>
        </div>
        <div data-animate="stagger" data-stagger="0.15" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {workshops.map((w) => (
            <Card key={w.title} className="bg-card border-border p-6 sm:p-8 text-center hover:border-accent/50 transition-all duration-500 h-full">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{w.emoji}</div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary mb-3">{w.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{w.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
