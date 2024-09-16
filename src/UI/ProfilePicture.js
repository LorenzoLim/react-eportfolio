import styled from "styled-components";
import profilePicture from "../assets/profile-picture.jpg";

const ProfilePicture = styled.div`
  width: 450px;
  height: 450px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  background-image: url(${profilePicture});
`;

export default ProfilePicture;
