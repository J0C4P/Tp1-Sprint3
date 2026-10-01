import { useCarritoContext } from "../../context/CarritoContext"
import { formatearPrecio } from "../../utils/formato"
import { useForm } from "react-hook-form"

const Checkout = ({ onVolver, onConfirmar }) => {
  const { carrito, total, vaciarCarrito } = useCarritoContext()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: { metodoEnvio: 'domicilio' },
  })

  const metodoEnvio = watch('metodoEnvio')

  const onSubmit = (datos) => {
    const pedido = {
      cliente: {
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono,
        direccion: datos.metodoEnvio === 'domicilio' ? datos.direccion : null,
      },
      envio: datos.metodoEnvio,
      notas: datos.notas,
      items: carrito,
      total,
    }

    console.log('Pedido:', pedido)
    vaciarCarrito()
    onConfirmar(pedido)
  }

  return (
    <div className="mx-auto max-w-[640px] px-4 py-10 sm:px-8">
      <button type="button" onClick={onVolver} className="mb-6 font-manrope text-sm text-fg-muted hover:text-fg">
        ← Volver
      </button>

      <h2 className="mb-4 font-archivo text-2xl font-black text-fg">Tu pedido</h2>

      <ul className="mb-4 flex flex-col gap-2 border-b border-white/8 pb-4">
        {carrito.map((item) => (
          <li key={item.id} className="flex justify-between font-manrope text-sm text-fg">
            <span>{item.name} <span className="text-fg-muted">x{item.cantidad}</span></span>
            <span>{formatearPrecio(item.precio * item.cantidad)}</span>
          </li>
        ))}
      </ul>

      <p className="mb-8 flex justify-between font-archivo font-bold text-fg">
        <span>Total</span>
        <span>{formatearPrecio(total)}</span>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="nombre" className="font-manrope text-sm text-fg-muted">Nombre completo</label>
          <input
            id="nombre"
            className="h-10 rounded-lg border border-white/14 bg-white/5 px-3 font-manrope text-sm text-fg focus:border-lava-pink focus:outline-none"
            {...register('nombre', { required: 'El nombre es obligatorio', minLength: { value: 3, message: 'Mínimo 3 caracteres' } })}
          />
          {errors.nombre && <p className="text-xs text-lava-pink">{errors.nombre.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-manrope text-sm text-fg-muted">Email</label>
          <input
            id="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'error-email' : undefined}
            className="h-10 rounded-lg border border-white/14 bg-white/5 px-3 font-manrope text-sm text-fg focus:border-lava-pink focus:outline-none"
            {...register('email', { required: 'El email es obligatorio', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email inválido' } })}
          />
          {errors.email && <p id="error-email" className="text-xs text-lava-pink">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="telefono" className="font-manrope text-sm text-fg-muted">Teléfono</label>
          <input
            id="telefono"
            className="h-10 rounded-lg border border-white/14 bg-white/5 px-3 font-manrope text-sm text-fg focus:border-lava-pink focus:outline-none"
            {...register('telefono', {
              required: 'El teléfono es obligatorio',
              pattern: { value: /^[0-9]+$/, message: 'Solo números' },
              minLength: { value: 8, message: 'Mínimo 8 dígitos' },
            })}
          />
          {errors.telefono && <p className="text-xs text-lava-pink">{errors.telefono.message}</p>}
        </div>

        <fieldset className="flex flex-col gap-2">
          <legend className="mb-1 font-manrope text-sm text-fg-muted">Método de envío</legend>

          <label htmlFor="domicilio" className="flex items-center gap-2 font-manrope text-sm text-fg">
            <input type="radio" id="domicilio" value="domicilio" {...register('metodoEnvio', { required: true })} />
            Envío a domicilio
          </label>

          <label htmlFor="retiro" className="flex items-center gap-2 font-manrope text-sm text-fg">
            <input type="radio" id="retiro" value="retiro" {...register('metodoEnvio', { required: true })} />
            Retiro en el local
          </label>
        </fieldset>

        {metodoEnvio === 'domicilio' && (
          <div className="flex flex-col gap-1">
            <label htmlFor="direccion" className="font-manrope text-sm text-fg-muted">Dirección</label>
            <input
              id="direccion"
              aria-invalid={errors.direccion ? 'true' : 'false'}
              aria-describedby={errors.direccion ? 'error-direccion' : undefined}
              className="h-10 rounded-lg border border-white/14 bg-white/5 px-3 font-manrope text-sm text-fg focus:border-lava-pink focus:outline-none"
              {...register('direccion', { required: 'La dirección es obligatoria' })}
            />
            {errors.direccion && <p id="error-direccion" className="text-xs text-lava-pink">{errors.direccion.message}</p>}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="notas" className="font-manrope text-sm text-fg-muted">Notas (opcional)</label>
          <textarea
            id="notas"
            rows={3}
            className="rounded-lg border border-white/14 bg-white/5 px-3 py-2 font-manrope text-sm text-fg focus:border-lava-pink focus:outline-none"
            {...register('notas', { maxLength: { value: 200, message: 'Máximo 200 caracteres' } })}
          ></textarea>
          {errors.notas && <p className="text-xs text-lava-pink">{errors.notas.message}</p>}
        </div>

        <label htmlFor="terminos" className="flex items-center gap-2 font-manrope text-sm text-fg">
          <input type="checkbox" id="terminos" {...register('terminos', { required: 'Tenés que aceptar los términos' })} />
          Acepto los términos y condiciones
        </label>
        {errors.terminos && <p className="text-xs text-lava-pink">{errors.terminos.message}</p>}

        <button
          type="submit"
          className="mt-2 h-11 w-full rounded-lg bg-gradient-to-r from-lava-pink to-lava-orange font-archivo text-sm font-bold tracking-wide text-bg uppercase"
        >
          Confirmar pedido
        </button>
      </form>
    </div>
  )
}

export default Checkout
