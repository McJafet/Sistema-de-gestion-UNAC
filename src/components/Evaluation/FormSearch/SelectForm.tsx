import { useState, useRef } from "react";
import styles from "./SelectForm.module.css";
import ArrowSVG from "../../iconsSVG/ArrowSVG";

interface SelectProps {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  isActivated: boolean;
  informationUser: IInformationUser;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectForm({
  id,
  label,
  options,
  placeholder,
  isActivated,
  informationUser,
  handleChange,
}: SelectProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState("");
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLabelClick = (index: number) => {
    const input = inputRefs.current[index];
    if (input) {
      input.click();
      setValue(input.value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleChange(e);
  };

  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <div
        className={`${styles.formSelect} ${value && styles.option_isValidate}`}
        onClick={toggleShowOptions}
      >
        <div className={styles.placeholder}>
          {value === "" || showOptions ? (
            <span>{placeholder}</span>
          ) : (
            <p>{value}</p>
          )}
          <div
            className={`${styles.arrow} ${showOptions && styles.arrow_rotate}`}
          >
            <ArrowSVG color={"#938d8d"} />
          </div>
        </div>

        {showOptions && (
          <div className={styles.options}>
            {options.map((op, index) => (
              <label
                htmlFor={id + index}
                className={`${styles.option} `}
                onClick={() => handleLabelClick(index)}
              >
                {op}
                <input
                  ref={(el) => (inputRefs.current[index] = el!)}
                  type="radio"
                  name={id}
                  id={id + index}
                  className={styles.input}
                  value={op}
                  onChange={handleInputChange}
                />
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
