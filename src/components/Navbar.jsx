function Navbar() {
  return (
    <div
      id="nav"
      style={{
        height: 70,
        background: "transparent",
        display: "block",
        position: "fixed",
        zIndex: 4,
        transition: "all ease .5s",
      }}
    >
      <ul
        id="navbar"
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          position: "absolute",
        }}
      >
        <li>
          <a href="about.html" class="link logo">
            About
          </a>
        </li>
        <li>
          <a href="portfolio.html" class="link logo">
            Portfolio
          </a>
        </li>
        <li>
          <a href="contact.html" class="link logo">
            Contact
          </a>
        </li>
        <li>
          <a href="index.html" class="link logo">
            Home
          </a>
        </li>
      </ul>
      <p id="L">
        <img src="favicon/L.png" />
      </p>
    </div>
  );
}

export default Navbar;
