import './App.css';
import {
   BrowserRouter, Routes, Route,
 } from 'react-router-dom';
import FetchData from './component/FetchData';
import Header from "./component/Header";
import Footer from './component/footer';
import HomePage from './component/HomePage';

function App() {
    
  return (
    <div>
      <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/Users" element={<FetchData />}>
      </Route>
    </Routes>
  </BrowserRouter>
  <Footer /> 
  </div>
  );
}

export default App;
