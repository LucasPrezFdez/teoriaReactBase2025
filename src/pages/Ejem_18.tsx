import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejem_18() {

  const [name, setName] = useState('Manolo')
  
  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {

    setName(event.target.value)
  }

  function handleSubmit(manuel: FormEvent) {
    manuel.preventDefault()
    console.log('se envio el nombre: ' +name);
    
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="">
      Nombre: <input value={name} onChange={handleChangeName}/>
    </label>
    <button>Enviar</button>
    
  </form>
}