import Link from "next/link";
import styles from "./header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <h1>ColdMart</h1>
            </div>
            <div className={styles.header__menu}>
                <ul>
                    <li>
                        <Link href="/solutions">
                            <a className="link">Soluções</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/card">
                            <a className="link">Cartão Coldmart</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/affiliates">
                            <a className="link">Afiliados</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/buyclass">
                            <a className="link">Comprar um curso</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.header__buttons}>
                <Link href="/login">
                    <a>Entrar</a>
                </Link>
                <Link href="/register">
                    <a>Cadastre-se</a>
                </Link>
            </div>
        </header>
    );
}

export default Header;
