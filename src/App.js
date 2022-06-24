import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import { Header, Footer } from './layout';
import { Home, About, NotFound  } from './pages';


function App() {
  return (
      <>
      <Header />
       App component {/* <Navbar /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />

      </Routes>



       {/* <Home />
       <About /> */}


       <Footer />
      </>
  );
}

export default App;
