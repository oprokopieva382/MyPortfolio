import video from "../../assets/video/aboutBackground.mp4";
import { UniversalBoxContainer } from "../../style/UniversalStyle";
import {
  ContentContainer,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
} from "../../style/HomeStyle";

export const Home = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        src={video}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
      <UniversalBoxContainer>
        <ContentContainer>
          <TypographyH4>It's me,</TypographyH4>
          <TypographyH2>Oksana</TypographyH2>
          <TypographyH3>Full Stack Developer (MERN)</TypographyH3>
          <TypographyH5>
            Believe, it's so important to keep work and rest in a balance, that
            is why live yoga lifestyle and in a free time enjoying exploring the
            Nature, so if you can't find me here, you definitely find me there🤍
          </TypographyH5>
        </ContentContainer>
      </UniversalBoxContainer>
    </>
  );
};
