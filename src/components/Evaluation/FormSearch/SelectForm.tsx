import { useEffect, useState } from "react";
import styles from "./FormSeachEvaluation.module.css";

interface SelectProps {
    id: string;
    label: string;
    options: string[];
    isActivated: boolean;
    informationUser: IInformationUser;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectForm({
    id,
    label,
    options,
    isActivated,
    informationUser,
    handleChange,
}: SelectProps) {
    const initialSelectValue = informationUser[id as keyof IInformationUser] || options[0];
    const [isInvalid, setIsInvalid] = useState(initialSelectValue === options[0]);

    const handleValidate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIsInvalid(e.target.value === options[0]);
    };

    useEffect(() => {
        setIsInvalid(initialSelectValue === options[0]);
    }, [initialSelectValue, options]);

    return (
        <div className={styles.formField}>
            <label htmlFor={id} className={styles.formLabel}>
                {label}
            </label>
            <div className={styles.select}>
                <select
                    id={id}
                    className={`${styles.formSelect} ${isInvalid ? styles.invalid : styles.valid}`}
                    value={informationUser[id as keyof IInformationUser] || ""}
                    onChange={(e) => {
                        handleChange(e);
                        handleValidate(e);
                    }}
                    disabled={!isActivated}
                    name={id}
                >
                    {options.map((op: string) => (
                        <option value={op} key={op} className={styles.options}>
                            {op}
                        </option>

                    ))}
                </select>
            </div>
        </div>
    );
}
