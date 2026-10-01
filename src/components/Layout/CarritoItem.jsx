import { formatearPrecio } from "../../utils/formato";
import { useCarritoContext } from "../../context/CarritoContext";

const CarritoItem = ({ item }) => {
  const sinStock = item.cantidad >= item.stock;

  const { cambiarCantidad, quitarCarrito } = useCarritoContext();

  return (
    <li>
      <span>{item.name}</span>

      <div>
        <button type="button" aria-label="Restar uno" onClick={() => cambiarCantidad(item.id, -1)}>
          −
        </button>
        <span>{item.cantidad}</span>
        <button type="button" aria-label="Sumar uno" onClick={() => cambiarCantidad(item.id, 1)} disabled={sinStock}>
          +
        </button>
      </div>

      <span>{formatearPrecio(item.precio * item.cantidad)}</span>

      <button type="button" aria-label="Quitar del carrito" onClick={() => quitarCarrito(item.id)}>
        ✕
      </button>
    </li>
  );
};

export default CarritoItem;
