import React, { VFC } from "react";
import styled from "styled-components";
import { Task } from "../../reducer";
import Checkbox from "../Checkbox";

const Container = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.primary.main}`};
  border-radius: 0.5rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
`;

const TaskContainer = styled.div`
  display: flex;
  flex: 1;
`;

type ListTaskItemProps = Pick<Task, "taskName">;

const ListTaskItem: VFC<ListTaskItemProps> = ({ taskName }) => {
  return (
    <Container>
      <Checkbox />
      <TaskContainer>{taskName}</TaskContainer>
    </Container>
  );
};

export default ListTaskItem;
