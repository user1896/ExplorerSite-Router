import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserProfile from './components/UserProfile';
import { useState, lazy, Suspense } from 'react';
import Auth from "./components/Auth";
import Login from "./components/Login";

const AboutUs = lazy( () => import("./components/AboutUs") )
const NotFound = lazy( () => import("./components/NotFound") )

function App() {
  const [caller, setCaller] = useState("\'Home\'")
  const [current, setCurrent] = useState("\'Home\'")

  const [username, setUsername] = useState("")
  const [isLogged, setIsLogged] = useState(false)

  return (
    <Suspense fallback={() => <h1>Loading...</h1>} >
      <Routes>
        <Route path='/'
          element={<Navbar setCaller={setCaller} current={current} />}
        >
          <Route exact path='/'
            element={
              <Home caller={caller} setCurrent={setCurrent} />
            }
          />
          <Route path='/about'
            element={
              <AboutUs caller={caller} setCurrent={setCurrent} />
            }
          />
          <Route path='/users/:username' element={<UserProfile />} />
          <Route path='/login'
            element={<Login setIsLogged={setIsLogged} setUsername={setUsername} />}
          />
          <Route path='/auth'
            element={
              isLogged ? <Auth username={username} /> : <Navigate replace to={"/login"} />
            }
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
export default App;
