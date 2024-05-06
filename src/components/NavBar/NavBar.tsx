import { NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
    const activeStyle = "underline underline-offset-4"

    return (
        <nav className='bg-white flex justify-between items-center  w-full bg-red-10 z-1 top-0 fixed py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg font-semibold'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/myorders'
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/myorder'
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/signin'
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/myaccount'
                        className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        My Account
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li>
                    test1
                </li>
                <li>
                    test2
                </li>
                <li>
                    ⌘ K
                </li>
            </ul>
        </nav>
    )
}
export default NavBar