import React from "react";

export default function Dropdown(props) {
  const SetPermissionID = (event) => {
    props.changemodal(event.target.value);
  };
  return (
    <div>
      <label htmlFor="inputState" className="form-label">
        {props.label}
      </label>
      <select
        id="inputState"
        className="form-select"
        onChange={SetPermissionID}
      >
        <option>{props.defaultValue}</option>
        <option>{props.Value1}</option>
        <option>{props.Value2}</option>
        <option>{props.Value3}</option>
        <option>{props.Value4}</option>
      </select>
    </div>
  );
}
