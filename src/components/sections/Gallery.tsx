const images = [
  "/images/terrarium-ig1.png",
  "/images/terrarium-ig2.png",
  "/images/terrarium-ig3.png",
  "/images/terrarium-ig4.png",
  "/images/terrarium-18.png",
  "/images/terrarium-10.png",
  "/images/terrarium-11.png",
  "/images/terrarium-19.png",
];

export function Gallery() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div data-animate="stagger" data-stagger="0.06" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Galerija ${i + 1}`} className="w-full aspect-square object-cover rounded-xl hover:scale-105 transition-transform duration-500" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
