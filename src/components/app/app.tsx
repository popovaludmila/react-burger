import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { ForgotPasswordPage, HomePage, IngredientDetailPage, LoginPage, NotFoundPage, OrderDetailPage, OrderFeedPage, OrdersPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import Header from '../header/header';
import { ProfileNav } from '../profile-nav/profile-nav';
import { checkIsUserAuth } from '../../services/actions/user';
import { ProtectedRouteElement } from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientModal from '../modal/ingredient-modal/ingredient-modal';
import { FORGOT_PASSWORD, INGREDIENTS, LOGIN, ORDERS, FEED, PROFILE, REGISTER, RESET_PASSWORD } from '../../utils/data';
import { useDispatch } from '../../hooks/hooks';
import { OrderInfo } from '../order-info/order-info';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
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
          <Route path={LOGIN} element={
            <ProtectedRouteElement onlyUnauth element={<LoginPage />}/> }
          />
          <Route path={REGISTER} element={
            <ProtectedRouteElement onlyUnauth element={<RegisterPage />}/>}
          />
          <Route path={FORGOT_PASSWORD} element={
            <ProtectedRouteElement onlyUnauth element={<ForgotPasswordPage />}/> }
          />
          <Route path={RESET_PASSWORD} element={
            <ProtectedRouteElement onlyUnauth element={<ResetPasswordPage />}/> }
          />
          <Route path={FEED} element={<OrderFeedPage />}/> 
          <Route path={`${FEED}/:id`} element={<OrderDetailPage />} />
          
          <Route path={`${PROFILE}/`} element={
            <ProtectedRouteElement onlyAuth element={<ProfileNav />} />}>
              <Route index element={<ProfilePage />} />
              <Route path={ORDERS} element={<OrdersPage />} />
          </Route>
          <Route path={`${INGREDIENTS}/:id`} element={<IngredientDetailPage />} />


          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

      {background && 
        <Routes>
          <Route path={`${INGREDIENTS}/:id`} element={
            <Modal modalTitle={'Детали ингредиента'} onCloseClick={() => navigate(-1)}>
              <IngredientModal />
            </Modal>
          } />
          <Route path={`${FEED}/:id`} element={
            <Modal modalTitle={''} onCloseClick={() => navigate(-1)}>
               <OrderInfo isLogin={false}/>
            </Modal>
          } />
        </Routes>
      }
    </>
  )
}

  
export default App;