import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [modoOscuro, setModoOscuro] = useLocalStorage("tutienda:modoOscuro", false);

  const toggleModo = () => setModoOscuro((valor) => !valor);

  return (
    <ThemeContext.Provider value={{ modoOscuro, toggleModo }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const contexto = useContext(ThemeContext);

  if (!contexto) {
    throw new Error("useTheme() tiene que usarse adentro de <ThemeProvider>");
  }

  return contexto;
};