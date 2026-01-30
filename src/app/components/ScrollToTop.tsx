import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto mueve el scroll al inicio de la página
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Usamos "instant" para que no se vea el deslizamiento al saltar de página
    });
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null; // Este componente no renderiza nada visualmente
}