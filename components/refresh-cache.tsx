"use client";

import * as React from "react";

export function RefreshCache({check}: {check: () => Promise<void>}) {
  React.useEffect(() => {
    const onFocus = () => check();

    window.addEventListener("focus", onFocus);

    return () => window.removeEventListener("focus", onFocus);
  });

  return null;
}

/*
cuando tengo la ventana focus, se ejecuta la funcion check que le pase por parametro


React.useEffect(() => {
    const onFocus = () => check();

    window.addEventListener("focus", onFocus);

    return () => window.removeEventListener("focus", onFocus);
  });
la funcion onFocus se ejecuta cada vez que este haciendo foco en esa ventana.
y el return () => window.removeEventListener("focus", onFocus); se ejecuta cuando la cierro a la misma

window.addEventListener("focus", onFocus); hace que se ejecute la funcion onFocus y al tener el revalidatePath("/") en caso de ser true
actualiza solo con la nueva informacion
*/
/*
puedo ejecutar cada 1000 miliseg hook usando useInterval(check, 1000)

export function RefreshCache({check}: {check: () => Promise<void>}) {
  useInterval(check, 1000)

  return null;
}
*/

/*
Podemos tener el total control de cuando ejecutar la funcion check()


"use client";

import { useInterval } from "interval-hooks";
import { useEffect, useState } from "react";

export function RefreshCache({ check }: { check: () => Promise<void> }) {
  const [shouldRun, setShouldRun] = useState(
    typeof document !== "undefined" && document.hasFocus()
  );

  useEffect(() => {
    const onFocus = () => {
      check();
      setShouldRun(true);
    };
    const onBlur = () => setShouldRun(false);

    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, [check]);

  useInterval(check, shouldRun ? 1000 : null);

  return null;
}

onFocus se ejecuta cuando la ventana gana el foco, y onBlur se ejecuta cuando la ventana lo pierde. No se ejecutan al mismo tiempo, sino que se ejecutan en respuesta a los eventos respectivos. Si la ventana gana el foco, se ejecuta onFocus; si la ventana pierde el foco, se ejecuta onBlur.
*/
