import { BrowserRouter , Route , Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ManageStudent from './components/ManageStudent';
import Update from './components/Update';

function App () {
  return (
    
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/AddStudent" element={<AddStudent />} />
            <Route path="/ManageStudent" element={<ManageStudent />} />
            <Route path='/Update' element={<Update />} />            
            <Route path="/Logout" element={<Home/>} />
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
