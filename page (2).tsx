import { Button } from "@my-monorepo/ui";
import { isValidEmail } from "@my-monorepo/utils";
import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    // Placeholder for sending email
    alert("Mensagem enviada! (Funcionalidade de envio de e-mail não implementada)");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-primary">Contato</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Seu E-mail"
          className={`p-2 border rounded ${emailError ? "border-red-500" : "border-gray-300"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500 text-sm">Por favor, insira um e-mail válido.</p>}
        <textarea
          placeholder="Sua Mensagem"
          rows={5}
          className="p-2 border border-gray-300 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button type="submit">Enviar Mensagem</Button>
      </form>
      <div className="flex gap-4 mt-8">
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WhatsApp</a>
        <a href="#" className="text-blue-500 hover:underline">Rede Social 1</a>
        <a href="#" className="text-blue-500 hover:underline">Rede Social 2</a>
      </div>
    </main>
  );
}


