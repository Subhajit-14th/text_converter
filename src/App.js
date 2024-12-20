import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Navbar title="My Website" />
      <div className="container">
        <TextForm heading="Enter your text" />
      </div>
    </>
  );
}

export default App;
