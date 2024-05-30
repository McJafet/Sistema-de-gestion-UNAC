import styles from "./FormSeachEvaluation.module.css";
import searchIcon from "../../../assets/icons/search.svg";

interface InputProps {
  id: string;
  type: string;
  label: string;
  isActivated: boolean;
  informationUser: IInformationUser;
  handleSearch: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm({
  id,
  type,
  label,
  isActivated,
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
            className={styles.formInput}
            placeholder={label}
            value={informationUser[id as keyof IInformationUser]}
            onChange={handleChange}

          />
          <button className={styles.containerSearch} onClick={handleSearch}>
            <img
              src={searchIcon}
              alt="searchIcon"
              className={styles.searchIcon}
            />
          </button>
        </>
      ) : (
        <input
          name={id}
          type={type}
          id={id}
          onChange={handleChange}
          className={`${styles.formInput} ${!isActivated ? styles.invalid : styles.valid}`}
          placeholder={label}
          disabled={true}
          value={informationUser[id as keyof IInformationUser]}
        />
      )}
    </div>
  );
}
