import contactMe from "../../assets/video/contactMe.mp4";
import { Form } from "../Form";
import { UniversalBoxContainer } from "../../style/UniversalStyle";

export const Contact = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        src={contactMe}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
      <UniversalBoxContainer>
        <Form />
      </UniversalBoxContainer>
    </>
  );
};
