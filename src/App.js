import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/users/:username' element={<UserProfile />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
export default App;
