import styled from "styled-components";
import coderAcademy from "../assets/coder-academy.jpg";

const CoderAcademy = styled.div`
  width: 350px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  background-image: url(${coderAcademy});
  float: left;
  margin: 0 5px;
  line-height: 100px;
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  animation-delay: 0.4s;
`;

export default CoderAcademy;
