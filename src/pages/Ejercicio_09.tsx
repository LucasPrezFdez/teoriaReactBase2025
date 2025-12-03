/* 
Crea un formulario en react, que se conecta al endpoint que hemos construido con python (flask)
*/

/* 
Formulario en React que se conecta al endpoint /api/suma de Flask
*/

import { useState, type FormEvent } from "react";

export default function Ejercicio_09() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/api/suma", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          num1: Number(num1),
          num2: Number(num2),
        }),
      });

      const data = await res.json();
      setResultado(data.resultado);

    } catch (error) {
      setResultado("❌ Error al conectar con el servidor");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>API /api/suma (Flask)</h2>

      <form onSubmit={handleSubmit}>
        <label>Número 1:</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          required
        />

        <label>Número 2:</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>

      {resultado !== "" && <h3>Resultado: {resultado}</h3>}
    </div>
  );
}
