import React from 'react';
import styles from './hostListItem.module.scss';

export default function TabContent({ tab, setTab }) {
  return (
{[    <div>
    <h3 className={styles.location}> 경기 펜션</h3>
    <ul className={styles.itemList}>
      <hostListItem tab={tab} setTab={setTab} />
    </ul>
  </div>,
      <div>
      <h3 className={styles.location}> 부산 펜션</h3>
      <ul className={styles.itemList}>
        <hostListItem tab={tab} setTab={setTab} />
      </ul>
    </div>,
        <div>
        <h3 className={styles.location}> 제주 펜션</h3>
        <ul className={styles.itemList}>
          <hostListItem tab={tab} setTab={setTab} />
        </ul>
      </div>][tab]}
  );
}
