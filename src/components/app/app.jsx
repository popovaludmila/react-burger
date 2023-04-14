import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, LoginPage, OrdersPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import Header from '../header/header';
import { ProfileNav } from '../profile-nav/profile-nav';
import { checkIsUserAuth } from '../../services/actions/user';

const App = () => {
  const dispatch = useDispatch();
  console.log(123);
 
  useEffect(()=> {
      dispatch(getIngredients());
      dispatch(checkIsUserAuth());
  }, [dispatch])

  return (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="profile/" element={<ProfileNav />} >
            <Route index element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route>
        </Route>
      </Routes>

  );
}

  
export default App;