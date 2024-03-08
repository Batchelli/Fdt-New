import styles from "./Header.module.css";
import lbosch from "../../assets/bl/Bosch_symbol_logo_black_red.svg";
import { Link } from 'react-router-dom'
 
 
const Header = () => {
 
  const handleLogout = () => {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('trilha');
    window.location.href = '/';
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
                  <Link to="/Admin" className={styles.menuLink}>
                    <p className={styles.txtP}>Admin</p>
                  </Link>
                </button>
              ) : (
                <h1></h1>
              )}
              <button className={styles.btn}>
                <Link to="/Trilhas" className={styles.menuLink}>
                  <p className={styles.txtP}>Trilhas</p>
                </Link>
              </button>
              <button onClick={handleLogout} className={styles.btn}>
                <Link to="/" className={styles.menuLink}>
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