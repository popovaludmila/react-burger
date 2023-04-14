import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, LoginPage, OrdersPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import Header from '../header/header';
import { ProfileNav } from '../profile-nav/profile-nav';
import { checkIsUserAuth } from '../../services/actions/user';
import { ProtectedRouteElement } from '../protected-route/protected-route';

const App = () => {
  const dispatch = useDispatch();
 
  useEffect(()=> {
      dispatch(getIngredients());
      dispatch(checkIsUserAuth());
  }, [dispatch])

  return (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={
            <ProtectedRouteElement onlyUnauth element={<LoginPage />}/> }
          />
          <Route path="register" element={
            <ProtectedRouteElement onlyUnauth element={<RegisterPage />}/>}
          />
          <Route path="forgot-password" element={
            <ProtectedRouteElement onlyUnauth element={<ForgotPasswordPage />}/> }
          />
          <Route path="reset-password" element={
            <ProtectedRouteElement onlyUnauth element={<ResetPasswordPage />}/> }
          />
          <Route path="profile/" element={
            <ProtectedRouteElement onlyAuth element={<ProfileNav />} />}
          >
            <Route index element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route>
        </Route>
      </Routes>
  );
}

  
export default App;