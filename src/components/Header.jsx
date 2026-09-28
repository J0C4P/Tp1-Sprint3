const Header = () => {
  return (
    <div className="flex shrink-0 items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-lava-pink">
        <polygon points="12 2 15 9 22 9.5 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.5 9 9" />
      </svg>
      <h1 className="hidden font-archivo text-[18px] font-black whitespace-nowrap text-fg tracking-tight sm:block sm:text-[22px]">
        MI<span className="text-lava-pink">GAMELIST</span>
      </h1>
    </div>
  )
}

export default Header
