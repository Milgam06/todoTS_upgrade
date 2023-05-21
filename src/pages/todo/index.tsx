import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    console.log(localStorage.getItem("todoPlans"));
  }, []);
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

  useEffect(() => {
    const plans: any = localStorage.getItem(STORAGE_TODO_KEY);
    const plan_arr = JSON.parse(plans);
    setToDos(plan_arr);
  }, []);

  return (
    <S.ToDoWrapper>
      <S.ToDoContainer>
        <S.ToDoTitle>TODOLIST</S.ToDoTitle>
        <>
          {toDos === null ? (
            <S.ToDoPlans>ToDo를 적어보세요!</S.ToDoPlans>
          ) : (
            <S.ToDoPlans>
              {Object.keys(toDos).map((key: string, i) => (
                <S.ToDoItems>{toDos[key].text}</S.ToDoItems>
              ))}
            </S.ToDoPlans>
          )}
        </>
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
