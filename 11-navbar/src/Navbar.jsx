import { useRef, useState } from "react";
import logo from "./logo.svg";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showlLinks, setSohowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  function toggleButton() {
    console.log(linksRef.current.getBoundingClientRect());
    setSohowLinks(!showlLinks);
  }

  const linksStyle = {
    height: showlLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleButton}>
            <FaBars />
          </button>
        </div>

        {/* {showlLinks && (
          <div className="links-container">
            <ul className="links">
              {links.map((link) => {
                const { url, id, text } = link;
                return (
                  <li key={id}>
                    {" "}
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )} */}

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyle}
        >
          {/* links */}
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { url, id, text } = link;
              return (
                <li key={id}>
                  {" "}
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social-icons */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
