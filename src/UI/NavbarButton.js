import styled from "styled-components";

const NavbarButton = styled.div`
  height: 60x;
  width: 100px;
  padding: 15.5px;
  padding-left: 40px;
  padding-right: 40px;
  color: black;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  cursor: pointer;
  z-index: 4;
  &:hover {
    transition: all ease-in-out 300ms;
    -webkit-transform: scale(1.3);
  }
`;

export default NavbarButton;
