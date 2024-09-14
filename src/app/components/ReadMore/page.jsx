"use client";
import styled from "@emotion/styled";
import { Box, Button, Icon } from "@mui/material";
import React, { useState } from "react";

const TypoP = styled("p")({
  fontSize: "18px",
  color: "#4b5259 ",
});
const ReadMore = ({ firstText, secondText }) => {
  const [isExpand, setIsExpand] = useState(false);
  const toggleReadMore = () => {
    setIsExpand(!isExpand);
  };
  return (
    <Box>
      <TypoP>
        {!isExpand ? firstText : secondText}
        <Button
          sx={{
            fontFamily: "Zain",
            paddingY: "2px",
            paddingX: "5px",
            border: "1px solid rgba(0, 119, 219, 0)",
            marginRight: "5px",
            borderRadius: "5px",
            ":hover": {
              border: "1px solid rgba(0, 119, 219, 0.5)",
            },
          }}
          onClick={toggleReadMore}
        >
          {!isExpand ? "بیشتر بخوانید" : "بستن"}
          <Icon
            sx={{ fontSize: "14px", marginRight: "5px", marginTop: "-5px" }}
            className={
              !isExpand ? `bi bi-caret-down-fill` : `bi bi-caret-up-fill`
            }
          ></Icon>
        </Button>
      </TypoP>
    </Box>
  );
};

export default ReadMore;
