import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import "../App.css";

function SignUpPage() {
  return (
    <div className="App">
      <NavBar/>
      <SignUp/>
      <Footer/>
      
    </div>
  );
}

export default SignUpPage;