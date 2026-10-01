import { useState, useEffect } from "react"
import { useToggle } from "./hooks/useToggle"
import ProductoList from "./components/Layout/ProductoList"
import Footer from "./components/Layout/Footer"
import Navbar from "./components/Layout/Navbar"
import CarritoModal from "./components/Layout/CarritoModal"

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [panelAbierto, togglePanel] = useToggle(false)

  // useEffect(() => {
  //   document.title = cantidad > 0 ? `Mi GameList (${cantidad})` : "Mi GameList"
  // }, [cantidad])

  return (
    <>
      <Navbar busqueda={busqueda} setBusqueda={setBusqueda} togglePanel={togglePanel}></Navbar>
      <main>
        <ProductoList busqueda={busqueda}></ProductoList>
        <CarritoModal abierto={panelAbierto} onClose={togglePanel}></CarritoModal>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
