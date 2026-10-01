import { useTheme } from "../../context/ThemeContext"

const ThemeToggle = () => {
  const { modoOscuro, toggleModo } = useTheme()

  return (
    <button type="button" aria-label="Cambiar tema" onClick={toggleModo}>
      {modoOscuro ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle
