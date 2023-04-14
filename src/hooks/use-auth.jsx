import { useSelector } from "react-redux";
import { getCookie } from "../utils/cookie";

export const useAuth = () => {
    const {email, name} = useSelector(state => state.user);
    const token = getCookie('accessToken');
    
    return {
        isAuth: !!email,
        email,
        name,
        token
    }
}