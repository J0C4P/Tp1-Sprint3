import { useCarritoContext } from "../../context/CarritoContext"
import { formatearPrecio } from "../../utils/formato"
import { useForm} from "react-hook-form"

const Checkout = ({onVolver, onConfirmar}) => {
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
    <>
      <button type="button" onClick={onVolver}>Volver</button>

      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>x{item.cantidad}</span>
            <span>{formatearPrecio(item.precio * item.cantidad)}</span>
          </li>
        ))}
      </ul>

      <p>Total: {formatearPrecio(total)}</p>

       <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            {...register('nombre', { required: 'El nombre es obligatorio', minLength: { value: 3, message: 'Mínimo 3 caracteres' } })}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'error-email' : undefined}
            {...register('email', { required: 'El email es obligatorio', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email inválido' } })}
          />
          {errors.email && <p id="error-email">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            {...register('telefono', {
              required: 'El teléfono es obligatorio',
              pattern: { value: /^[0-9]+$/, message: 'Solo números' },
              minLength: { value: 8, message: 'Mínimo 8 dígitos' },
            })}
          />
          {errors.telefono && <p>{errors.telefono.message}</p>}
        </div>

        <fieldset>
          <legend>Método de envío</legend>

          <input type="radio" id="domicilio" value="domicilio" {...register('metodoEnvio', { required: true })} />
          <label htmlFor="domicilio">Envío a domicilio</label>

          <input type="radio" id="retiro" value="retiro" {...register('metodoEnvio', { required: true })} />
          <label htmlFor="retiro">Retiro en el local</label>
        </fieldset>

        {metodoEnvio === 'domicilio' && (
          <div>
            <label htmlFor="direccion">Dirección</label>
            <input
              id="direccion"
              aria-invalid={errors.direccion ? 'true' : 'false'}
              aria-describedby={errors.direccion ? 'error-direccion' : undefined}
              {...register('direccion', { required: 'La dirección es obligatoria' })}
            />
            {errors.direccion && <p id="error-direccion">{errors.direccion.message}</p>}
          </div>
        )}

        <div>
          <label htmlFor="notas">Notas (opcional)</label>
          <textarea
            id="notas"
            {...register('notas', { maxLength: { value: 200, message: 'Máximo 200 caracteres' } })}
          ></textarea>
          {errors.notas && <p>{errors.notas.message}</p>}
        </div>

        <div>
          <input type="checkbox" id="terminos" {...register('terminos', { required: 'Tenés que aceptar los términos' })} />
          <label htmlFor="terminos">Acepto los términos y condiciones</label>
          {errors.terminos && <p>{errors.terminos.message}</p>}
        </div>

        <button type="submit">Confirmar pedido</button>
      </form>
    </>
  )
}

export default Checkout;