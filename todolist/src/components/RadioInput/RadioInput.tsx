import React, { FC } from "react";
import { FieldInputProps } from "react-final-form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
`;

type RadioInputProps = FieldInputProps<string, HTMLInputElement> & {
  id: string;
  value: string;
};

const RadioInput: FC<RadioInputProps> = (props) => {
  const { name, id, value } = props;
  return (
    <Container>
      <input {...props} type="radio" id={id} name={name} value={value}></input>
      <label htmlFor={id}>{id}</label>
    </Container>
  );
};

export default RadioInput;
