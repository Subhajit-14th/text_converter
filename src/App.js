import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Navbar
          title="Text Converter"
          mode={mode}
          toggleMode={onToggleChange}
        />
        <Alert alert={alert} />
        <div className="container my -3">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter your text" mode={mode} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
