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
      <div onClick={onClose} />

      <div role="dialog" aria-modal="true" aria-labelledby={titulo ? 'modal-titulo' : undefined}>
        <div>
          {titulo && <h2 id="modal-titulo">{titulo}</h2>}
          <button type="button" aria-label="Cerrar" onClick={onClose}>
            ✕
          </button>
        </div>

        <div>{children}</div>
      </div>
    </>
  )
}

export default Modal
