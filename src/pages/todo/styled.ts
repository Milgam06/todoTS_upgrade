import styled from "@emotion/styled";
import { colors } from "../../styles";

export const ToDoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToDoContainer = styled.div`
  border-radius: 15px;
  width: 40rem;
  max-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.1);
`;

export const ToDoTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 750;
  color: ${colors.darkPurple};
  padding: 2rem;
  border-bottom: 1px solid ${colors.gray};
`;

export const ToDoPlans = styled.div`
  width: 100%;
  font-size: 2rem;
  color: ${colors.darkPurple};
  padding: 1.1rem;
`;
export const ToDoInputContainer = styled.div`
  border-top: 1px solid ${colors.gray};
  padding: 0.4rem 3rem;
  width: 100%;
  display: flex;
  row-gap: 0.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const ToDoInput = styled.input`
  border: none;
  height: 3rem;
  padding: 0 0.4rem;
  width: 70%;
  &::placeholder {
    color: ${colors.darkGray};
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const ToDoInputButton = styled.button`
  border: none;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.white};
  background-color: ${colors.darkPurple};
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
