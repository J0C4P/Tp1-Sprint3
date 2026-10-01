import Modal from "../ui/Modal";
import CarritoItem from "./CarritoItem";
import { formatearPrecio } from "../../utils/formato";

const CarritoModal = ({ abierto, onClose, carrito, total, cambiarCantidad, quitar, vaciar }) => {
  return (
    <Modal abierto={abierto} onClose={onClose} titulo="Mi carrito">
      {carrito.length === 0 
        ? (<p>Todavía no agregaste nada al carrito.</p>) 
        : (<>
          <ul>
            {carrito.map((item) => (
              <CarritoItem key={item.id} item={item} cambiarCantidad={cambiarCantidad} quitar={quitar} />
            ))}
          </ul>

          <div>
            <span>Total</span>
            <span>{formatearPrecio(total)}</span>
          </div>

          <button type="button" onClick={vaciar}>
            Vaciar carrito
          </button>
        </>)
      }
    </Modal>
  );
};

export default CarritoModal;
