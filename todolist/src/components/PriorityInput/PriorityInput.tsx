import React, { FC, useMemo } from "react";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";
import ErrorMessageBase from "../ErrorMessage";
import RadioInput from "../RadioInput";

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  position: relative;
`;

const ErrorMessage = styled(ErrorMessageBase)`
  bottom: -17px;
  left: 0;
`;

const Label = styled.label<{ error?: boolean }>`
  margin-bottom: 0.25rem;
  color: ${({ theme, error }) => error && theme.colors.error.main};
`;

const Box = styled.div`
  display: flex;
`;

const Value = styled.div<{ error: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary.contrastText};
  position: relative;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1rem;
  border: 0;
  border: 1px solid #403759;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme, error }) =>
    error
      ? `2px solid ${theme.colors.error.main}`
      : `2px solid ${theme.colors.border.main}`};
  &:focus {
    outline: none;
    border: ${({ theme, error }) =>
      !error && `2px solid ${theme.colors.primary.main}`};
  }
  &:focus {
    outline: none;
  }
`;

type PriorityInputProps = FieldRenderProps<string, HTMLInputElement>;

const PriorityInput: FC<PriorityInputProps> = ({ input, meta }) => {
  const label = useMemo(
    () => input.name[0].toUpperCase().concat(input.name.slice(1)),
    [input.name]
  );

  const err = meta.touched && meta.error;

  return (
    <Container>
      <Label error={err}>{label}</Label>
      <Box>
        <Value error={err}>
          {input.value}
          {meta.touched && meta.error && (
            <ErrorMessage>{meta.error}</ErrorMessage>
          )}
        </Value>
        <RadioInput {...input} value="3" name={input?.name} id="low" />
        <RadioInput {...input} value="2" name={input?.name} id="medium" />
        <RadioInput {...input} value="1" name={input?.name} id="high" />
      </Box>
    </Container>
  );
};

export default PriorityInput;
