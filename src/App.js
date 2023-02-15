import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Projects from './components/Projects';
import Aboutus from './Aboutus';
import Contactus from './Contactus';


function App() {
  return (
  <>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path='/contact' element={<Contactus/>}/>
<Route path='/skills' element={<Projects/>}/>
<Route path='/about' element={<Aboutus/>}/>
</Routes>

  </>
  );
}

export default App;
 //<Nav/>
 // <Header/>
 // <Header2/>
 // <About/>
 // <Contact/>
 // <Footer/>