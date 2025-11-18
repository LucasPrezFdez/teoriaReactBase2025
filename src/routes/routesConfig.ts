import React from "react";

export const routes = [
  {
    to: null,
    title: "Creación de componentes",
    description: "",
    component: React.lazy(() => import("../pages/Home")),
  },
  {
    to: "Ejem1",
    title: "Componente usando clases",
    description: "Muestra como crear un componente usando clases. Obsoleto.",
    component: React.lazy(() => import("../pages/Ejem_01")),
  },
  {
    to: "Ejem2",
    title: "Componente dentro de otros componentes",
    description: "Uso de componentes anidados",
    component: React.lazy(() => import("../pages/Ejem_02")),
  },{
    to: "Ejem3",
    title: "Componente dentro de otros componentes",
    description: "Uso de if",
    component: React.lazy(() => import("../pages/Ejem_03")),
  },{
    to: "Ejem4",
    title: "Props",
    description: "Paso de props a componentes",
    component: React.lazy(() => import("../pages/Ejem_04")),
  },
];
