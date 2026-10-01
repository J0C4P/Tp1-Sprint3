import { useState, useEffect } from "react"
import { useToggle } from "./hooks/useToggle"
import ProductoList from "./components/Layout/ProductoList"
import Footer from "./components/Layout/Footer"
import Navbar from "./components/Layout/Navbar"
import { useCarrito } from "./hooks/useCarrito"
import CarritoModal from "./components/Layout/CarritoModal"

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [panelAbierto, togglePanel] = useToggle(false)
  const { agregarCarrito, quitarCarrito, vaciarCarrito, total, carrito, cantidadTotal, cambiarCantidad} = useCarrito()

  // useEffect(() => {
  //   document.title = cantidad > 0 ? `Mi GameList (${cantidad})` : "Mi GameList"
  // }, [cantidad])

  return (
    <>
      <Navbar busqueda={busqueda} setBusqueda={setBusqueda} cantidad={cantidadTotal} togglePanel={togglePanel}></Navbar>
      <main>
        <ProductoList onAgregar={agregarCarrito} busqueda={busqueda}></ProductoList>
        <CarritoModal abierto={panelAbierto} onClose={togglePanel} carrito={carrito} total={total} cambiarCantidad={cambiarCantidad} quitar={quitarCarrito} vaciar={vaciarCarrito}></CarritoModal>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
