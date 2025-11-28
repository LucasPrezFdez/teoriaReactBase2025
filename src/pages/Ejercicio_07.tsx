/*
Crea un componente de react que muestre el precio actual del bitcoin (en tiempo real)
usa este api gratuita

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur
https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR
*/

import { useEffect, useState } from "react";

export default function Ejercicio_07() {
  const URL = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR";

  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  //TODO: mover esto a la carpeta services
  async function bitcoinApiCall() {
    try {
      const response = await fetch(URL).then((res) => res.json());
      //if (!response.ok) throw new Error("Fallo al llamar a la api" + response.statusText);
      setPrice(response.EUR);
      setLoading(false);

    } catch (error:any) {
      console.log("Error:", error);
      setError(error.Message);

    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    bitcoinApiCall();
  }, []);

  if(loading) return <div>Llamando al api...</div>
  return <div>EL bitcoin vale {price} €</div>;
}
