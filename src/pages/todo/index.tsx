import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styled";

export interface ToDoFormValue {
  todo: string;
}

export interface ToDoProps {
  [key: string]: {
    text: string;
    completed: boolean;
  };
}

const STORAGE_TODO_KEY = "todoPlans";

export const ToDoPage: React.FC = () => {
  const { register, watch, setValue } = useForm<ToDoFormValue>();
  const [toDos, setToDos] = useState<ToDoProps>({});
  const [compelete, setCompelete] = useState<boolean>(false);

  const text = watch("todo");

  const saveToDos = async (toSave: ToDoProps) => {
    const saveToDos = JSON.stringify(toSave);
    try {
      await localStorage.setItem(STORAGE_TODO_KEY, saveToDos);
    } catch (e) {
      //error 발견시 console.log(error)
      console.log(e);
    }
  };

  const addToDo = async () => {
    if (text === "") return;
    const newToDos = {
      ...toDos,
      [Date.now()]: { text: text, compelete: compelete },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setValue("todo", "");
    console.log(newToDos);
  };

  return (
    <S.ToDoWrapper>
      <S.ToDoContainer>
        <S.ToDoTitle>TODOLIST</S.ToDoTitle>
        <S.ToDoPlans>{localStorage.getItem("todoPlans")}</S.ToDoPlans>
        <S.ToDoInputContainer>
          <S.ToDoInput
            placeholder="텍스트를 입력해주세요..."
            {...register("todo", {
              required: "이 항목은 필수 입니다.",
            })}
          />
          <S.ToDoInputButton onClick={addToDo}>확인</S.ToDoInputButton>
        </S.ToDoInputContainer>
      </S.ToDoContainer>
    </S.ToDoWrapper>
  );
};
