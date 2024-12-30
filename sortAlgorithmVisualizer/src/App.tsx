import "./index.css";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import ArrayBar from "./components/arrayBar";
import TextBox from "./components/textBox";
import Sliders from "./components/sliders";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        <div className="main-content">
          <Header />
          <div className="array-container bg-blue-900 shadow-inner">
            <ArrayBar />
          </div>
          <TextBox text="Sahel has a fat booty" />
          <Sliders />
        </div>
      </div>
    </>
  );
}

export default App;
