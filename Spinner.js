import React from "react";

export const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h1>{props.message}</h1>
      </div>
      {/* the above p is for example only try for future projects*/}
    </div>
  );
};

// 2nd way to display msg after loading
Spinner.defaultProps = {
  message: "Loading...!!!",
};
export default Spinner;
