import styled from "styled-components";
import brickwall from "../assets/brickwall.jpg";

const Brickwall = styled.div`
  background-image: url(${brickwall});
  height: 2000px;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 960px) {
    height: 1100px;
  }
`;

export default Brickwall;
