import styles from './products.module.css';
import { ReactMonorepoUi } from '@react-monorepo/ui';

// This import is not allowed 👇
import { ReactMonorepoOrders } from '@react-monorepo/orders';

export function ReactMonorepoProducts() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <p>This is a change. 👋</p>
      <ReactMonorepoUi />
    </div>
  );
}

export default ReactMonorepoProducts;
