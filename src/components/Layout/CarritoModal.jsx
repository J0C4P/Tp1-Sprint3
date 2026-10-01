import Modal from "../ui/Modal";
import CarritoItem from "./CarritoItem";
import { formatearPrecio } from "../../utils/formato";
import { useCarritoContext } from "../../context/CarritoContext";

const CarritoModal = ({ abierto, onClose}) => {

  const { carrito, total, vaciarCarrito } = useCarritoContext();

  return (
    <Modal abierto={abierto} onClose={onClose} titulo="Mi carrito">
      {carrito.length === 0 
        ? (<p>Todavía no agregaste nada al carrito.</p>) 
        : (<>
          <ul>
            {carrito.map((item) => (
              <CarritoItem key={item.id} item={item} />
            ))}
          </ul>

          <div>
            <span>Total</span>
            <span>{formatearPrecio(total)}</span>
          </div>

          <button type="button" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </>)
      }
    </Modal>
  );
};

export default CarritoModal;
