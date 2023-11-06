import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Calcul from './calcu/Calcul';
import { BrowserRouter,Route,routes } from 'react-router-dom';
import"../src/App.css";
 
 

function App() {
  return (
    <div className="App">
      <Calcul/>
 
       {/* <h1>hh</h1>
       <Routes>
       
            <Route path='/' element={ <Navabr/>}></Route>
            <Route path='join' element={<Join/>}/>
       </Routes>
  */}
   
    </div>
  );
}

export default App;
