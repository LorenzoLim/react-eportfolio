import styled from "styled-components";
import phone from "../assets/phones.png";

const Phones = styled.div`
  width: 950px;
  height: 500px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  background-image: url(${phone});
  float: left;
  margin: 0 5px;
  line-height: 100px;
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  animation-delay: 0.4s;
`;

export default Phones;
