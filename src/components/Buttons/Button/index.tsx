import { MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonProps = {
    children: ReactNode;
    type?: "default" | "light";
    onClick?: MouseEventHandler<HTMLDivElement>;
};

function Button({ children, type, onClick }: ButtonProps) {
    return (
        <div
            onClick={onClick}
            className={styles.button + " " + styles[type ? type : "default"]}
        >
            {children}
        </div>
    );
}

export default Button;
