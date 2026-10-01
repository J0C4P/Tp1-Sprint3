const Confirmacion = ({ onIrATienda}) => {
  return (
    <>
      <p>Gracias por su compra! Su pedido ha sido confirmado.</p>
      <button onClick={onIrATienda}>Volver a la tienda</button>
    </>
  )
}

export default Confirmacion