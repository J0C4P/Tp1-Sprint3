import ProductoList from "../Layout/ProductoList"
import { useCarritoContext } from "../../context/CarritoContext"

const Tienda = ({ busqueda, onIrACheckout }) => {
  const { cantidadTotal } = useCarritoContext()

  return (
    <>
      <ProductoList busqueda={busqueda}></ProductoList>

      <div className="mx-auto max-w-[1320px] px-4 pb-16 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={onIrACheckout}
          disabled={cantidadTotal === 0}
          className="h-11 w-full rounded-lg bg-gradient-to-r from-lava-pink to-lava-orange font-archivo text-sm font-bold tracking-wide text-bg uppercase disabled:opacity-40 sm:w-auto sm:px-8"
        >
          Ir a pagar
        </button>
      </div>
    </>
  )
}

export default Tienda
