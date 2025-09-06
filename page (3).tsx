import { Button } from "@my-monorepo/ui";
import { home } from "@my-monorepo/content/pt.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-primary">{home.title}</h1>
      <p className="text-lg text-dark">{home.description}</p>
      <Button>Agendar Agora</Button>
    </main>
  );
}
