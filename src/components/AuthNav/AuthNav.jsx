import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

export default function AuthNav() {
    return (
        <nav className={css.nav}>
            <NavLink to='/login'>Log in</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </nav>
    )
}