import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomeMain from './pages/HomeMain';
import Footer from './components/footer';
import CopyRight from './components/copyright';

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
