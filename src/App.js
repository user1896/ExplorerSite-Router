import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Route>
    </Routes>
  );
}
// 23 minutes
export default App;
