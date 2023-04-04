import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from '../../pages';
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
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

  
export default App;