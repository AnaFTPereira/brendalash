import { Button } from "@my-monorepo/ui";
import { isValidEmail } from "@my-monorepo/utils";
import React, { useState } from "react";

export default function Schedule() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    alert(`Agendamento para ${name} em ${date} às ${time} confirmado! (Funcionalidade de agendamento não implementada)`);
    setName("");
    setEmail("");
    setDate("");
    setTime("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-primary">Agendamento</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Seu Nome"
          className="p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          className={`p-2 border rounded ${emailError ? "border-red-500" : "border-gray-300"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="text-red-500 text-sm">Por favor, insira um e-mail válido.</p>}
        <input
          type="date"
          className="p-2 border border-gray-300 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          className="p-2 border border-gray-300 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <Button type="submit">Confirmar Agendamento</Button>
      </form>
      <div className="mt-8">
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Fale Conosco via WhatsApp</a>
      </div>
    </main>
  );
}


