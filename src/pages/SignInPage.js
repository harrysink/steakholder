import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import "../App.css";

function SignInPage() {
  return (
    <div className="App">
      <NavBar/>
      <SignIn/>
      <Footer/>
      
    </div>
  );
}

export default SignInPage;

