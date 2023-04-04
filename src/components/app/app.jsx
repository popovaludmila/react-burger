import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, LoginPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import Header from '../header/header';

const App = () => {
  
  const dispatch = useDispatch();
 
  useEffect(()=> {
      dispatch(getIngredients())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="resetPassword" element={<ResetPasswordPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

  
export default App;