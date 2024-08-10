import Inicio from './componentes/Inicio.js';
import Login from './componentes/Login';
import Registro from './componentes/Registro.js';
import './bootstrap.min.css';
import './App.css';
import store  from './store/Index.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Inicio/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registro' element={<Registro/>}/>
          </Route>

        </Routes>

      </BrowserRouter>

    </Provider>
  );
}

export default App;
