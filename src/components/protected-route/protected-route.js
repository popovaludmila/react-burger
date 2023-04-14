import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth"

export const ProtectedRouteElement = ({isAuth = false, children}) => {
    const auth = useAuth();
    const location = useLocation();

    if(isAuth && auth) {
    
    }

    return (
        <>

        </>
    )
}