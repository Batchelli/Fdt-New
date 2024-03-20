import styles from "./Header.module.css";
import lbosch from "../../assets/bl/BoschLogo.svg";
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useType } from "../../UseAuth";
import { jwtDecode } from "jwt-decode";


const Header = () => {
  const { type: userType } = useType();

  const token = localStorage.getItem('access_token');
  const decodedToken = jwtDecode(token);


  return (
    <>
      <div className={styles.sp} />
      <div className={styles.headerContainer}>
        <div className={styles.headerAling}>
          <div className={styles.header}>
            <img className={styles.lb} src={lbosch} alt="Logo" />
            <div className={styles.menuBar}>
              {decodedToken.tipo_user === "Admin" && (
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
