import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CopyRight from './components/Copyright';
import MainPage from './pages/MainPage';

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />

      <CopyRight />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}
