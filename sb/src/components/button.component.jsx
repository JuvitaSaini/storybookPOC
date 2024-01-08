import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: ${(props) => props.color};
`;

const Button = ({ color }) => {
  return <Btn color={color} >Button</Btn>
};

export default Button;
