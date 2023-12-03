import styled from "styled-components";

export const ExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const IconStyle = styled.div`
  color: #fff;
  font-size: 30px;

  &:hover {
    color: #9ccc65;
  }
`;
export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: "rgba(43, 42, 42, 0.5)";
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 55px;
  padding: 8px 0;
`;
