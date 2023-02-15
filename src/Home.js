import logo from "./logo.svg";
import "./App.css";
//import {Routes,Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function Home() {
  return (
    <>
      
      <Nav />
      <Header />
      <Header2 />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
