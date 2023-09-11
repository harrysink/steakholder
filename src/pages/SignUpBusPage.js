import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignUpBus from "../components/SignUpBus";
import "../App.css";

function SignUpBusPage() {
    return (
        <div className="App">
            <NavBar/>
            <SignUpBus/>
            <Footer/>
        </div>
    )
}

export default SignUpBusPage;