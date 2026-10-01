const Confirmacion = ({ pedido, onIrATienda}) => {
  return (
    <>
      <p>Gracias {pedido.cliente.nombre} por su compra! Su pedido ha sido confirmado.</p>
      <button onClick={onIrATienda}>Volver a la tienda</button>
    </>
  )
}

export default Confirmacion