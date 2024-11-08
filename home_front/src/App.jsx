import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import HomeMain from './pages/HomeMain';
import Footer from './pages/footer';
import CopyRight from './pages/copyright';

//

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeMain />} />
      </Routes>
      <Footer />
      <CopyRight />
    </div>
  );
}
