import { useState } from "react";

import "../css/state.css";

export default function State() {
  const [isAble, setIsAble] = useState<boolean>(false);
  const [isToolTip, setIsToopTip] = useState<boolean>(false);

  const stateBtnStyle = {
    background: isAble ? "gray" : "black",
    color: "white",
  };
  return (
    <div className="state_box">
      <button
        className="adjust_state"
        style={stateBtnStyle}
        onClick={() => {
          setIsAble((prev) => !prev);
        }}
      >
        {isAble ? "enable" : "disable"}
      </button>
      <button
        className="toolTip_target"
        onMouseEnter={() => {
          if (isAble) {
            setIsToopTip(true);
          }
        }}
        onMouseLeave={() => {
          if (isAble) {
            setIsToopTip(false);
          }
        }}
      >
        Hover
        {isAble && isToolTip && <button className="toolTip">toolTip</button>}
      </button>
    </div>
  );
}
