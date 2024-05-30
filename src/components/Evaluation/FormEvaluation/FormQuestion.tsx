import { useState } from "react";
import CheckSVG from "../../iconsSVG/CheckSVG";
import CloseSVG from "../../iconsSVG/CloseSVG";
import styles from './FormEvaluation.module.css';

interface Props {
    item: string;
    index: number;
}

export default function FormQuestion({ item, index }: Props) {
    const [selected, setSelected] = useState<number | null>(null);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setSelected(value);
    };

    return (
        <tr key={`Q-${index}`} className={styles.row}>
            <td>{item}</td>
            <td className={styles.questions}>
                <label
                    htmlFor={`Q-${index + 1}-yes`}
                    className={`${styles.label} ${selected === 1 ? styles.selectedYes : ''}`}
                >
                    <CheckSVG color={selected === 1 ? "green" : "gray"} />
                    <input
                        type="radio"
                        name={`Q-${index + 1}`}
                        id={`Q-${index + 1}-yes`}
                        value={1}
                        className={styles.input}
                        onChange={handleInput}
                    />
                </label>
                <label
                    htmlFor={`Q-${index + 1}-no`}
                    className={`${styles.label} ${selected === 0 ? styles.selectedNo : ''}`}
                >
                    <CloseSVG color={selected === 0 ? "red" : "gray"} />
                    <input
                        type="radio"
                        name={`Q-${index + 1}`}
                        id={`Q-${index + 1}-no`}
                        value={0}
                        className={styles.input}
                        onChange={handleInput}
                    />
                </label>
            </td>
        </tr>
    );
}
