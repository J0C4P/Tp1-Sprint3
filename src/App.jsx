import { useState, useEffect } from "react"
import { useMyList } from "./hooks/useMyList"
import { useToggle } from "./hooks/useToggle"
import ProductoList from "./components/Layout/ProductoList"
import ListPanel from "./components/Layout/ListPanel"
import Footer from "./components/Layout/Footer"
import Navbar from "./components/Layout/Navbar"
import { useCarrito } from "./hooks/useCarrito"

function App() {
  const { miLista, estaEnLista, toggleItem, quitar, cantidad, vaciar } = useMyList()
  const [busqueda, setBusqueda] = useState("")
  const [panelAbierto, togglePanel] = useToggle(false)
  const { cantidadEnCarrito, agregarCarrito, cambiarCantidad, quitarCarrito, vaciarCarrito } = useCarrito()

  useEffect(() => {
    document.title = cantidad > 0 ? `Mi GameList (${cantidad})` : "Mi GameList"
  }, [cantidad])

  return (
    <>
      <Navbar busqueda={busqueda} setBusqueda={setBusqueda} cantidad={cantidad} togglePanel={togglePanel}></Navbar>
      <main>
        <ProductoList
          cantidadEnCarrito={cantidadEnCarrito}
          onAgregar={agregarCarrito}
          onCambiarCantidad={cambiarCantidad}
          busqueda={busqueda}
        ></ProductoList>
        {panelAbierto && (
          <ListPanel miLista={miLista} quitar={quitar} vaciar={vaciar} cerrar={togglePanel}></ListPanel>
        )}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
