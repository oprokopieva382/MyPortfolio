import styled from "styled-components";
import chillOffice from "../assets/img/chillOffice.jpeg";

export const ChillOfficeBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${chillOffice});
  background-size: cover;
  z-index: -1;
  opacity: 0.7;


`;
