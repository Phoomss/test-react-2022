import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './page/Home';
import Contact from './page/Contact';
import Teacher from './page/Teacher';
import Course from './page/Course';


function App() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/teacher' element={<Teacher/>}/> 
      <Route path='/contact' element={<Contact/>}/>
     
   </Routes>
  );
}

export default App;
