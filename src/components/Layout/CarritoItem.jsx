import { formatearPrecio } from "../../utils/formato";

const CarritoItem = ({ item, cambiarCantidad, quitar }) => {
  const sinStock = item.cantidad >= item.stock;

  return (
    <li className="flex items-center gap-3 rounded-lg bg-white/4 p-2.5">
      <span className="min-w-0 flex-1 truncate font-manrope text-[13.5px] font-semibold text-fg">
        {item.name}
      </span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Restar uno"
          onClick={() => cambiarCantidad(item.id, -1)}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-fg"
        >
          −
        </button>
        <span className="w-5 text-center text-sm text-fg">{item.cantidad}</span>
        <button
          type="button"
          aria-label="Sumar uno"
          onClick={() => cambiarCantidad(item.id, 1)}
          disabled={sinStock}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-fg disabled:opacity-30"
        >
          +
        </button>
      </div>

      <span className="w-20 shrink-0 text-right text-sm font-semibold text-fg">
        {formatearPrecio(item.precio * item.cantidad)}
      </span>

      <button
        type="button"
        aria-label="Quitar del carrito"
        onClick={() => quitar(item.id)}
        className="shrink-0 text-fg-muted hover:text-lava-pink"
      >
        ✕
      </button>
    </li>
  );
};

export default CarritoItem;
