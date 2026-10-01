import { createContext, useContext } from "react";
import { useCarrito } from "../hooks/useCarrito";

const CarritoContext = createContext(null);

export const CarritoProvider = ({ children }) => {
  const carritoState = useCarrito();

  return (
    <CarritoContext.Provider value={carritoState}>
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarritoContext = () => {
  const contexto = useContext(CarritoContext);

  if (!contexto) {
    throw new Error("useCarritoContext() debe ser usado dentro de un <CarritoProvider>");
  }
  return contexto;
};