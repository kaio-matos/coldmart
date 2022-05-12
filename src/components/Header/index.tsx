import Link from "next/link";
import Button from "../Buttons/Button";
import styles from "./header.module.css";

type MenuProps = {
    itens: { href: string; name: string }[];
};

function Menu({ itens }: MenuProps) {
    return (
        <ul className={styles.header__container__menu__ul}>
            {itens.map(({ href, name }) => (
                <li key={name}>
                    <Link href={href}>
                        <a className="link">{name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

function Header() {
    const menu_itens = [
        { href: "/solutions", name: "Soluções" },
        { href: "/card", name: "Cartão Coldmart" },
        { href: "/affiliates", name: "Afiliados" },
        { href: "/academy", name: "Academy" },
        { href: "/buyclass", name: "Comprar um curso" },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__container__logo}>
                    <h1>ColdMart</h1>
                </div>
                <nav className={styles.header__container__menu}>
                    <Menu itens={menu_itens} />
                </nav>
                <div></div>
                <div className={styles.header__container__buttons}>
                    <Link href="/login">
                        <Button type="light">Entrar</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Cadastre-se</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
