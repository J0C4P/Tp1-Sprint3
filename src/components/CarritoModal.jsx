import Modal from './ui/Modal'
import CarritoItem from './CarritoItem'
import { useCarritoContext } from '../context/CarritoContext'
import { formatearPrecio } from '../utils/formato'

function CarritoModal({ abierto, onClose, onCheckout }) {
  const { carrito, total, vaciar } = useCarritoContext()

  return (
    <Modal abierto={abierto} onClose={onClose} titulo="Mi carrito">
      {carrito.length === 0 ? (
        <p className="py-10 text-center text-sm text-black/60 dark:text-white/60">
          Todavía no agregaste nada al carrito.
        </p>
      ) : (
        <>
          <ul className="flex flex-col gap-2.5">
            {carrito.map((item) => (
              <CarritoItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">
            <span className="font-bold">Total</span>
            <span className="font-bold">{formatearPrecio(total)}</span>
          </div>

          <button
            type="button"
            onClick={onCheckout}
            className="mt-3 h-10 w-full rounded-lg bg-black text-sm font-semibold text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
          >
            Finalizar compra
          </button>

          <button
            type="button"
            onClick={vaciar}
            className="mt-2 h-10 w-full rounded-lg border border-red-400/50 text-sm font-semibold text-red-500 transition-colors hover:bg-red-500/10"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </Modal>
  )
}

export default CarritoModal
