import "antd/dist/antd.css";
import './app.css';
import Header from "../components/header/header";
import ModalBox from "../components/modal/modal";
import RouteNav from "../components/router/route";
import Footer from "../components/footer/footer";

function App() {
  return (
      <>
        <Header />
        <RouteNav />
        <Footer />
        <ModalBox />
      </>
  );
}

export default App;
