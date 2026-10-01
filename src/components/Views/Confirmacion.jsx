const Confirmacion = ({ pedido, onIrATienda }) => {
  return (
    <div className="mx-auto flex max-w-[480px] flex-col items-center gap-2 px-4 py-24 text-center">
      <p className="font-archivo text-2xl font-black text-fg">¡Gracias, {pedido.cliente.nombre}!</p>
      <p className="font-manrope text-sm text-fg-muted">Tu pedido fue confirmado.</p>
      <button
        type="button"
        onClick={onIrATienda}
        className="mt-4 h-11 rounded-lg border border-white/18 px-6 font-archivo text-sm font-bold tracking-wide text-fg uppercase hover:border-lava-pink"
      >
        Volver a la tienda
      </button>
    </div>
  )
}

export default Confirmacion
