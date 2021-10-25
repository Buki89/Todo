import React, { VFC, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { useTasksContext } from "../../context/Tasks/tasks-context";
import { useHistory } from "react-router-dom";

const changeColor = keyframes`
  from {
    background-color: #40375920;
  }
  to {
    background-color: #40375950;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.primary.main}20`};
  padding: 1rem;
  border-radius: 0.75rem;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: calc(100% - 2rem);
  &:hover {
    animation: ${changeColor} 0.4s ease-in-out forwards;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2vh 1rem;
  }
`;

const Category = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #000;
`;

const Tasks = styled(Category)`
  color: #00000085;
  font-size: 0.875rem;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const Chevron = styled(FaChevronRight)`
  color: ${({ theme }) => theme.colors.primary.main};
`;

type CategoryItemProps = {
  icon: React.ReactNode;
  category: string;
};

const CategoryItem: VFC<CategoryItemProps> = ({ category, icon }) => {
  const { state } = useTasksContext();
  const history = useHistory();
  const tasks =
    state?.tasks?.filter((task) => task.category === category).length ?? 0;

  const handleClick = useCallback(() => history.push("/create"), [history]);

  return (
    <Container onClick={handleClick}>
      <FlexBox>
        {icon}
        <CategoryContainer>
          <Category>{category}</Category>
          <Tasks>{`${tasks} tasks`}</Tasks>
        </CategoryContainer>
      </FlexBox>
      <Chevron size="1rem" />
    </Container>
  );
};

export default CategoryItem;
