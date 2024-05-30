import { useState } from "react";
import escudo from "../../../assets/escudoUNAC.png";
import styles from "./FormSeachEvaluation.module.css";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import dataUser from "../../../data/dataUser.json";
import { Link } from "react-router-dom";
import { listInput, listSelect } from "../helpers/helperData";
import { useToggleButton } from "../../context/storeButton";

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
  const [informationUser, setInformationUser] = useState(
    INITIAL_INFORMATION_USER
  );

  const [informationFormUser, setInformationFormUser] = useState(
    INITIAL_INFORMATION_FORM_USER
  );

  const [isInputActivate, setIsInputActivate] = useState(false);

  const showButton = useToggleButton((state) => state.show);

  const toggleButton = useToggleButton((state) => state.toggleShowButton);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInformationUser({
      ...informationUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const { codigo } = informationUser;

    const findUser = dataUser.find((user) => user.codigo === codigo);

    if (!findUser) {
      setInformationFormUser({
        ...informationFormUser,
        ...INITIAL_INFORMATION_FORM_USER,
      });
      setInformationUser({ ...informationUser, ...INITIAL_INFORMATION_USER });
      setIsInputActivate(false);
    } else {
      setInformationFormUser({ ...informationFormUser, ...findUser });
      setInformationUser({
        ...informationUser,
        codigo: findUser.codigo,
        fullname: findUser.fullname,
      });
      setIsInputActivate(true);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <h2>Evaluación del docente en la UNAC</h2>
        <img src={escudo} alt="Escudo UNAC" />
      </div>

      <form className={styles.form}>
        {listInput.map((input) => {
          const { id, type, label, placeholder } = input;
          return (
            <InputForm
              id={id}
              type={type}
              label={label}
              placeholder={placeholder}
              isActivated={isInputActivate}
              informationUser={informationUser}
              handleSearch={handleSearch}
              handleChange={handleChange}
              key={id}
            ></InputForm>
          );
        })}
        {listSelect.map((select) => {
          const { id, options, label, placeholder } = select;
          const optionsSelect = informationFormUser[
            id as keyof IInformationFormUser
          ] as string[];

          const selectoptions = [...options, ...optionsSelect];

          return (
            <SelectForm
              id={id}
              options={selectoptions}
              placeholder={placeholder}
              label={label}
              key={id}
              handleChange={handleChange}
              informationUser={informationUser}
              isActivated={isInputActivate}
            />
          );
        })}
      </form>
      <div
        className={`${styles.btnActions} ${
          showButton ? styles.buttonDisabled : ""
        }`}
      >
        <Link to={informationUser.evaluations}>
          <button
            type="submit"
            className={styles.btnSend}
            disabled={!isInputActivate}
            onClick={() => toggleButton(!showButton)}
          >
            Iniciar evaluación
          </button>
        </Link>

        <Link to={"/"}>
          <button type="submit" className={styles.btnCancel}>
            Salir del sistema
          </button>
        </Link>
      </div>
    </>
  );
}
