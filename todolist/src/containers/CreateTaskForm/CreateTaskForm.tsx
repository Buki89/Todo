import { FC } from "react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import {
  Button as ButtonBase,
  DateInput,
  Input,
  PriorityInput,
  SelectInput,
} from "../../components";
import { Task, Type } from "../../reducer";
import { isRequired } from "../../validators";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { useTasksContext } from "../../context/Tasks/tasks-context";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary.contrastText};
  border-radius: 0 0 1.5rem 1.5rem;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    border-radius: 0;
    flex-grow: 1;
  } ;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex: 2;
    align-items: flex-end;
  }
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled(ButtonBase)`
  width: 100%;
  padding: 1rem 0;
`;

const CreateTaskForm: FC = () => {
  const { dispatch } = useTasksContext();
  const history = useHistory();

  return (
    <Container>
      <Form
        onSubmit={(values: Task) => {
          dispatch({
            type: Type.addTask,
            payload: {
              ...values,
              id: uuidv4(),
              completed: false,
              createdAt: new Date().toLocaleString().match(/[^,]*/)?.[0],
            },
          });
          history.push("/dashboard");
        }}
        render={({ handleSubmit }) => (
          <SForm onSubmit={handleSubmit}>
            <Field name="taskName" validate={isRequired}>
              {(props) => <Input type="text" {...props} />}
            </Field>
            <Field name="category" validate={isRequired}>
              {(props) => <SelectInput {...props} />}
            </Field>
            <Field name="deadline">{(props) => <DateInput {...props} />}</Field>
            <Field name="notification">
              {(props) => <Input type="text" {...props} />}
            </Field>
            <Field name="priority" validate={isRequired}>
              {(props) => <PriorityInput {...props} />}
            </Field>
            <ButtonContainer>
              <Button type="submit">Add</Button>
            </ButtonContainer>
          </SForm>
        )}
      />
    </Container>
  );
};

export default CreateTaskForm;
