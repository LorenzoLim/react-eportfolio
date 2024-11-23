import styled from "styled-components";
import techxImg from "../assets/techx.jpg";

const TechX = styled.div`
  width: 350px;
  height: 450px;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  background-image: url(${techxImg});
  float: left;
  margin: 0 5px;
  line-height: 100px;
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  animation-delay: 0.4s;
`;

export default TechX;
