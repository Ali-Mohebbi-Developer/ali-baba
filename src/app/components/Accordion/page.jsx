import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBlockStart: `1px solid ${theme.palette.divider}`,
  backgroundColor: "#fff",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "100%",
  "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
    transition: "0.4s",
    borderRadius: "100%",
    fontSize: "2rem",
    padding: "3px",
  },
  "&:hover .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
    color: "#17A2B8",
    backgroundColor: "#E8F9FC",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    marginLeft: "auto",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#fff",
}));

const CustomAccordion = ({ title, desc }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange} dir="rtl">
      <AccordionSummary aria-controls="panel-content" id="panel-header">
        <QuestionMarkIcon
          sx={{
            fontSize: "2.5rem",
            marginRight: "8px",
            backgroundColor: "#E8F9FC",
            color: "#17A2B8",
            borderRadius: "50%",
            padding: "5px",
            marginLeft: "5px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Zain, sans-serif",
            fontSize: "20px",
            fontWeight: "800",
            color: "#4b5259",
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            fontFamily: "Zain, sans-serif",
            color: "#6c7680",
            fontSize: "18px",
            paddingRight: "60px",
            paddingLeft: "40px",
          }}
        >
          {desc}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
