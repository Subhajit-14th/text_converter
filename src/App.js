import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Converter" />
      <div className="container">
        <TextForm heading="Enter your text" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
