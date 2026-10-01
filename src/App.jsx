import { useState } from "react"
import { useToggle } from "./hooks/useToggle"
import Footer from "./components/Layout/Footer"
import Navbar from "./components/Layout/Navbar"
import CarritoModal from "./components/Layout/CarritoModal"
import { VISTAS } from "./data/vistas.js"
import Tienda from "./components/Views/Tienda.jsx"
import Checkout from "./components/Views/Checkout.jsx"
import Confirmacion from "./components/Views/Confirmacion.jsx"

function App() {
  const [panelAbierto, togglePanel] = useToggle(false)
  const [vista, setVista] = useState(VISTAS.TIENDA)
  const [pedidoConfirmacion, setPedidoConfirmacion] = useState(null)

  const irACheckout = () => setVista(VISTAS.CHECKOUT)
  const irATienda = () => setVista(VISTAS.TIENDA)
  const irAConfirmacion = (pedido) => {
    setPedidoConfirmacion(pedido)
    setVista(VISTAS.CONFIRMACION)
  }
  return (
    <>
      <main>
        <Navbar togglePanel={togglePanel}></Navbar>
        {vista === VISTAS.TIENDA && <Tienda onIrACheckout={irACheckout}></Tienda>}
        {vista === VISTAS.CHECKOUT && <Checkout onVolver={irATienda} onConfirmar={irAConfirmacion}></Checkout>}
        {vista === VISTAS.CONFIRMACION && <Confirmacion pedido={pedidoConfirmacion} onIrATienda={irATienda}></Confirmacion>}
        <CarritoModal abierto={panelAbierto} onClose={togglePanel}></CarritoModal>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
