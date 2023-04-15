import styles from './ui-core.module.css';

/* eslint-disable-next-line */
export interface UiCoreProps {}

export function UiCore(props: UiCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCore!</h1>
    </div>
  );
}

export default UiCore;
