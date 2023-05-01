import { Link } from "react-router-dom";
import willieDeanTrio from "../../assets/willieDeanTrio.svg";

import styles from "./Merch.module.css";

function Merch() {
  return (
    <div>
      <section className={styles.topPane}>
        <Link to="/">
          <img
            src={willieDeanTrio}
            className={styles.mainLogo}
            alt="Vite logo"
          />
        </Link>
        <h1>Merchandise</h1>
      </section>
    </div>
  );
}

export default Merch;
