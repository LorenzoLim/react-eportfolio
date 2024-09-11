import { NavbarButton } from "../UI";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <NavbarButton>Home</NavbarButton>
      <NavbarButton>About</NavbarButton>
      <NavbarButton>Contact</NavbarButton>
      <NavbarButton>Portfolio</NavbarButton>
    </div>
  );
}

export default Navbar;
