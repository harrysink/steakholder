import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="signin" element={<SignInPage/>}/>
          <Route path="signup" element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBody/>}>
            <Route path="signin" element={<SignIn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>*/

