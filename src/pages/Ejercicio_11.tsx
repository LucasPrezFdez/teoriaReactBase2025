/*
Crea un componente que tenga una caja de texto.
Cuando el usuario escriba un texto que tenga 5 caracteres, se mostrará 
un mensaje en la consola indicando: "¡Has escrito 5 caracteres!".

El componente también mostrará en pantalla (debajo de la caja de texto) 
el número de caracteres escritos en la caja de texto (length).
*/

import { useEffect, useState, type ChangeEvent } from "react"


export default function Ejercicio11() {
 
  const [text, setText] = useState("")
  function handleChange(e : ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value)
  }

  useEffect(() => {
    if(text.length === 5) console.log("¡Has escrito 5 caracteres!")
  },[text])

  return (<>
    <textarea  onChange={handleChange} value={text} rows={5} placeholder="Escribe algo..."
    className="p-4 border rounded-2xl w-40"  />
    
    <span>Total: {text.length}</span>
  </>
  )
}