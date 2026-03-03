import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", type: "terarijum", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Poruka poslata!", description: "Hvala vam! Javićemo vam se u najkraćem roku." });
    setFormData({ name: "", email: "", phone: "", type: "terarijum", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div data-animate="fade-up" className="text-center mb-10 sm:mb-16" style={{ opacity: 0 }}>
          <p className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Pišite Nam</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Kontakt</h2>
        </div>
        <div data-animate="fade-up" data-delay="0.15" style={{ opacity: 0 }}>
          <Card className="bg-card border-border p-6 sm:p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary text-sm">Ime i Prezime</Label>
                  <Input id="name" placeholder="Vaše ime" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="vas@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary text-sm">Telefon</Label>
                  <Input id="phone" placeholder="+381 6X XXX XXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-primary text-sm">Vrsta Upita</Label>
                  <select id="type" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} className="flex h-10 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground">
                    <option value="terarijum">Porudžbina Terarijuma</option>
                    <option value="radionica">Zakazivanje Radionice</option>
                    <option value="poklon">Korporativni Pokloni</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary text-sm">Poruka</Label>
                <Textarea id="message" placeholder="Opišite vašu ideju ili pitanje..." rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required className="bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-5 sm:py-6 rounded-xl font-semibold text-sm sm:text-base">
                Pošaljite Poruku
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
