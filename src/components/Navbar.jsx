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
        zIndex: 3,
      }}
    >
      <NavbarButton>Home</NavbarButton>
      <NavbarButton>Skills</NavbarButton>
      <NavbarButton>Portfolio</NavbarButton>
      <NavbarButton>About</NavbarButton>
      <NavbarButton>Contact</NavbarButton>
    </div>
  );
}

export default Navbar;
