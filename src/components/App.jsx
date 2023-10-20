import "../styles/App.scss";
import Welcome from "./Welcome/Welcome";
import Header from "./Header/Header";
import ToTop from "./ToTop";
import Services from "./Services/Services";
import HotelRooms from "./HotelRooms/HotelRooms";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";
import Loader from "./Loader";

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};
const App = () => {
  return (
    <div className="App">
      <Loader />
      <Header />
      <Welcome />
      <ToTop />
      <Services />
      <HotelRooms />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
