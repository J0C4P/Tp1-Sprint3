import { useEffect } from "react"

const ListPanel = ({ miLista, quitar, vaciar, cerrar }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        cerrar()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <>
      <div onClick={cerrar} className="fixed inset-0 z-40 bg-black/60"></div>

      <aside className="fixed top-0 right-0 z-50 flex h-screen w-[400px] max-w-[92vw] flex-col border-l border-white/10 bg-surface shadow-[-24px_0_60px_-12px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-4 sm:px-6 sm:py-5.5">
          <h2 className="font-archivo text-[19px] font-black text-fg">-Mi Lista-</h2>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={cerrar}
            className="flex h-8.5 w-8.5 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-white/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-6">
          {miLista.length === 0 ? (
            <div className="flex flex-col gap-1.5 py-10">
              <p className="font-archivo text-[15px] font-bold text-fg">Todavía no agregaste nada a tu lista!</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-2.5 py-3">
              {miLista.map((item) => (
                <li key={item.id} className="flex items-center gap-3 rounded-[10px] bg-white/4 p-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-surface-image-from to-surface-image-to">
                    <span className="font-archivo text-base font-black text-white/15">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <span className="min-w-0 flex-1 truncate font-manrope text-[13.5px] font-semibold text-fg">
                    {item.name}
                  </span>
                  <button
                    type="button"
                    aria-label="Quitar"
                    onClick={() => quitar(item.id)}
                    className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-white/10"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 7h16" />
                      <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
                      <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {miLista.length > 0 && (
          <div className="border-t border-white/8 px-4 py-5 sm:px-6">
            <button
              type="button"
              onClick={() => {
                if (window.confirm("¿Seguro que querés vaciar tu lista?")) {
                  vaciar()
                }
              }}
              className="h-[42px] w-full rounded-[10px] border border-lava-pink/40 font-archivo text-[13px] font-bold tracking-wide text-lava-pink uppercase transition-colors hover:bg-lava-pink/10"
            >
              Vaciar lista
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

export default ListPanel
