import { ReactFitty } from "react-fitty";

import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <ReactFitty className="screen" mode="single" max={70}>
      {value}
    </ReactFitty>
  );
};

export default Screen;