import React, { FC } from "react";
import styled from "styled-components";
import { ListTaskItem } from "../../components";
import { useTasksContext } from "../../context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary.contrastText};
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    border-radius: 0;
    overflow: auto;
    display: block;
    padding: 1rem 1rem 1.5rem;
    flex-grow: 1;
  } ;
`;

type TaskListProps = {};

const TaskList: FC<TaskListProps> = () => {
  const { state } = useTasksContext();
  const { tasks } = state;
  console.log("state", state);

  return (
    <Container>
      {tasks.map((task) => (
        <ListTaskItem key={task.id} taskName={task.taskName} />
      ))}
    </Container>
  );
};

export default TaskList;
