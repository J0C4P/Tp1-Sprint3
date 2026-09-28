import {items} from "../../data/items"
import CatalogCard from "./CatalogCard"

const CatalogList = ({ estaEnLista, onToggle, busqueda }) => {
  const itemsFiltrados = items.filter((item) =>
    item.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section className="mx-auto max-w-[1320px] px-4 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24 lg:px-12">
      <div className="mb-6 flex flex-col gap-1 sm:mb-9">
        <h2 className="font-archivo text-2xl font-black tracking-tight text-fg sm:text-[34px]">Catálogo</h2>
        <p className="font-manrope text-[15px] text-fg-muted">Explorá la colección y armá tu lista.</p>
      </div>

      {items.length === 0 ? (
        <p className="font-manrope text-sm text-fg-muted">Todavía no hay items en el catálogo.</p>
      ) : itemsFiltrados.length === 0 ? (
        <div className="flex flex-col gap-1.5 py-16">
          <p className="font-archivo text-lg font-bold text-fg">Sin resultados</p>
          <p className="font-manrope text-sm text-fg-muted">No encontramos resultados para "{busqueda}".</p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,minmax(232px,1fr))] sm:gap-7">
          {itemsFiltrados.map((item) => (
            <CatalogCard
              key={item.id}
              item={item}
              enLista={estaEnLista(item.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default CatalogList