import { useState } from "react";
import { formatearPrecio } from "../../utils/formato.js";

const ProductCard = ({ item, onAgregar }) => {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1)
  const sinStock = item.stock === 0

  const restar = () => setCantidadSeleccionada((c) => Math.max(1, c - 1))
  const sumar = () => setCantidadSeleccionada((c) => Math.min(item.stock, c + 1))

  const confirmarAgregar = () => {
    onAgregar(item, cantidadSeleccionada)
    setCantidadSeleccionada(1)
  }
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-white/8 bg-surface transition-all duration-200 hover:-translate-y-1.5 hover:border-lava-pink/45 hover:shadow-[0_20px_40px_-12px_rgba(255,61,113,0.35)]">
      <div className="relative flex aspect-3/4 items-center justify-center bg-gradient-to-br from-surface-image-from to-surface-image-to">
        <span className="font-archivo text-[56px] font-black text-white/10">
          {item.name.charAt(0)}
        </span>

        {item.destacado && (
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-lava-pink to-lava-orange py-1 pr-2.5 pl-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-bg">
              <path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-2-1-3-1-3s0 2-2 2c1-3-1-6-3-10z" />
            </svg>
            <span className="font-archivo text-[10px] font-bold tracking-wide text-bg uppercase">
              Destacado
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2.5 p-4">
        <h3 className="font-archivo text-[15px] leading-tight font-bold text-fg">
          {item.name}
          <span className="mx-1 text-red-500">
            {formatearPrecio(item.precio)}
          </span>
          <span className={item.stock === 0 ? "rounded-full bg-black text-red-500 px-2.5 py-1 font-bold" : "rounded-full bg-white/5 px-2.5 py-1 font-bold"}>
            {item.stock}
          </span>
        </h3>

        <div className="flex items-center gap-1.5 font-manrope text-[12.5px] text-fg-muted">
          <span>{item.console}</span>
          <span className="text-white/20">&middot;</span>
          <span>{item.year}</span>
          <span className="text-white/20">&middot;</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-lava-orange">
            <polygon points="12 2 15 9 22 9.5 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.5 9 9" />
          </svg>
          <span>{item.rating}</span>
        </div>

        <div className="flex h-9 w-full items-center justify-between rounded-lg border border-white/18 bg-white/5 px-1.5">
          <button
            type="button"
            aria-label="Restar uno"
            onClick={restar}
            disabled={sinStock || cantidadSeleccionada <= 1}
            className="flex h-7 w-7 items-center justify-center rounded-md text-fg transition-colors hover:bg-white/10 disabled:opacity-30"
          >
            −
          </button>
          <span className="font-archivo text-[13px] font-bold text-fg">{cantidadSeleccionada}</span>
          <button
            type="button"
            aria-label="Sumar uno"
            onClick={sumar}
            disabled={sinStock || cantidadSeleccionada >= item.stock}
            className="flex h-7 w-7 items-center justify-center rounded-md text-fg transition-colors hover:bg-white/10 disabled:opacity-30"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={confirmarAgregar}
          disabled={sinStock}
          className="flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-white/18 bg-white/5 font-archivo text-[12.5px] font-bold tracking-wide text-fg uppercase transition-[filter,transform] hover:brightness-110 active:scale-97 disabled:opacity-40"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>{sinStock ? "Sin stock" : "Agregar"}</span>
        </button>
      </div>
    </article>
  )
}

export default ProductCard
