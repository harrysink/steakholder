import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="signin" element={<SignInPage/>}/>
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

