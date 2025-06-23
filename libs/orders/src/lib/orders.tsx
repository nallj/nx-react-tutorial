import styles from './orders.module.css';
import { ReactMonorepoUi } from '@react-monorepo/ui';

export function ReactMonorepoOrders() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactMonorepoOrders!</h1>
      <ReactMonorepoUi />
    </div>
  );
}

export default ReactMonorepoOrders;
