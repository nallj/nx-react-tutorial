import styles from './products.module.css';
import { ReactMonorepoUi } from '@react-monorepo/ui';

export function ReactMonorepoProducts() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactMonorepoProducts!</h1>
      <ReactMonorepoUi />
    </div>
  );
}

export default ReactMonorepoProducts;
