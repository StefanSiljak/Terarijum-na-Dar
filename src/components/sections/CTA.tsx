import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/terrarium-20.png')" }} />
      <div className="absolute inset-0 bg-black/75" />
      <div data-animate="scale-in" className="container mx-auto max-w-3xl text-center relative z-10" style={{ opacity: 0 }}>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">Spremni da Unesete Prirodu u Dom?</h2>
        <p className="text-primary/70 text-sm sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">Kontaktirajte nas za porudžbine po meri ili zakažite radionicu za nezaboravno iskustvo.</p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-5 sm:py-6 rounded-full font-semibold text-sm sm:text-base" asChild>
          <a href="#contact">Kontaktirajte Nas</a>
        </Button>
      </div>
    </section>
  );
}
