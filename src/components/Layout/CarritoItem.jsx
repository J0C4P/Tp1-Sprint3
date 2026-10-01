import { formatearPrecio } from "../../utils/formato";

const CarritoItem = ({ item, cambiarCantidad, quitar }) => {
  const sinStock = item.cantidad >= item.stock;

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

      <button type="button" aria-label="Quitar del carrito" onClick={() => quitar(item.id)}>
        ✕
      </button>
    </li>
  );
};

export default CarritoItem;
