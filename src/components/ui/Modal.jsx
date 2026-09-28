import { useEffect } from 'react'

function Modal({ abierto, onClose, titulo, children }) {
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
        className="fixed top-0 right-0 z-50 flex h-screen w-[400px] max-w-[92vw] flex-col bg-white shadow-xl dark:bg-gray-900"
      >
        <div className="flex items-center justify-between border-b border-black/10 px-4 py-4 dark:border-white/10">
          {titulo && (
            <h2 id="modal-titulo" className="text-lg font-bold">
              {titulo}
            </h2>
          )}
          <button
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">{children}</div>
      </div>
    </>
  )
}

export default Modal
