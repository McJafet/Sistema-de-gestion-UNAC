import { Outlet as OutletFormType } from "react-router-dom";
import { FormSearchEvaluation } from "../../components/Evaluation/FormSearch/FormSearchEvaluation";
import styles from "../Evaluation/LayaoutEvaluation.module.css";

export function LayoutEvaluation() {
  return (
    <div className={styles.LayoutForm}>
      <FormSearchEvaluation />
      <div className={styles.Outlet}>
        <OutletFormType />
      </div>
    </div>
  );
}
