import AnimatedCursor from "react-animated-cursor";

export const AnimatedCursorPlay = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "#9ccc65",
      }}
      outerStyle={{
        border: "3px solid #333333",
      }}
    />
  );
};
