import { Link } from "react-router-dom";
import styles from "./MerchList.module.css";
import { tShirtStripeCheckoutLink } from "../Merch.constants";

interface MerchItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

function MerchItem({ name, price, image }: MerchItem) {
  return (
    <div className={styles.merchItem}>
      <div>
        <Link
          to={tShirtStripeCheckoutLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt={name} className={styles.merchItem_image} />
        </Link>
      </div>
      <div className={styles.merchItem_detailsContainer}>
        <div className={styles.merchItem_name}>{name}</div>
        <div className={styles.merchItem_price}>{price}</div>
      </div>
    </div>
  );
}

interface MerchListProps {
  merchList: MerchItem[];
}

function MerchList({ merchList }: MerchListProps) {
  return (
    <div>
      <div className={styles.gridContainer}>
        {merchList.map((merchItem) => {
          return (
            <MerchItem
              key={merchItem.id}
              id={merchItem.id}
              name={merchItem.name}
              price={merchItem.price}
              image={merchItem.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MerchList;
