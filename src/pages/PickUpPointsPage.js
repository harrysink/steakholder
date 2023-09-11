import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PickUpPoints from "../components/PickUpPoints";
import "../App.css";

function PickUpPointsPage() {
    return (
        <div className="App">
            <NavBar/>
            <PickUpPoints/>
            <Footer/>
        </div>
    )
}

export default PickUpPointsPage;