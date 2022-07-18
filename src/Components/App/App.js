import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import style from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import SideBar from '../SideBar/SideBar';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id={style.mainContainer}>
        <div id={style.profileContainer}>
          <Profile />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <SideBar />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
