import { useCarritoContext } from '../context/CarritoContext'
import { formatearPrecio } from '../utils/formato'

function CarritoItem({ item }) {
  const { cambiarCantidad, quitar } = useCarritoContext()

  const sinStock = item.cantidad >= item.stock

  return (
    <li className="flex items-center gap-3 rounded-lg bg-black/5 p-2.5 dark:bg-white/5">
      <span className="min-w-0 flex-1 truncate text-sm font-semibold">{item.name}</span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Restar uno"
          onClick={() => cambiarCantidad(item.id, -1)}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 dark:border-white/20"
        >
          −
        </button>
        <span className="w-5 text-center text-sm">{item.cantidad}</span>
        <button
          type="button"
          aria-label="Sumar uno"
          onClick={() => cambiarCantidad(item.id, 1)}
          disabled={sinStock}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 disabled:opacity-30 dark:border-white/20"
        >
          +
        </button>
      </div>

      <span className="w-20 shrink-0 text-right text-sm font-semibold">
        {formatearPrecio(item.precio * item.cantidad)}
      </span>

      <button
        type="button"
        aria-label="Quitar del carrito"
        onClick={() => quitar(item.id)}
        className="shrink-0 text-black/40 hover:text-red-500 dark:text-white/40"
      >
        ✕
      </button>
    </li>
  )
}

export default CarritoItem
