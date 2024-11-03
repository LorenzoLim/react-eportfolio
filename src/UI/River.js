import styled from "styled-components";
import river from "../assets/river.jpg";

const River = styled.div`
  background-image: url(${river});
  height: 2000px;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 960px) {
    height: 1100px;
  }
`;

export default River;
