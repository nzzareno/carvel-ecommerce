import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./Spinner.scss";
export default function Spinner() {
  return (
    /* <Backdrop
    invisible={true}
        sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        >
        <CircularProgress color="inherit" />
      </Backdrop> */
    <svg className="spinner" viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  );
}
