// Components needs to be created here
import React from "react";
import { useLocation } from 'react-router-dom';

export default function User() {
  const location = useLocation()
  const { from } = location.state
  return <div>{from}</div>;
}
