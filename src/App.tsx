import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToDoPage } from "./pages";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ToDoPage />} />
    </Routes>
  );
};

export default App;
