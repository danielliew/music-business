import { Link } from "react-router-dom";
import willieDeanTrio from "../../assets/willieDeanTrio.svg";

import styles from "./Merch.module.css";
import MerchList from "./components/MerchList";

import willieDeanTrioTShirt from "../../assets/merch/willieDeanTrioTShirt.png";

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
        <h1 className={styles.title}>Merchandise</h1>
      </section>

      <section>
        <MerchList
          merchList={[
            {
              id: "1",
              name: "Willie Dean Trio T-Shirt",
              price: '$20',
              image: willieDeanTrioTShirt,
            },
            {
              id: "2",
              name: "Willie Dean Trio Long Sleeve T-Shirt",
              price: '$25',
              image: willieDeanTrioTShirt,
            },
            {
              id: "3",
              name: "Willie Dean Trio Tank Top",
              price: '$18',
              image: willieDeanTrioTShirt,
            },
            {
              id: "4",
              name: "Willie Dean Trio Cap",
              price: '$20',
              image: willieDeanTrioTShirt,
            },
            {
              id: "5",
              name: "Willie Dean Trio Magnet",
              price: '$20',
              image: willieDeanTrioTShirt,
            },
            {
              id: "6",
              name: "Willie Dean Trio Sticker",
              price: '$20',
              image: willieDeanTrioTShirt,
            },
          ]}
        />
      </section>

      <section className={styles.footer}>
        <Link to="/">Back to Home</Link>
      </section>
    </div>
  );
}

export default Merch;
