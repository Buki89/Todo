import { useCallback } from "react";
import { useMemo, VFC } from "react";
import DatePickerBase from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label<{ error?: boolean }>`
  margin-bottom: 0.25rem;
  color: ${({ theme, error }) => error && theme.colors.error.main};
`;

const DatePicker = styled(DatePickerBase)<{ error?: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary.contrastText};
  border-radius: 0.5rem;
  width: calc(100% - 1.25rem);
  padding: 0.5rem;
  font-size: 1rem;
  border: 0;
  margin-bottom: 1rem;
  border: ${({ theme, error }) =>
    error
      ? `2px solid ${theme.colors.error.main}`
      : `2px solid ${theme.colors.border.main}`};
  &:focus {
    outline: none;
    border: ${({ theme, error }) =>
      !error && `2px solid ${theme.colors.primary.main}`};
  }
`;

type DateInputType = FieldRenderProps<string, HTMLInputElement>;

const DateInput: VFC<DateInputType> = ({ input, meta }) => {
  const label = useMemo(
    () => input.name[0].toUpperCase().concat(input.name.slice(1)),
    [input.name]
  );

  const handleChange = useCallback(
    (date: Date | [Date | null, Date | null] | null) =>
      input.onChange(date?.toLocaleString().match(/[^,]*/)?.[0]),
    [input]
  );

  const err = meta.touched && meta.error;

  return (
    <Container>
      <Label error={err}>{label}</Label>
      <DatePicker error={err} {...input} onChange={handleChange} />
    </Container>
  );
};

export default DateInput;
