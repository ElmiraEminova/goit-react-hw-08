import { useSelector } from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors"
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, goTo }) {
    const isLogIn = useSelector(selectIsLoggedIn);
    return (isLogIn ? <Navigate to={goTo} /> : component);
}

