import React from 'react'

export default function InputBox(props) {
    
  return (
    <div>
        <label htmlFor="" className="form-label">{props.label}</label>
    <input type={props.inputType} className="form-control" id={props.id} onChange = {props.onChange} value= {props.value} required placeholder={props.placeholder}/>
    </div>
  )
}
