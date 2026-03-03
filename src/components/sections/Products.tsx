import { Card, CardContent } from "@/components/ui/card";

const products = [
  { name: "Klasični Stakleni Terarijum", desc: "Elegantan stakleni terarijum sa pažljivo odabranim biljkama i prirodnim kamenčićima.", img: "/images/terrarium-1.png" },
  { name: "Geometrijski Moderni Terarijum", desc: "Moderan geometrijski dizajn koji se savršeno uklapa u svaki prostor.", img: "/images/terrarium-3.png" },
  { name: "Veliki Dekorativni Terarijum", desc: "Impresivan veliki terarijum idealan kao centralni dekorativni element.", img: "/images/terrarium-5.png" },
  { name: "Mini Desktop Terarijum", desc: "Kompaktan terarijum savršen za radni sto ili policu za knjige.", img: "/images/terrarium-6.png" },
  { name: "Terarijum za Venčanja", desc: "Romantičan terarijum dizajniran kao jedinstven poklon ili dekoracija za venčanja.", img: "/images/terrarium-14.png" },
  { name: "Viseći Stakleni Terarijum", desc: "Lebdeći stakleni terarijum koji donosi prirodu na neočekivana mesta.", img: "/images/terrarium-16.png" },
];

export function Products() {
  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div data-animate="fade-up" className="text-center mb-10 sm:mb-16" style={{ opacity: 0 }}>
          <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Kolekcija</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Naši Terarijumi</h2>
        </div>
        <div data-animate="stagger" data-stagger="0.12" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p) => (
            <Card key={p.name} className="bg-card border-border overflow-hidden group cursor-pointer hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 h-full">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
