import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import Container from "@components/Container";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Image src='/logo.png' alt='stigmergic-logo' width={32} height={32} />
          &nbsp;&nbsp;
          {/* <Link href='/'>Stigmergic Organization</Link> */}
        </p>
        <w3m-button balance='hide' />
      </Container>
    </header>
  );
};

export default Header;
