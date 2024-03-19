import styles from "./Header.module.css";
import lbosch from "../../assets/bl/BoschLogo.svg";
import { Link } from 'react-router-dom'
 
 
const Header = () => {
 
  const handleLogout = () => {
    window.localStorage.removeItem('access_token');

  };

  let isAdmin = localStorage.getItem("trilha")
  const lowercaseIsAdmin = isAdmin ? isAdmin.toLowerCase() : '';
 
  let renderAdmin = lowercaseIsAdmin
 
  return (
    <>
      <div className={styles.sp} />
      <div className={styles.headerContainer}>
        <div className={styles.headerAling}>
          <div className={styles.header}>
            <img className={styles.lb} src={lbosch} alt="Logo" />
            <div className={styles.menuBar}>
              {renderAdmin === "Admin" ?(
                <button className={styles.btn}>
                  <Link to="/fdt/admin" className={styles.menuLink}>
                    <p className={styles.txtP}>Admin</p>
                  </Link>
                </button>
              ) : (
                <h1></h1>
              )}
              <button className={styles.btn}>
                <Link to="/fdt/trilhas" className={styles.menuLink}>
                  <p className={styles.txtP}>Trilhas</p>
                </Link>
              </button>
              <button onClick={handleLogout} className={styles.btn}>
                <Link to="/fdt/auth" className={styles.menuLink}>
                  <p className={styles.txtP}>Sair ➜</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Header;