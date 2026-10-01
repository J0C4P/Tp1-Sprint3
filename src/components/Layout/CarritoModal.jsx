import Modal from "../ui/Modal";
import CarritoItem from "./CarritoItem";
import { formatearPrecio } from "../../utils/formato";
import { useCarritoContext } from "../../context/CarritoContext";

const CarritoModal = ({ abierto, onClose }) => {
  const { carrito, total, vaciarCarrito } = useCarritoContext();

  return (
    <Modal abierto={abierto} onClose={onClose} titulo="Mi carrito">
      {carrito.length === 0 ? (
        <p className="py-10 text-center font-manrope text-sm text-fg-muted">
          Todavía no agregaste nada al carrito.
        </p>
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {carrito.map((item) => (
              <CarritoItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-4">
            <span className="font-archivo font-bold text-fg">Total</span>
            <span className="font-archivo font-bold text-fg">{formatearPrecio(total)}</span>
          </div>

          <button
            type="button"
            onClick={vaciarCarrito}
            className="mt-3 h-10 w-full rounded-lg border border-lava-pink/40 font-archivo text-xs font-bold tracking-wide text-lava-pink uppercase hover:bg-lava-pink/10"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </Modal>
  );
};

export default CarritoModal;
