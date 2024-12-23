import styled from "styled-components";
import profilePicture from "../assets/profile-picture.jpg";

const ProfilePicture = styled.div`
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  background-image: url(${profilePicture});
  float: left;
  margin: 0 5px;
  line-height: 100px;
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  animation-delay: 0.4s;
  filter: brightness(140%);
`;

export default ProfilePicture;
