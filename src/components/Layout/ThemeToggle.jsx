import { useTheme } from "../../context/ThemeContext"

const ThemeToggle = () => {
  const { modoOscuro, toggleModo } = useTheme()

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={toggleModo}
      className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/14 text-lg hover:border-lava-pink"
    >
      {modoOscuro ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle
