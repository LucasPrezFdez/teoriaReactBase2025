/* 
# Apuntate al magosto
- Muestra por pantalla una lista de nombres (almacenados en un array)
- Se podrá mediante un formulario añadir nombres nuevos
- Tambien se podrá borrar alguno de esos nombres
- Si pulso encima del nombre, indicamos que pago el magosto correctamente
 ponerle algun simbolo

*/

import { useState } from "react"

export default function Ejercicio10() {
  const [txt , setTxt] = useState('')

  return (
    <input value={txt} />
  )
}