import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 960px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media (max-width: 960px) {
    width: 480px;
    flex-direction: row;
  }
`;

export default Container;
