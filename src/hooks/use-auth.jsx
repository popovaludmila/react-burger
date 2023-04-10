import { useSelector } from "react-redux";

export const useAuth = () => {
    const {email, name, token} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        name,
        token
    }
}