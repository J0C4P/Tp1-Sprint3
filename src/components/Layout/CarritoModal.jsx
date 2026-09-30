import Modal from "../ui/Modal";
import CarritoItem from "./CarritoItem";
import { formatearPrecio } from "../../utils/formato";

const CarritoModal = ({ abierto, onClose, carrito, total, cambiarCantidad, quitar, vaciar }) => {
  return (
    <Modal abierto={abierto} onClose={onClose} titulo="Mi carrito">
      {carrito.length === 0 ? (
        <p className="py-10 text-center font-manrope text-sm text-fg-muted">
          Todavía no agregaste nada al carrito.
        </p>
      ) : (
        <>
          <ul className="flex flex-col gap-2.5">
            {carrito.map((item) => (
              <CarritoItem key={item.id} item={item} cambiarCantidad={cambiarCantidad} quitar={quitar} />
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-4">
            <span className="font-archivo font-bold text-fg">Total</span>
            <span className="font-archivo font-bold text-fg">{formatearPrecio(total)}</span>
          </div>

          <button
            type="button"
            onClick={vaciar}
            className="mt-3 h-10 w-full rounded-lg border border-lava-pink/40 font-archivo text-[13px] font-bold uppercase text-lava-pink hover:bg-lava-pink/10"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </Modal>
  );
};

export default CarritoModal;
