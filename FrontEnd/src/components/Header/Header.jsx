import styles from "./Header.module.css";
import lbosch from "../../assets/bl/BoschLogo.svg";
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useType } from "../../UseAuth";

const Header = () => {
  const { type: userType } = useType();

  return (
    <>
      <div className={styles.sp} />
      <div className={styles.headerContainer}>
        <div className={styles.headerAling}>
          <div className={styles.header}>
            <img className={styles.lb} src={lbosch} alt="Logo" />
            <div className={styles.menuBar}>
              {userType === "Admin" && (
                <Link to="/fdt/admin" className={styles.menuLink}>
                  <p className={styles.txtP}>Admin</p>
                </Link>
              )}
              <Link to="/fdt/trilhas" className={styles.menuLink}>
                <p className={styles.txtP}>Trilhas</p>
              </Link>
              <Link to="/fdt/auth" className={styles.menuLink}>
                <p className={styles.txtP}>Sair</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
