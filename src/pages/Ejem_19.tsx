import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejem_19() {

  const [form, setForm] = useState(
    {
      name: 'Juan',
      surname: 'Gonzalez',
      email: ''
    }
  )
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {

    
    const {value, name} = event.target
    setForm({...form, [name ]: value})
  }

  function handleSubmit(manuel: FormEvent) {
    manuel.preventDefault()
    console.log('se envio el nombre: ', form);
    
  }

  return <form onSubmit={handleSubmit} className="flex flex-col items-center">
    <label htmlFor="">
      Nombre: <input name="name" value={form.name} onChange={handleChange}/>
    </label>
    <label htmlFor="">
      Apellidos: <input name="surname" value={form.surname} onChange={handleChange}/>
    </label>
    <label htmlFor="">
      Email: <input name="email" value={form.email} onChange={handleChange}/>
    </label>
    <button type="submit">Enviar</button>
    
  </form>
}