import React from "react";

function InputFields(props) {
  return (
    <>
      <input
        className="m-2 text-center form-control rounded"
        type="text"
        id="first"
        minLength={1}
        maxLength={1}
        onChange={(e) => {
          props.changeValue(e.target.value);
        }} />
    </>
  );
}
export default InputFields;
