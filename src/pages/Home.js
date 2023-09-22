import NavBar from '../components/NavBar';
import MainBody from '../components/MainBody';
import Footer from '../components/Footer';
import "../App.css";

function Home() {
  return (
    <div className="App">
      <NavBar/>
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default Home;

