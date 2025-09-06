import { Button } from "@my-monorepo/ui";
import { event } from "@my-monorepo/content/pt.json";

export default function Event() {
  const handleStripeCheckout = () => {
    alert("Redirecionando para o checkout do Stripe (funcionalidade de integração não implementada).");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-primary">{event.title}</h1>
      <p className="text-lg text-dark">{event.description}</p>
      <Button onClick={handleStripeCheckout}>Inscrever-se (Stripe Demo)</Button>
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-primary mb-4">Local do Evento</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2500000000005!2d-122.08424999999999!3d37.421999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb2422c5c2d3f%3A0x29c7b9c1b7e3b9c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}


