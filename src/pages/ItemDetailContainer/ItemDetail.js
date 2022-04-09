import React, { useReducer } from "react";
import ItemAside from "./ItemAside";
import "./ItemDetail.scss";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";


const reducer = (state, action) => {
  switch (action.type) {
    case "TINY":
      return { tiny: !state.tiny };
    case "SMALLEST":
      return { smallest: !state.smallest };
    case "SMALL":
      return { small: !state.small };
    case "MEDIUM":
      return { medium: !state.medium };
    case "BIG":
      return { big: !state.big };
    case "HUGE":
      return { huge: !state.huge };

    default:
      return state;
  }
};

const ItemDetail = ({ sneakers }) => {
  const [state, dispatch] = useReducer(reducer, {
    tiny: false,
    smallest: false,
    small: false,
    medium: false,
    big: false,
    huge: false,
  });

  if (!sneakers.items) {
    return null;
  }

  return (
    <section className="item__detail">
      <ItemImage sneakers={sneakers} />
      <ItemInfo sneakers={sneakers} state={state} dispatch={dispatch} />
      <ItemAside sneakers={sneakers} />
    </section>
  );
};

export default ItemDetail;
