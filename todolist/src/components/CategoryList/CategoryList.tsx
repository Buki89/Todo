import React, { FC } from "react";
import CategoryItem from "../CategoryItem";
import { IoBulbOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { IoBarbellSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import styled from "styled-components";

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

type CategoryListProps = {};

const CategoryList: FC<CategoryListProps> = () => {
  return (
    <Container>
      <CategoryItem
        category="Idea"
        icon={<IoBulbOutline size="1.75rem" color="#403759" />}
      />
      <CategoryItem
        category="Food"
        icon={<IoFastFoodOutline size="1.75rem" color="#403759" />}
      />
      <CategoryItem
        category="Work"
        icon={<FaLaptopCode size="1.75rem" color="#403759" />}
      />
      <CategoryItem
        category="Sport"
        icon={<IoBarbellSharp size="1.75rem" color="#403759" />}
      />
      <CategoryItem
        category="Home"
        icon={<IoHomeOutline size="1.75rem" color="#403759" />}
      />
    </Container>
  );
};

export default CategoryList;
