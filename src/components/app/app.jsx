import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getIngredients } from '../../services/actions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages';

const App = () => {
  
  const dispatch = useDispatch();
 
  useEffect(()=> {
      dispatch(getIngredients())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

  
export default App;