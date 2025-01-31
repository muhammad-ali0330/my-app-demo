import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UPPERCASE", "success");
  };

  const handlelowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LOWERCASE", "success");
  };

  const handleClearTextClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert(" Text Has Cleared", "success");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setShowToast(true); // Show the toast
        setTimeout(() => {
          setShowToast(false); // Hide the toast after 2 seconds
        }, 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getBackgroundColor = () => {
    if (props.mode === "dark") {
      return "#303030"; // Dark mode background
    } else if (props.themeColor === "purple") {
      return "#bfa7db"; // Purple theme background
    } else if (props.themeColor === "orange") {
      return "#ffe0bf"; // Orange theme background
    } else if (props.themeColor === "pink") {
      return "#e3a3d4"; // Pink theme background
    } else {
      return "white"; // Default background
    }
  };

  const handleWordCountToReadingTime = () => {
    const wordCount = text.split(" ").length;
    const wordsPerMinute = 200; // Typical average reading speed for adults
    const readingTime = wordCount / wordsPerMinute;
    return readingTime < 1 ? readingTime.toFixed(4) : Math.trunc(readingTime); // Show fractional time for <1 minute
  };

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: getBackgroundColor(), // Use the dynamic background color
              color: props.mode === "dark" ? "white" : "black", // Text color based on mode
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1-" onClick={handlelowClick}>
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={handleClearTextClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={handleCopyToClipboard}
        >
          Copy to Clipboard
        </button>
      </div>
      {/* Bootstrap Toast Notification */}
      <div
        className={`toast position-fixed bottom-0 end-0 p-3 ${
          showToast ? "show" : ""
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ zIndex: 1050 }}
      >
        <div className="toast-header">
          <strong className="me-auto">Success</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">Text copied to clipboard!</div>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>You text summary</h2>
        <p>
          {text.length === 0 ? "0" : text.split(" ").length} words,{" "}
          {text.length} characters
        </p>
        <p>{handleWordCountToReadingTime()} Estimate Minutes to Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
