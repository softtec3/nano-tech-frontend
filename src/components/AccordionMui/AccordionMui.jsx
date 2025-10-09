import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { IoIosArrowDown } from "react-icons/io";
import "./AccordionMui.css";
import { Link } from "react-router";
export default function AccordionMui({ sections }) {
  return (
    <div style={{ width: "100%", zIndex: "0" }} id="mainAccordionDiv">
      {sections?.map((section, index) => (
        <Accordion key={index} style={{ width: "100%" }}>
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{section?.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {section?.items?.map((link, index) => (
                <Link to={link.href} key={index}>
                  {link.label}
                </Link>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
