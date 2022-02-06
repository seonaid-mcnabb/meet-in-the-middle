import React from "react";
import DesktopIntro from "../videos/meet-desktop.mp4";
import MobileIntro from "../videos/meet-mobile.mp4";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage"; //imported for the purpose of toggling light/dark themes

export default function Intro() {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/login"); // using React Router, once login is successful, the page will redirect to the home page
  };

  let defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //^^checks to see if user has set a theme preference in their browser

  let [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  //^^theme variable tied to local storage to update theme.
  //^^defaults to light unless defaultDark comes back as true, then it does dark

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
      <div className="intro-container">
        <video loop autoPlay muted className="intro-video">
          <source src={DesktopIntro} type="video/mp4" />
        </video>
        <video loop autoPlay muted className="mobile-video">
          <source src={MobileIntro} type="video/mp4" />
        </video>
      </div>

      <div className="intro-text" data-theme={theme}>
        <p>Meet in the middle and discover somewhere new</p>
        <button className="intro-button" onClick={() => routeChange()}>
          Get started
        </button>
        {"\n"}

        <button className="intro-button intro-container" onClick={switchTheme}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}
