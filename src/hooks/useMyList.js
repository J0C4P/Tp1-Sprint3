import { useLocalStorage } from "./useLocalStorage"

export function useMyList() {
  const [miLista, setMiLista] = useLocalStorage("migamelist:miLista", [])

  const estaEnLista = (id) => miLista.some((i) => i.id === id)

  const toggleItem = (item) => {
    setMiLista((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    )
  }

  const quitar = (id) => {
    setMiLista((prev) => prev.filter((i) => i.id !== id))
  }

  const cantidad = miLista.length

  const vaciar = () => setMiLista([])

  return { miLista, estaEnLista, toggleItem, quitar, cantidad, vaciar }
}
