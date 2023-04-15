import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { Route, Routes, useLocation, useHistory } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, IngredientDetailPage, LoginPage, NotFoundPage, OrderFeedPage, OrdersPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import Header from '../header/header';
import { ProfileNav } from '../profile-nav/profile-nav';
import { checkIsUserAuth } from '../../services/actions/user';
import { ProtectedRouteElement } from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientModal from '../modal/ingredient-modal/ingredient-modal';

const App = () => {
  const dispatch = useDispatch();
  //const history = useHistory();
  const location = useLocation();

  const background = location.state && location.state.background;

  useEffect(()=> {
      dispatch(getIngredients());
      dispatch(checkIsUserAuth());
  }, [dispatch])

  return (
    <>
      <Routes location={background || location}>
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
          <Route path="orders-feed" element={
            <ProtectedRouteElement onlyAuth element={<OrderFeedPage />}/> }
          />
          <Route path="profile/" element={
            <ProtectedRouteElement onlyAuth element={<ProfileNav />} />}>
              <Route index element={<ProfilePage />} />
              <Route path="orders" element={<OrdersPage />} />
          </Route>
          <Route path='ingredients/:id' element={<IngredientDetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

      {background && 
        <Routes>
          <Route path='ingredients/:id' element={
            <Modal modalTitle={'Детали ингредиента'}>
              <IngredientModal />
            </Modal>
          } />
        </Routes>
      }
    </>
  )
}

  
export default App;