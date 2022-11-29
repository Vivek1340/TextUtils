import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handle upclick  was clicked ")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case" , "success")
  };
  const handleLoClick = () => {
    // consolelog("handle upclick  was clicked ")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case" , "success")

  };
  const handleClClick = () => {
    // consolelog("handle upclick  was clicked ")
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared" , "success")

  };
  const handleOnChange = (event) => {
    // console.log("handle change")
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied" , "success")

  };
  const handleRemoveExtraSpace = ()=>{
    const removeExtraSpace = (text) => text.trim().split(/ +/).join(' ');
    
      setText(removeExtraSpace);
    props.showAlert("Extra Space Removed" , "success")

  }

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === `dark` ? `#042743` : `white`,
              color: props.mode === `dark` ? `white` : `black`,
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text : "Enter something in the text box above to preview it here!" }</p>
      </div>
    </>
  );
}
