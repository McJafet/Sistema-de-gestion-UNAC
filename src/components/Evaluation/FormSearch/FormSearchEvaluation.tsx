import { useState } from "react";
import escudo from "../../../assets/escudoUNAC.png";
import styles from "./FormSeachEvaluation.module.css";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import dataUser from "../../../data/dataUser.json";
import { Link } from "react-router-dom";

const INITIAL_INFORMATION_FORM_USER: IInformationFormUser = {
  codigo: "",
  fullname: "",
  facultad: [],
  escuela: [],
  cursos: [],
  evaluations: [],
};

const INITIAL_INFORMATION_USER: IInformationUser = {
  codigo: "",
  fullname: "",
  facultad: "",
  escuela: "",
  cursos: "",
  evaluations: "",
};

export function FormSearchEvaluation() {
  const [isActivated, setIsActivated] = useState(false);

  const [informationUser, setInformationUser] = useState(
    INITIAL_INFORMATION_USER
  );

  const [informationFormUser, setInformationFormUser] = useState(
    INITIAL_INFORMATION_FORM_USER
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInformationUser({
      ...informationUser,
      [e.target.name]: e.target.value,
    });

  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const { codigo } = informationUser;

    const findUser = dataUser.find((user) => user.codigo === codigo);

    console.log(findUser);

    if (!findUser) {

      setInformationFormUser({ ...informationFormUser, ...INITIAL_INFORMATION_FORM_USER })
      setInformationUser({ ...informationUser, ...INITIAL_INFORMATION_USER })
      setIsActivated(false)
    } else {
      setInformationFormUser({ ...informationFormUser, ...findUser });
      setInformationUser({
        ...informationUser,
        codigo: findUser.codigo,
        fullname: findUser.fullname,
      });
      setIsActivated(true);

    }
  };


  console.log(informationUser)

  const listSelect = [
    {
      id: "facultad",
      label: "Facultad",

      options: ["Selecciona la facultad"],
    },
    {
      id: "escuela",
      label: "Escuela",

      options: ["Selecciona la escuela"],
    },
    {
      id: "cursos",
      label: "Cursos",

      options: ["Selecciona el curso"],
    },
    {
      id: "evaluations",
      label: " Tipo de evaluacion",

      options: ["Selecciona la evaluación"],
    },
  ];

  const listInput = [
    {
      id: "codigo",
      type: "search",
      label: "Codigo del docente",
    },
    {
      id: "fullname",
      type: "text",
      label: "Apellidos y nombres",
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <h2>Evaluación del docente en la UNAC</h2>
        <img src={escudo} alt="Escudo UNAC" />
      </div>

      <form className={styles.form}>
        {listInput.map((input) => {
          const { id, type, label } = input;
          return (
            <InputForm
              id={id}
              type={type}
              label={label}
              isActivated={isActivated}
              informationUser={informationUser}
              handleSearch={handleSearch}
              handleChange={handleChange}
              key={id}
            ></InputForm>
          );
        })}
        {listSelect.map((select) => {
          const { id, options, label } = select;
          const optionsSelect = informationFormUser[
            id as keyof IInformationFormUser
          ] as string[];

          const selectoptions = [...options, ...optionsSelect];

          return (
            <SelectForm
              id={id}
              options={selectoptions}
              label={label}
              key={id}
              handleChange={handleChange}
              informationUser={informationUser}
              isActivated={isActivated}
            />
          );
        })}
      </form>
      <div className={styles.btnActions}>
        <Link to={informationUser.evaluations}>
          <button type="submit" className={styles.btnSend}>
            Iniciar evaluación
          </button>
        </Link>
        <button type="submit" className={styles.btnCancel}>
          Salir del sistema
        </button>
      </div>
    </>
  );
}
