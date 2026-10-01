import { useEffect } from 'react'

const Modal = ({ abierto, onClose, titulo, children }) => {
  useEffect(() => {
    if (!abierto) return

    const handleKeyDown = (evento) => {
      if (evento.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [abierto, onClose])

  if (!abierto) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/60" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titulo ? 'modal-titulo' : undefined}
        className="fixed top-0 right-0 z-50 flex h-screen w-[380px] max-w-[92vw] flex-col bg-surface"
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          {titulo && (
            <h2 id="modal-titulo" className="font-archivo text-lg font-bold text-fg">
              {titulo}
            </h2>
          )}
          <button
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-fg-muted hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
      </div>
    </>
  )
}

export default Modal
