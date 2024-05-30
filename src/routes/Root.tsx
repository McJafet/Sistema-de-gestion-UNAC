import { Navigate, Route, Routes } from "react-router-dom";

import { LayoutEvaluation } from "../page/Evaluation/LayoutEvaluation";
import FormEvaluation from "../components/Evaluation/FormEvaluation/FormEvaluation";

export default function Root() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/evaluation" replace={true} />}
      ></Route>
      <Route element={<LayoutEvaluation />} path="evaluation">
        <Route
          path=":typeEvaluation"
          element={<FormEvaluation></FormEvaluation>}
        />
      </Route>
    </Routes>
  );
}
