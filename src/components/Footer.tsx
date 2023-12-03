import { FooterIcon } from "./reusableComponents/FooterIcon";

export const Footer = () => {
  const gitHub= "https://github.com/oprokopieva382";
  const linkedin= "https://www.linkedin.com/in/oksana-prokopieva/";

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(43, 42, 42, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 55,
        padding: "8px 0",
      }}
    >
      <FooterIcon hrefinfo={gitHub} icon="GitHub" />
      <FooterIcon hrefinfo={linkedin} icon="LinkedIn" />
    </div>
  );
};
