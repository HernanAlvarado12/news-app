import { Item } from "./Item"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import menuClose from "../assets/menu-close.svg"
import { useEffect, useRef } from "react"

const items = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Header = () => {
    const menuRef = useRef(null)

    const handleClick = () => {
        menuRef.current.classList.toggle('hidden')
    }

    useEffect(() => {
        const changeClass = () => menuRef.current.classList.add('hidden')
        window.matchMedia('(max-width: 899px)').addEventListener('change', changeClass)
        return () => window.removeEventListener('change', changeClass)
    }, [])

    return (
        <header>
            <nav className="w-90 h-8 mx-auto flex items-center justify-between lg:w-85">
                <img className="h-2.5" src={logo} alt="logo icon" />
                <img className="ds:hidden" src={menu} alt="menu icon" onClick={handleClick} />
                <menu className="w-3/5 pt-3 px-2 pr-menu hidden absolute inset-y-0 right-0 border-l border-black bg-white ds:w-auto ds:p-0 ds:block ds:relative ds:border-0" ref={menuRef}>
                    <img className="w-3 ml-auto cursor-pointer ds:hidden" src={menuClose} alt="menu close icon" onClick={handleClick} />
                    <ul className="flex items-start flex-col gap-y-2 ds:flex-row ds:gap-x-3">
                        {items.map((item, key) => <Item key={key} text={item} color="blue" />)}
                    </ul>
                </menu> 
            </nav>
        </header>
    )
}

export { Header }