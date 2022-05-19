import React from "react";
import "./CollectionTitle.scss";
import Typical from "react-typical";

function CollectionTitle({ productos }) {
  return (
    <div>
      {productos
        .filter((item, index) => index === 0)
        .map((item, index) => (
          <div key={index}>
            <h3
              className={item.chosen && "collection-title"}
              key={index}
              style={{
                marginTop: item.chosen ? "128px" : "0px",
                marginLeft: item.chosen ? "-25px" : "0px",
              }}
            >
              {item.chosen ? "Carvel" : item.category} Collections: <br />
              Comfortably feel of <br /> the 
              <span style={{ color: "#fff", textShadow: "none" }}>
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
                  className="collection-title-typical"
                />
              </span>
            </h3>
          </div>
        ))}
    </div>
  );
}

export default CollectionTitle;
