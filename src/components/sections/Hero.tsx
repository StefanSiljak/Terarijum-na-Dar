import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section data-animate="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/terrarium-12.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(145,200,170,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(145,200,170,0.15) 0%, transparent 50%)" }} />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 data-hero="title" className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-4 sm:mb-6 leading-tight" style={{ opacity: 0 }}>
          Ručno Pravljeni Terarijumi kao Jedinstveni Pokloni
        </h1>
        <p data-hero="subtitle" className="text-base sm:text-lg md:text-xl text-primary/70 mb-8 sm:mb-10 max-w-2xl mx-auto font-light" style={{ opacity: 0 }}>
          Radionice i Porudžbine po Meri — Unesite delić prirode u svaki prostor
        </p>
        <div data-hero="buttons" className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center" style={{ opacity: 0 }}>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full font-semibold" asChild>
            <a href="#products">Pogledajte Kolekciju</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full" asChild>
            <a href="#contact">Zakažite Radionicu</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2.5 sm:w-1.5 sm:h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
