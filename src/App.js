import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAleart] = useState(null);

  const showAlert = (message, type) => {
    setAleart({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAleart(null);
    }, 1500);
  };

  const onToggleChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Text Converter" mode={mode} toggleMode={onToggleChange} />
      <Alert alert={alert} />
      <div className="container my -3">
        <TextForm heading="Enter your text" mode={mode} />
        {/* <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter your text" mode={mode} />}
            />
            <Route path="/about" element={<About />} />
          </Routes> */}
      </div>
    </>
  );
}

export default App;
