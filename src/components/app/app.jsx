import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, LoginPage, OrdersPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import Header from '../header/header';
import { ProfileNav } from '../profile-nav/profile-nav';

const App = () => {
  
  const dispatch = useDispatch();
 
  useEffect(()=> {
      dispatch(getIngredients())
  }, [dispatch])

  return (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="profile" element={<ProfileNav />} >
            <Route index element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route>
        </Route>
      </Routes>

  );
}

  
export default App;