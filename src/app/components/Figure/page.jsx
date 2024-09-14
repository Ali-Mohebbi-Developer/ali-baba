import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const Image = styled("img")({
  objectFit: "contain",
  width: "100%",
  margin: "0",
});

const Figcaption = styled("figcaption")({
  fontSize: "17px",
  marginTop: "15px",
  wordBreak: "break-word",
  overflow: "hidden",
  maxWidth: "100%",
  padding: "10px",
  lineHeight: "2rem",
});

const TypoTitle = styled("h2")({
  fontSize: "20px",
  fontWeight: "800",
  marginTop: "-35px",
  marginRight: "5px",

  color: "white",
});

const Figure = ({ src, title, desc }) => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Image src={src} alt={title} />
      <TypoTitle>{title}</TypoTitle>
      <Figcaption>{desc}</Figcaption>
    </Box>
  );
};

const FiguresGrid = ({ figures }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {figures.map((figure) => (
        <Figure
          key={figure.id}
          src={figure.src}
          title={figure.title}
          desc={figure.desc}
        />
      ))}
    </Box>
  );
};

export default FiguresGrid;
