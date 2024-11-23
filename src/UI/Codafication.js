import styled from "styled-components";
import codaficationIMG from "../assets/codafication.jpg";

const Codafication = styled.div`
  width: 350px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  background-image: url(${codaficationIMG});
  float: left;
  margin: 0 5px;
  line-height: 100px;
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  animation-delay: 0.4s;
`;

export default Codafication;
