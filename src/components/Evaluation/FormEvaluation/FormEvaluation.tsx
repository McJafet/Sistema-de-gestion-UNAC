import { useParams } from "react-router-dom";
import data from "../../../data/dataEvaluation.json";
import styles from './FormEvaluation.module.css'
import FormQuestion from "./FormQuestion";


export default function FormEvaluation() {
  const { typeEvaluation } = useParams();

  const dataEvaluation = data.find(
    (evaluation) => evaluation.name == typeEvaluation
  );


  //Al enlazar con la base de datos recuerda que debes asegurarte que el tipo de evaluacion exista
  const { name, questions }: { name: string, questions: string[] } = dataEvaluation as { name: string, questions: string[] };

  return (
    <div className={styles.containerTable}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Preguntas de evaluación {name}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {questions.map((item, index) => {
            return (
              <FormQuestion item={item} index={index} key={index}></FormQuestion>
            );
          })}
        </tbody>
      </table>
      <div>
        <div className={styles.btnActions}>

          <button type="submit" className={styles.btnSend} >
            Enviar evaluación
          </button>

          <button type="submit" className={styles.btnCancel}>
            Cancelar
          </button>

        </div>
      </div>
    </div>
  );
}


