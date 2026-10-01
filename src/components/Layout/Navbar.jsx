import Header from './Header'
import MyList from './MyList'
import ThemeToggle from './ThemeToggle'
import SearchBar from './SearchBar'
import { VISTAS } from '../../data/vistas.js'

const Navbar = ({ vista, busqueda, setBusqueda, togglePanel }) => {
  return (
    <nav className="sticky top-0 z-30 flex h-[76px] items-center justify-between gap-3 border-b border-white/8 bg-bg/90 px-4 backdrop-blur-md sm:gap-6 sm:px-8 lg:px-12">
      <Header></Header>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4">
        {vista === VISTAS.TIENDA && <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>}
        <ThemeToggle></ThemeToggle>
        <MyList togglePanel={togglePanel}></MyList>
      </div>
    </nav>
  )
}

export default Navbar
