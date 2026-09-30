import { useLocalStorage } from "./useLocalStorage";

export function useCarrito() {
  const [carrito, setCarrito] = useLocalStorage("tutienda:carrito", []);

  const cantidadEnCarrito = (id) => carrito.find((item) => item.id === id)?.cantidad ?? 0;

  const cambiarCantidad = (id, delta) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: Math.min(item.cantidad + delta, item.stock) }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const agregarCarrito = (item) => {
    const yaEsta = carrito.some((i) => i.id === item.id);

    if (yaEsta) {
      cambiarCantidad(item.id, 1);
      return;
    }

    setCarrito((prev) => [...prev, { ...item, cantidad: 1 }]);
  };

  const quitarCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return {
    carrito,
    cantidadTotal,
    total,
    cantidadEnCarrito,
    agregarCarrito,
    cambiarCantidad,
    quitarCarrito,
    vaciarCarrito,
  };
}
