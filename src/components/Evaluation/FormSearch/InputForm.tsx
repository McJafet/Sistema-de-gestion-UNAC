import styles from "./InputForm.module.css";
import SearchSVG from "../../iconsSVG/SearchSVG";

interface InputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  isActivated: boolean;
  informationUser: IInformationUser;
  handleSearch: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm({
  id,
  type,
  label,
  placeholder,
  informationUser,
  handleSearch,
  handleChange,
}: InputProps): JSX.Element {
  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.formLabel}>
        {label}
      </label>
      {type == "search" ? (
        <>
          <input
            name={id}
            type={type}
            id={id}
            className={`${styles.formInput} ${
              informationUser[id as keyof IInformationUser] &&
              styles.input_activate
            }`}
            placeholder={placeholder}
            value={informationUser[id as keyof IInformationUser]}
            onChange={handleChange}
          />
          <button className={styles.containerSearch} onClick={handleSearch}>
            <SearchSVG color={"#01c19e"} />
          </button>
          <span>Para caso de prueba inserte el codigo 2912</span>
        </>
      ) : (
        <input
          name={id}
          type={type}
          id={id}
          onChange={handleChange}
          className={`${styles.formInput} ${
            informationUser[id as keyof IInformationUser] &&
            styles.input_activate
          }`}
          placeholder={label}
          disabled={true}
          value={informationUser[id as keyof IInformationUser]}
        />
      )}
    </div>
  );
}
