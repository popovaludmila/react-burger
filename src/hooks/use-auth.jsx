import { useSelector } from "react-redux";

export const useAuth = () => {
    const {email, name} = useSelector(state => state.user);
    const token = localStorage.getItem('accessToken');
    
    return {
        isAuth: !!email,
        email,
        name,
        token
    }
}