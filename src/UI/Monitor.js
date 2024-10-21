import styled from "styled-components";
import editedMonitor from "../assets/monitor.png";

const monitor = styled.div`
  width: 950px;
  height: 500px;
  text-align: center;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  background-image: url(${editedMonitor});
  float: left;
  margin: 0 5px;
  line-height: 100px;
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  animation-delay: 0.4s;
`;

export default monitor;
