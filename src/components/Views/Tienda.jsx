import { useState } from "react"
import SearchBar from "../Layout/SearchBar"
import ProductoList from "../Layout/ProductoList"
import { useCarritoContext } from "../../context/CarritoContext"

const Tienda = ({ onIrACheckout }) => {
  const [busqueda, setBusqueda] = useState("")
  const { cantidadTotal } = useCarritoContext()

  return (
    <>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <ProductoList busqueda={busqueda}></ProductoList>
      <button type="button" onClick={onIrACheckout} disabled={cantidadTotal === 0}>
        Ir a pagar
      </button>
    </>
  )
}

export default Tienda;