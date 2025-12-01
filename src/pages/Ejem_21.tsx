import { useParams } from "react-router-dom"


// https://localhost:5000/Ejem21/234
export default function Ejem_21() {

  const {id} = useParams()

  return <div>
    Monstrando el usuario {id}
  </div>
}