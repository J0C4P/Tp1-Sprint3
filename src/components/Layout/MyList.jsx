const MyList = ({ cantidad, togglePanel }) => {
  return (
    <button
      type="button"
      onClick={togglePanel}
      className="flex h-[42px] shrink-0 items-center gap-2 rounded-[21px] border border-white/14 bg-white/4 px-3 font-archivo text-[13px] font-bold whitespace-nowrap text-fg uppercase tracking-wide transition-colors hover:border-lava-pink hover:bg-lava-pink/10 sm:px-[18px]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h10" />
      </svg>
      <span>Mi Lista{cantidad > 0 ? ` (${cantidad})` : ""}</span>
    </button>
  )
}

export default MyList
