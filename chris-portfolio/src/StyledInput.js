import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  padding: 0 10px;
  box-sizing: border-box;
`;

const StyledInput = ({ type, placeholder, onChange, value }) => {
  return <Input type={type} placeholder={placeholder} onChange={onChange} value={value} />;
};

export default StyledInput;
