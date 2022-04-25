import React from "react";
import "./CollectionTitle.scss";
import Typical from "react-typical";

function CollectionTitle({ productos }) {
  return (
    <div >
      {productos
        .filter((item, index) => index === 0)
        .map((item, index) => (
          <h3 className="collection-title" key={index}>
            {item.chosen ? "Carvel" : item.category} Collections: Comfortably
            feel of the 
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
        ))}
    </div>
  );
}

export default CollectionTitle;