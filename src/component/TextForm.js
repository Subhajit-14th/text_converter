import React, { useState } from "react";

export default function TextForm(profs) {
  const handleUpClick = () => {
    console.log("Uppercase was click" + myText);
    let newText = myText.toUpperCase();
    setText(newText);
  };

  const handleOnChanged = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleLOClick = () => {
    console.log("Lowercase was click" + myText);
    let newText = myText.toLowerCase();
    setText(newText);
  };

  const [myText, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <div className="my-4">
            <label className="form-label">{profs.heading}</label>
          </div>
          <textarea
            id="myBox"
            className="form-control"
            rows="10"
            cols="50"
            placeholder="Enter your text here"
            value={myText}
            onChange={handleOnChanged}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleLOClick}
        >
          Convert to lowercase
        </button>
      </div>
      <div className="container my-4">
        <h1>Your text summry</h1>
        <p>
          {myText.length == 0 ? 0 : myText.split(" ").length} words and{" "}
          {myText.length} character
        </p>
      </div>
    </>
  );
}
