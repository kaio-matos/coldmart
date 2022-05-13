import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../Buttons/Button";
import styles from "./header.module.css";

interface MenuProps {
    itens: { href: string; name: string }[];
}

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

interface MobileProps extends MenuProps {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

function Mobile({ itens, isActive, setIsActive }: MobileProps) {
    return (
        <div
            className={`${styles.header__mobile} ${
                isActive && styles.header__mobile_active
            }`}
        >
            <div className={styles.header__mobile__title}>
                <span>Menu</span>
                <button
                    className={styles.header__mobile__title_button}
                    onClick={() => setIsActive(!isActive)}
                >
                    <GrFormClose fontSize={"2rem"} color="#545b64" />
                </button>
            </div>
            <nav className={styles.header__mobile__menu}>
                <Menu itens={itens} />
            </nav>
            <div className={styles.header__mobile__buttons}>
                <Link href="/buys">
                    <Button
                        rounded
                        style={{
                            fontSize: "1.1rem",
                            width: "100%",
                        }}
                        type="light-dark"
                    >
                        Acessar minhas compras
                    </Button>
                </Link>
                <Link href="/manage">
                    <Button
                        rounded
                        style={{
                            fontSize: "1.1rem",
                            width: "100%",
                        }}
                        type="light-dark"
                    >
                        Gerenciar meus negócios
                    </Button>
                </Link>
                <Link href="/register">
                    <Button
                        rounded
                        style={{ fontSize: "1.1rem", width: "100%" }}
                    >
                        Cadastre-se
                    </Button>
                </Link>
            </div>
        </div>
    );
}

function Header() {
    const [isDesktop, setIsDesktop] = useState(true);
    const [mobileActive, setMobileActive] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 1280) setIsDesktop(false);
        else setIsDesktop(true);
    });

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
                    {isDesktop && <Menu itens={menu_itens} />}
                </nav>
                <div></div>
                <div className={styles.header__container__buttons}>
                    {isDesktop ? (
                        <>
                            <Link href="/login">
                                <Button type="light-primary">Entrar</Button>
                            </Link>
                            <Link href="/register">
                                <Button>Cadastre-se</Button>
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={() => setMobileActive(!mobileActive)}
                            className={
                                styles.header__container__buttons__mobile_menu
                            }
                        >
                            <AiOutlineMenu fontSize={"1.5rem"} />
                        </button>
                    )}
                </div>
            </div>
            {!isDesktop && (
                <>
                    <Mobile
                        itens={menu_itens}
                        isActive={mobileActive}
                        setIsActive={setMobileActive}
                    />

                    <div
                        className={`${styles.header__mobile__background} ${
                            mobileActive &&
                            styles.header__mobile__background_active
                        }`}
                    ></div>
                </>
            )}
        </header>
    );
}

export default Header;
