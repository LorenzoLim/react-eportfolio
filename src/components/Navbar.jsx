import { NavbarButton } from "../UI";

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 5,
      }}
    >
      <NavbarButton>Home</NavbarButton>
      <NavbarButton>About</NavbarButton>
      <NavbarButton>Portfolio</NavbarButton>
      <NavbarButton>Contact</NavbarButton>
    </div>
  );
}

export default Navbar;
