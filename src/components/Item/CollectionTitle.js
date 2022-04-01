import React from "react";
import "./CollectionTitle.scss";

import Typical from "react-typical";
function CollectionTitle() {
  return (
    <>
      <h3>
        Collections: Comfortably feel of the{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "fashion",
            2000,
            "glory",
            2000,
            "style",
            2000,
            "trend",
            2000,
            "moment.",
            10000,
          ]}
        />
      </h3>
    </>
  );
}

export default CollectionTitle;
