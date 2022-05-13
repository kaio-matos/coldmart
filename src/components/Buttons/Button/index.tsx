import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonProps = {
    children: ReactNode;
    type?: "default" | "light-primary" | "light-dark";
    rounded?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    style?: CSSProperties;
};

function Button({ children, type, onClick, style, rounded }: ButtonProps) {
    return (
        <div
            onClick={onClick}
            style={style}
            className={`${styles.button} ${styles[type ? type : "default"]} ${
                rounded && styles.rounded
            }`}
        >
            {children}
        </div>
    );
}

export default Button;
