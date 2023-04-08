import React from 'react'

export default function Button(props) {
  return (
    <div>
    <button className="btn btn-primary" type="submit" style={{backgroundColor:props.color}}>{props.label}</button> 

    </div>
  )
}
