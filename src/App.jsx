import "./App.css";
import Header from "./components/header/Header";
import MainHeaderLogo from "./components/main/main-header-logo/MainHeaderLogo";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div className="header-main-body-wrapper">
        <Header />
        <MainHeaderLogo />
      </div>
      <Footer />
    </>
  );
}

export default App;
