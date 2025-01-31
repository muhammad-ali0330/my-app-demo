// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Footer from "./components/Footer";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
// } from "react-router-dom";

function App() {
  let [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [themeColor, setThemeColor] = useState("default");

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglePurple = () => {
    if (themeColor === "purple") {
      // Reset to default
      setThemeColor("default");
      document.body.style.backgroundColor =
        mode === "light" ? "white" : "#303030";
      showAlert("Purple Theme has been Disabled!", "success");
    } else {
      // Activate purple theme
      setThemeColor("purple");
      document.body.style.backgroundColor = "#b169ff";
      showAlert("Purple Theme has been Activated!", "success");
    }
  };

  const toggleOrange = () => {
    if (themeColor === "orange") {
      // Reset to default
      setThemeColor("default");
      document.body.style.backgroundColor =
        mode === "light" ? "white" : "#303030";
      showAlert("Orange Theme has been Disabled!", "success");
    } else {
      // Activate orange theme
      setThemeColor("orange");
      document.body.style.backgroundColor = "#ffa500";
      showAlert("Orange Theme has been Activated!", "success");
    }
  };

  const togglePink = () => {
    if (themeColor === "pink") {
      // Reset to default
      setThemeColor("default");
      document.body.style.backgroundColor =
        mode === "light" ? "white" : "#303030";
      showAlert("Pink Theme has been Disabled!", "success");
    } else {
      // Activate pink theme
      setThemeColor("pink");
      document.body.style.backgroundColor = "#ff69b4";
      showAlert("Pink Theme has been Activated!", "success");
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#303030";
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text Reformer"
        mode={mode}
        themeColor={themeColor}
        toggleMode={toggleMode}
        togglePurple={togglePurple}
        toggleOrange={toggleOrange}
        togglePink={togglePink}
      />
      <Alert alert={alert} />
      <div className="container my-10">
        {/* <Routes>
            {/* Redirect from / to /home */}
        {/* <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/home"
              element={ */}{" "}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to Reform"
          mode={mode}
          themeColor={themeColor}
        />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
