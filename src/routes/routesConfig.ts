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
  },{
    to: "Ejem5",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_05")),
  },{
    to: "Ejem6",
    title: "Comunicacion hijo padre",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_06")),
  },{
    to: "Ejem7",
    title: "hook useState",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_07")),
  },{
    to: "Ejem8",
    title: "Pasar los hijos de un componente",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_08")),
  },{
    to: "Ejem9",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_09")),
  },{
    to: "Ejem10",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_10")),
  },
];
