import styles from './products.module.css';
// import { ReactMonorepoUi } from '@react-monorepo/ui';

export function ReactMonorepoProducts() {
  return (
    <div className={styles['container']}>
      <h2>Welcome to Products!</h2>
      <p>This is a change. 👋</p>
      {/* <ReactMonorepoUi /> */}
    </div>
  );
}

export default ReactMonorepoProducts;
