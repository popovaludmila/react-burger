import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedRouteElementProps ={
    onlyAuth?: boolean;
    onlyUnauth?: boolean;
    element: JSX.Element;
}

export const ProtectedRouteElement = ({onlyAuth, onlyUnauth, element}:TProtectedRouteElementProps): JSX.Element => {
     //@ts-ignore
    const isAuth = useSelector(state => state.user.isAuth);
    const location = useLocation();

    if (onlyAuth && !isAuth) {
        return <Navigate to="/login/" state={{from: location}}/>
    }

    if (onlyUnauth && isAuth) {
        return <Navigate to={location.state ? location.state.from : "/"}/>
    }

    return <>{element}</>
    
}