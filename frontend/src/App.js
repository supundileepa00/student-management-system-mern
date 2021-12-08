import './App.css';
import AddStudent from './components/AddStudent';
import CounterClass from './components/CounterClass';
import CounterFuncton from './components/CounterFunction';
import Header from './components/Header';
import UpdateStudent from './components/UpdateStudent';
import {
  BrowserRouter,
  Routes,
  Router,
  Route
} from "react-router-dom";
import AllStudents from './components/AllStudents';

function App() {
  return (
    <BrowserRouter>


      <div >
        <Header />
        

        <Routes>
          <Route path="/get:id" element={<UpdateStudent />}></Route>
          <Route path="/add" element={<AddStudent/>} />
          <Route path="/" element={<AllStudents/>} />
        </Routes>


      </div>


    </BrowserRouter>

  );
}

export default App;
