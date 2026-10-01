import { useCarritoContext } from "../../context/CarritoContext"
import { formatearPrecio } from "../../utils/formato"

const Checkout = ({onVolver, onConfirmar}) => {
  const { carrito, total, vaciarCarrito } = useCarritoContext()

  const confirmarFinal = () => {
    vaciarCarrito()
    onConfirmar()
  }

  return (
    <>
      <button type="button" onClick={onVolver}>Volver</button>

      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>x{item.cantidad}</span>
            <span>{formatearPrecio(item.precio * item.cantidad)}</span>
          </li>
        ))}
      </ul>

      <p>Total: {formatearPrecio(total)}</p>

      <button type="button" onClick={confirmarFinal}>Confirmar pedido</button>
    </>
  )
}

export default Checkout;