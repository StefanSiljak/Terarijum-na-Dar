import { Card } from "@/components/ui/card";

const testimonials = [
  { text: "Terarijum koji sam dobila na poklon je prelepa! Kvalitet izrade je neverovatno visok, a biljke su savršeno odabrane.", name: "Milica J.", role: "Zadovoljan kupac" },
  { text: "Radionica je bila fantastično iskustvo za ceo tim. Toplo preporučujem svima koji traže nešto drugačije i kreativno.", name: "Stefan M.", role: "Korporativni tim bilding" },
  { text: "Naručili smo terarijume kao poklone za venčanje i gosti su bili oduševljeni. Hvala na divnoj saradnji!", name: "Ana i Marko", role: "Svadbeni pokloni" },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div data-animate="fade-up" className="text-center mb-10 sm:mb-16" style={{ opacity: 0 }}>
          <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Iskustva</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Utisci Kupaca</h2>
        </div>
        <div data-animate="stagger" data-stagger="0.15" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-card border-border p-6 sm:p-8 h-full flex flex-col">
              <div className="text-accent text-2xl sm:text-3xl mb-3 sm:mb-4">❝</div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border">
                <p className="text-primary font-semibold text-sm sm:text-base">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
