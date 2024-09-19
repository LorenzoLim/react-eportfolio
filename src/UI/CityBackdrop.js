import styled from "styled-components";
import city from "../assets/adrian-infernus.jpg";

const CityBackdrop = styled.div`
  background-image: url(${city});
  height: 100vh;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export default CityBackdrop;
