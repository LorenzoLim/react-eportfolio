import styled from "styled-components";
import city from "../assets/adrian-infernus.jpg";

const CityBackdrop = styled.div`
  background-image: url(${city});
  height: 100vh;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 960px) {
    height: 1100px;
  }
`;

export default CityBackdrop;
