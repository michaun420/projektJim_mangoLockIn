import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes} from 'react-router-dom';
import Main from './routes/Main';
import Calc from './routes/Calc';
import Dishes from './routes/Dishes';
import Exercises from './routes/Exercises';
import Trening from './routes/tren';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main />}>
      <Route path='calc' element={<Calc />}/>
      <Route path='dishes' element={<Dishes />}/>
      <Route path='exercises' element={<Exercises />}/>
      </Route>
      <Route path='/trening' element={<Trening/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
