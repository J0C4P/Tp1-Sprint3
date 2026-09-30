const SearchBar = ({ busqueda, setBusqueda }) => {
  return (
    <div className="relative flex min-w-0 flex-1 items-center sm:flex-none">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute left-3.5 text-fg-muted">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Buscar juegos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="h-[42px] w-full min-w-0 rounded-[21px] border border-white/14 bg-white/5 pr-4 pl-[40px] font-manrope text-sm text-fg placeholder:text-fg-muted focus:border-lava-pink focus:outline-none sm:w-[260px]"
      />
    </div>
  )
}

export default SearchBar
